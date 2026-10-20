"use client";

import { useEffect, useState } from "react";

interface ContentBlock {
  heading: string;
  paragraph: string;
}

interface BlogData {
  title: string;
  slug_url: string;
  brief_paragraph: string;
  blog_image: string;
  published_date: string;
  category: number;
  blogs_content: ContentBlock[];
  metaTitle: string;
  metaDescription: string;
}

interface Category {
  category_id: number;
  category: string;
}

interface Props {
  editMode: boolean;
  blogId: number | null;
  onClose: () => void;
  onSaved: () => void;
}

const emptyBlock = (): ContentBlock => ({ heading: "", paragraph: "" });

const defaultBlog = (): BlogData => ({
  title: "",
  slug_url: "",
  brief_paragraph: "",
  blog_image: "",
  published_date: "",
  category: 1,
  metaTitle: "",
  metaDescription: "",
  blogs_content: Array.from({ length: 5 }, emptyBlock),
});

export default function BlogFormModal({ editMode, blogId, onClose, onSaved }: Props) {
  const [data, setData] = useState<BlogData>(defaultBlog());
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const token =
    typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;

  useEffect(() => {
    fetchCategories();
    if (editMode && blogId) fetchBlog();
    else setLoading(false);
  }, []);

  const fetchBlog = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/proxy/single-blog/${blogId}`);
      const json = await res.json();
      if (json.status === "success") {
        const b = json.data;
        setData({
          title: b.title ?? "",
          slug_url: b.slug_url ?? "",
          brief_paragraph: b.brief_paragraph ?? "",
          blog_image: b.blog_image ?? "",
          published_date: b.published_date ?? "",
          category: b.category ?? 1,
          metaTitle: b.metaTitle ?? "",
          metaDescription: b.metaDescription ?? "",
          blogs_content:
            b.blogs_content?.length > 0
              ? b.blogs_content
              : Array.from({ length: 5 }, emptyBlock),
        });
      }
    } catch {
      setError("Failed to load blog.");
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/categories");
      const json = await res.json();
      if (json.status === "success") {
        setCategories(json.data.filter((c: Category) => c.category !== "All"));
      }
    } catch {}
  };

  const handleField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: name === "category" ? parseInt(value) : value }));
  };

  const handleContent = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, idx: number) => {
    const { name, value } = e.target;
    setData((prev) => {
      const blocks = [...prev.blogs_content];
      blocks[idx] = { ...blocks[idx], [name]: value };
      return { ...prev, blogs_content: blocks };
    });
  };

  const handleImageFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { authorization: `Bearer ${token}` },
        body: formData,
      });
      const url = await res.text();
      setData((prev) => ({ ...prev, blog_image: url }));
    } catch {
      setError("Image upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const addBlock = () =>
    setData((prev) => ({ ...prev, blogs_content: [...prev.blogs_content, emptyBlock()] }));

  const removeBlock = (idx: number) =>
    setData((prev) => ({
      ...prev,
      blogs_content: prev.blogs_content.filter((_, i) => i !== idx),
    }));

  const handleSubmit = async () => {
    setError("");
    setSaving(true);
    const payload = {
      ...data,
      blogs_content: data.blogs_content.filter(
        (b) => b.heading.trim() !== "" && b.paragraph.trim() !== ""
      ),
    };

    try {
      const url = editMode ? `/api/proxy/blogs/${blogId}` : "/api/proxy/blogs";
      const method = editMode ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.status === "success") {
        onSaved();
        onClose();
      } else {
        setError(json.message || json.error || "Failed to save blog.");
      }
    } catch {
      setError("Server error.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 overflow-y-auto py-10 px-4 text-gray-800">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">
            {editMode ? "Edit Blog" : "Upload New Blog"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-2xl leading-none font-bold"
          >
            &times;
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-gray-400 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left column */}
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Banner Image URL</p>
                  <input
                    type="text"
                    placeholder="https://..."
                    value={data.blog_image}
                    onChange={(e) => setData((p) => ({ ...p, blog_image: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Or Upload Image</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageFile}
                    className="w-full text-sm text-gray-500 file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:bg-gray-100 file:text-gray-600 hover:file:bg-gray-200"
                  />
                  {uploading && (
                    <p className="text-xs text-gray-500 mt-1 animate-pulse">Uploading image...</p>
                  )}
                  {data.blog_image && (
                    <img
                      src={data.blog_image}
                      alt="preview"
                      className="mt-3 rounded-lg w-full object-cover h-40 border border-gray-200"
                    />
                  )}
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Meta Title</p>
                  <input
                    type="text"
                    placeholder="SEO meta title"
                    value={data.metaTitle}
                    onChange={(e) => setData((p) => ({ ...p, metaTitle: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Meta Description</p>
                  <textarea
                    placeholder="SEO meta description"
                    value={data.metaDescription}
                    onChange={(e) => setData((p) => ({ ...p, metaDescription: e.target.value }))}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Right column */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                <input
                  name="title"
                  placeholder="Blog Title *"
                  value={data.title}
                  onChange={handleField}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-gray-400"
                />

                <input
                  name="slug_url"
                  placeholder="Slug URL (e.g. my-blog-post) *"
                  value={data.slug_url}
                  onChange={handleField}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-gray-400"
                />

                <textarea
                  name="brief_paragraph"
                  placeholder="Brief Paragraph *"
                  value={data.brief_paragraph}
                  onChange={handleField}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none placeholder:text-gray-400"
                />

                <select
                  name="category"
                  value={data.category}
                  onChange={handleField}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
                >
                  {categories.map((c) => (
                    <option key={c.category_id} value={c.category_id}>
                      {c.category}
                    </option>
                  ))}
                </select>

                <input
                  name="published_date"
                  placeholder="Published Date (e.g. Jan 01, 2025) *"
                  value={data.published_date}
                  onChange={handleField}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-gray-400"
                />

                {/* Content blocks */}
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Content Sections</p>
                  <div className="flex flex-col gap-4">
                    {data.blogs_content.map((block, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-xl p-4 bg-gray-50 relative">
                        <p className="text-xs font-medium text-gray-500 mb-2">Section {idx + 1}</p>
                        <input
                          name="heading"
                          placeholder={`Heading ${idx + 1}`}
                          value={block.heading}
                          onChange={(e) => handleContent(e, idx)}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 mb-2 bg-white placeholder:text-gray-400"
                        />
                        <textarea
                          name="paragraph"
                          placeholder={`Paragraph ${idx + 1}`}
                          value={block.paragraph}
                          onChange={(e) => handleContent(e, idx)}
                          rows={4}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none bg-white placeholder:text-gray-400"
                        />
                        {idx >= 5 && (
                          <button
                            onClick={() => removeBlock(idx)}
                            className="absolute top-3 right-3 text-red-400 hover:text-red-600 text-sm font-bold"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={addBlock}
                    className="mt-3 w-full py-2.5 border-2 border-dashed border-gray-300 text-gray-500 rounded-xl text-sm font-medium hover:bg-gray-50 transition"
                  >
                    + Add Section
                  </button>
                </div>
              </div>
            </div>

            {error && (
              <p className="mt-4 text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            {/* Actions */}
            <div className="flex gap-3 mt-6 justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-50 transition"
              >
                Discard
              </button>
              <button
                onClick={handleSubmit}
                disabled={saving}
                className="px-8 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold transition disabled:opacity-60"
              >
                {saving ? "Saving..." : editMode ? "Save Changes" : "Upload Blog"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
