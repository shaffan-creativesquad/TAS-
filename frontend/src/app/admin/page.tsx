"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BlogFormModal from "@/components/admin/BlogFormModal";

interface Blog {
  blog_id: number;
  title: string;
  brief_paragraph: string;
  blog_image: string;
  published_date: string;
  category: number;
  slug_url: string;
}

interface Category {
  category_id: number;
  category: string;
}

interface PopupState {
  open: boolean;
  editMode: boolean;
  id: number | null;
}

export default function AdminPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [popup, setPopup] = useState<PopupState>({ open: false, editMode: false, id: null });
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }
    fetchBlogs();
    fetchCategories();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/proxy/blogs");
      const json = await res.json();
      if (json.status === "success") setBlogs(json.data);
    } catch {}
    setLoading(false);
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/categories");
      const json = await res.json();
      if (json.status === "success") setCategories(json.data);
    } catch {}
  };

  const getCategoryName = (id: number) => {
    const name = categories.find((c) => c.category_id === id)?.category ?? "";
    return name === "All" ? "" : name;
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`/api/proxy/blogs/${id}`, { method: "DELETE" });
      const json = await res.json();
      showToast(json.message || "Blog deleted.");
      fetchBlogs();
    } catch {
      showToast("Delete failed.");
    }
    setDeleteConfirm(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminInfo");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
        <h1 className="text-lg font-bold text-gray-800">Admin — Blogs</h1>
        <button
          onClick={handleLogout}
          className="text-sm text-gray-500 hover:text-red-500 transition font-medium"
        >
          Logout
        </button>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Upload button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setPopup({ open: true, editMode: false, id: null })}
            className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition shadow"
          >
            <span className="text-xl leading-none">+</span>
            Upload New Blog
          </button>
        </div>

        {/* Blog grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-14 h-14 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-lg">
            No blogs found. Upload your first blog!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.blog_id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition"
              >
                {blog.blog_image && (
                  <img
                    src={blog.blog_image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-5">
                  <p className="text-xs font-semibold text-cyan-600 uppercase tracking-wide mb-1">
                    {getCategoryName(blog.category)}
                  </p>
                  <h3 className="font-bold text-gray-800 text-base mb-1 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-2">{blog.published_date}</p>
                  <p className="text-sm text-gray-500 line-clamp-3 mb-4">
                    {blog.brief_paragraph}
                  </p>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setPopup({ open: true, editMode: true, id: blog.blog_id })}
                      className="flex-1 py-2 rounded-lg border border-cyan-500 text-cyan-600 text-sm font-medium hover:bg-cyan-50 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(blog.blog_id)}
                      className="flex-1 py-2 rounded-lg border border-red-400 text-red-500 text-sm font-medium hover:bg-red-50 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Blog form modal */}
      {popup.open && (
        <BlogFormModal
          editMode={popup.editMode}
          blogId={popup.id}
          onClose={() => setPopup({ open: false, editMode: false, id: null })}
          onSaved={() => {
            fetchBlogs();
            showToast(popup.editMode ? "Blog updated!" : "Blog uploaded!");
          }}
        />
      )}

      {/* Delete confirm modal */}
      {deleteConfirm !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Delete Blog?</h3>
            <p className="text-sm text-gray-500 mb-6">
              This action cannot be undone. Are you sure?
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 text-sm hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-800 text-white text-sm px-5 py-3 rounded-xl shadow-lg animate-fade-in">
          {toast}
        </div>
      )}
    </div>
  );
}
