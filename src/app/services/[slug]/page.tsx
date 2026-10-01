import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle, ArrowRight, Star, Clock, Award, Users, TrendingUp,
  PenLine, BookOpen, Palette, Globe, Megaphone, Headphones,
  FileText, Rss, Video, Briefcase, Baby, Image, Monitor, Laptop,
  Printer, BarChart2, Mic, BookMarked, Paintbrush, Search,
  LucideIcon,
} from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";

type SubService = { title: string; desc: string; tag: string };
type Step = { num: string; title: string; desc: string };
type Testimonial = { quote: string; name: string; title: string; result: string };
type Faq = { q: string; a: string };
type Stat = { value: string; label: string; icon: LucideIcon };

type ServiceData = {
  slug: string;
  color: string;
  lightBg: string;
  icon: LucideIcon;
  badge: string;
  headline: string;
  subline: string;
  desc: string;
  stats: Stat[];
  subServices: SubService[];
  steps: Step[];
  included: string[];
  testimonials: Testimonial[];
  faqs: Faq[];
  metaTitle: string;
  metaDesc: string;
};

const SERVICES: Record<string, ServiceData> = {
  ghostwriting: {
    slug: "ghostwriting",
    color: "#0891B2",
    lightBg: "#ECFEFF",
    icon: PenLine,
    badge: "Most Popular Service",
    headline: "Turn Your Idea Into a Bestselling Book",
    subline: "Professional ghostwriters who capture your voice — 100% confidential, 100% yours.",
    desc: "You have a story worth telling. We have the writers to tell it perfectly. Our team of 50+ professional ghostwriters has published over 1,200 books across every genre — all under our clients' names, all covered by a strict NDA. From a half-formed idea to a fully polished manuscript, we handle every word while you stay in control.",
    stats: [
      { value: "1,200+", label: "Books Ghostwritten", icon: PenLine },
      { value: "98%", label: "Client Satisfaction", icon: Award },
      { value: "8–10 Wks", label: "Average Delivery", icon: Clock },
      { value: "100%", label: "NDA Guaranteed", icon: Users },
    ],
    subServices: [
      { tag: "Fiction", title: "Fiction & Genre Books", desc: "Thrillers, romance, fantasy, sci-fi, literary fiction — our writers are genre specialists who craft stories readers can't put down." },
      { tag: "Non-Fiction", title: "Business & Self-Help", desc: "Position yourself as an industry authority. We craft compelling, insight-rich non-fiction books that build your brand and generate leads." },
      { tag: "Personal", title: "Memoir & Biography", desc: "Your life story deserves to be told beautifully. We conduct in-depth interviews and craft deeply personal narratives that resonate with readers." },
      { tag: "Youth", title: "Children's & Young Adult", desc: "From picture books to YA novels — age-appropriate stories with imagination, heart, and the right developmental voice." },
    ],
    steps: [
      { num: "01", title: "Discovery Call", desc: "We learn your vision, voice, target audience, and goals. You sign our NDA and we assign your dedicated ghostwriter." },
      { num: "02", title: "Outline & Research", desc: "Your writer creates a detailed chapter-by-chapter outline. We research your topic thoroughly before writing a single word." },
      { num: "03", title: "Chapter-by-Chapter Writing", desc: "Chapters are written and sent to you in batches. You review, give feedback, and we refine until you love every page." },
      { num: "04", title: "Full Manuscript Review", desc: "Once complete, the full manuscript goes through our internal editorial review for quality, consistency, and flow." },
      { num: "05", title: "Final Delivery", desc: "You receive the final manuscript in DOCX and PDF format — 100% owned by you, ready for editing or publishing." },
    ],
    included: [
      "Dedicated professional ghostwriter",
      "NDA signed before project starts",
      "Free sample chapter (first 3,000 words)",
      "Detailed chapter-by-chapter outline",
      "In-depth topic research",
      "Unlimited revision rounds",
      "Chapter-by-chapter review process",
      "Fiction & non-fiction genres covered",
      "Memoir & biography interviews",
      "Children's & YA writing specialists",
      "Consistent author voice matching",
      "Final DOCX + PDF delivery",
    ],
    testimonials: [
      { quote: "I had a story in my head for 10 years. The ghostwriting team turned it into a published novel in 9 weeks. The writer captured my voice so perfectly — my readers had no idea.", name: "Sarah M.", title: "Romance Author · Amazon Top 100", result: "Amazon Top 100" },
      { quote: "As a business coach, I needed a book that sounded like me. They interviewed me, built the outline, and delivered a manuscript I'm genuinely proud to put my name on.", name: "Dr. James K.", title: "Business Book Author · 8,000 Copies Sold", result: "8,000 Copies Sold" },
      { quote: "Professional, fast, and completely confidential. My memoir came out exactly as I imagined — emotional, honest, and beautifully written.", name: "Linda R.", title: "Memoir Author · 5-Star Rated", result: "5-Star on Goodreads" },
    ],
    faqs: [
      { q: "Is ghostwriting ethical and legal?", a: "Absolutely. Ghostwriting has been a legitimate profession for centuries. Politicians, CEOs, celebrities, and authors all use ghostwriters. You own the copyright fully and your name appears on the cover." },
      { q: "Will my name be on the book?", a: "Yes, 100%. The book is published under your name. We sign a strict NDA before starting, and we never disclose our involvement to anyone." },
      { q: "How do you match me with the right writer?", a: "We review your genre, tone preferences, sample text you admire, and project scope — then match you with a writer from our vetted team whose style and expertise fits your needs." },
      { q: "What if I don't like the writing?", a: "We provide a free 3,000-word sample chapter before you commit. Once the project starts, unlimited revisions are included until you're 100% satisfied." },
      { q: "How long does ghostwriting take?", a: "A standard 50,000-word book takes 8–10 weeks. Shorter books (children's, business) can be done in 3–5 weeks. Rush delivery is available." },
    ],
    metaTitle: "Professional Ghostwriting Services | The Author Success",
    metaDesc: "Expert ghostwriters for fiction, non-fiction, memoirs, and business books. 100% confidential, NDA signed, unlimited revisions. Your story — published under your name.",
  },

  editing: {
    slug: "editing",
    color: "#7C3AED",
    lightBg: "#F5F3FF",
    icon: BookOpen,
    badge: "Editorial Excellence",
    headline: "Flawless Manuscripts That Editors Love",
    subline: "Multi-level editing from developmental structure to final proofreading polish.",
    desc: "A great story deserves great editing. Our editorial team provides four levels of editing — developmental, line, copy, and proofreading — ensuring your manuscript is publication-ready, reader-approved, and worthy of five-star reviews. We don't just fix errors; we make your writing shine.",
    stats: [
      { value: "2,500+", label: "Manuscripts Edited", icon: BookOpen },
      { value: "99.9%", label: "Error-Free Rate", icon: Award },
      { value: "2–4 Wks", label: "Average Turnaround", icon: Clock },
      { value: "4.9/5", label: "Author Rating", icon: Star },
    ],
    subServices: [
      { tag: "Big Picture", title: "Developmental Editing", desc: "We assess the structure, pacing, character arcs, plot holes, and overall narrative flow — then provide a detailed editorial letter and in-manuscript notes." },
      { tag: "Sentence-Level", title: "Line & Copy Editing", desc: "Line-by-line refinement of your prose — clarity, rhythm, word choice, consistency, grammar, and style — for a manuscript that reads effortlessly." },
      { tag: "Final Pass", title: "Proofreading", desc: "The final sweep before publishing. We catch every remaining typo, punctuation error, formatting inconsistency, and stray comma." },
      { tag: "Feedback", title: "Manuscript Critique", desc: "Not ready for full editing? Get a detailed Reader's Report covering strengths, weaknesses, market positioning, and specific improvement recommendations." },
    ],
    steps: [
      { num: "01", title: "Manuscript Submission", desc: "Submit your manuscript via our secure portal. We accept DOCX, PDF, or Google Docs format." },
      { num: "02", title: "Editorial Assessment", desc: "Your editor reviews the full manuscript and identifies the key areas for improvement before editing begins." },
      { num: "03", title: "Editing Rounds", desc: "Your manuscript goes through its agreed editing levels with tracked changes, inline comments, and a detailed editorial letter." },
      { num: "04", title: "Author Review", desc: "You review all changes and comments. We schedule a call to discuss the editorial feedback and your questions." },
      { num: "05", title: "Final Polish", desc: "We incorporate your responses and deliver a clean, publication-ready manuscript ready for formatting." },
    ],
    included: [
      "Dedicated senior editor assigned",
      "Developmental structure analysis",
      "Plot and character arc review",
      "Line-by-line prose refinement",
      "Grammar, punctuation, syntax fixes",
      "Style guide adherence",
      "Tracked changes with comments",
      "Detailed editorial letter",
      "Pacing and flow improvements",
      "Dialogue enhancement",
      "Consistency checks throughout",
      "Two rounds of revisions included",
    ],
    testimonials: [
      { quote: "My manuscript came back cleaner and tighter than I thought possible. The developmental feedback revealed structural issues I'd been blind to for months. Worth every penny.", name: "Amanda R.", title: "Thriller Author · #1 Amazon Category", result: "#1 Amazon Category" },
      { quote: "Three editing passes and my memoir went from 'good' to 'unputdownable.' My editor understood exactly what the story needed.", name: "Marcus T.", title: "Memoir Author · Press Coverage", result: "Featured in Publishers Weekly" },
      { quote: "The editorial letter alone was worth the investment. Detailed, honest, and actionable. My next book will be so much better because of this edit.", name: "Claire O.", title: "Literary Fiction Author", result: "5-Star Reviews" },
    ],
    faqs: [
      { q: "What's the difference between the editing levels?", a: "Developmental editing looks at big-picture structure and story. Line editing refines prose quality. Copy editing fixes grammar and consistency. Proofreading is the final error sweep. We recommend them in sequence, but you can choose any level." },
      { q: "Do you edit all genres?", a: "Yes — fiction (all genres), non-fiction, memoirs, business books, self-help, children's books, academic, and more. We match you with an editor who specializes in your genre." },
      { q: "How long does editing take?", a: "A 60,000-word manuscript typically takes 2–4 weeks depending on the editing level. Proofreading is faster (5–7 days). Rush turnaround is available." },
      { q: "Will my voice be preserved?", a: "Absolutely. Our editors enhance your voice, they don't replace it. We respect your writing style and only make changes that serve clarity and readability." },
      { q: "What format should I submit my manuscript in?", a: "We prefer Microsoft Word (.docx) with double-spaced text and Times New Roman 12pt. We can also work with Google Docs or PDF." },
    ],
    metaTitle: "Professional Book Editing Services | The Author Success",
    metaDesc: "Developmental editing, line editing, copy editing, and proofreading by expert editors. Flawless manuscripts ready for publishing. Fast turnaround, unlimited revisions.",
  },

  "cover-design": {
    slug: "cover-design",
    color: "#D97706",
    lightBg: "#FFFBEB",
    icon: Palette,
    badge: "Visual Impact",
    headline: "Covers That Stop the Scroll and Sell the Book",
    subline: "Genre-accurate, eye-catching designs that convert browsers into buyers.",
    desc: "Readers judge books by their covers — and that's not a problem when your cover is exceptional. Our designers study bestseller aesthetics in your genre to create covers that feel instantly familiar yet completely unique. We deliver print-ready files, eBook covers, 3D mockups, and full series branding.",
    stats: [
      { value: "3,000+", label: "Covers Designed", icon: Palette },
      { value: "92%", label: "First-Concept Approval", icon: Award },
      { value: "10–14d", label: "Average Delivery", icon: Clock },
      { value: "400%", label: "Avg. Sales Lift", icon: TrendingUp },
    ],
    subServices: [
      { tag: "Digital", title: "eBook Cover Design", desc: "Amazon-optimized eBook covers designed to pop at thumbnail size. We analyze your genre's bestseller shelf to ensure yours stands out and fits in." },
      { tag: "Print", title: "Full Print Package", desc: "Complete print cover including front, spine, and back cover — sized to your exact page count and trim size, print-ready at 300dpi CMYK." },
      { tag: "Series", title: "Series Branding", desc: "Building a series? We create a consistent visual identity across all books so readers can instantly recognize your brand on the shelf." },
      { tag: "Marketing", title: "3D Mockup Renders", desc: "Photorealistic 3D renders of your book for social media, press releases, author website, and Amazon A+ content pages." },
    ],
    steps: [
      { num: "01", title: "Design Brief", desc: "You complete our detailed design brief covering genre, comparable titles, mood, color preferences, and any specific imagery ideas." },
      { num: "02", title: "Concept Research", desc: "Our designer analyzes your genre's bestsellers and develops 3 distinct cover concepts with different visual approaches." },
      { num: "03", title: "Concept Presentation", desc: "We present all 3 concepts with a rationale for each design decision. You choose your favorite direction." },
      { num: "04", title: "Design Refinement", desc: "We refine the chosen concept through as many revision rounds as needed until you love every detail." },
      { num: "05", title: "Final File Delivery", desc: "You receive print-ready CMYK PDF, eBook RGB JPG/PNG, and editable layered files — everything you need." },
    ],
    included: [
      "3 initial design concepts",
      "Genre bestseller research",
      "eBook cover (RGB, Amazon specs)",
      "Print front cover (CMYK 300dpi)",
      "Spine design (sized to page count)",
      "Back cover with blurb layout",
      "Author photo placement",
      "Barcode & ISBN placement",
      "Unlimited revision rounds",
      "3D photorealistic mockup renders",
      "Social media sizing variants",
      "Editable layered source files",
    ],
    testimonials: [
      { quote: "My cover stopped people scrolling on Amazon. Sales jumped 400% in week one. The designer nailed the thriller aesthetic perfectly — dark, tense, and impossible to ignore.", name: "Lisa P.", title: "Thriller Author · Amazon Top 100", result: "Amazon Top 100" },
      { quote: "Three concepts to choose from, all of them stunning. The final design looks like it belongs next to James Patterson on the shelf. This team gets book covers.", name: "Ryan B.", title: "Crime Fiction Author", result: "Bestseller Week 1" },
      { quote: "My series now has a consistent, professional look that readers immediately recognize. Branding across 5 books — all perfect.", name: "Sofia K.", title: "Fantasy Series Author · 20K Copies", result: "20,000 Copies Sold" },
    ],
    faqs: [
      { q: "How do I communicate what I want?", a: "We provide a detailed design brief form asking about your genre, comparable covers you love, mood, color preferences, and any specific ideas. The more detail you give us, the better the concepts." },
      { q: "What if I don't like any of the 3 initial concepts?", a: "In the rare case none of the concepts work for you, we'll create new directions at no extra charge. Our goal is a cover you love — we won't stop until we get there." },
      { q: "Do you provide the spine and back cover too?", a: "Yes, our full print package includes front cover, spine (sized to your exact page count), and back cover with blurb, author bio, and barcode placement." },
      { q: "What files do I receive?", a: "You receive: print-ready PDF (CMYK 300dpi), eBook JPG/PNG (RGB, Amazon optimized), 3D mockup renders, and the editable source files (PSD/AI)." },
      { q: "Can you design a cover for a book in a series I've already started?", a: "Absolutely. Send us your existing covers and we'll create a new cover that matches your established series aesthetic perfectly." },
    ],
    metaTitle: "Professional Book Cover Design Services | The Author Success",
    metaDesc: "Custom book cover design that sells. 3 concepts, unlimited revisions, print-ready + eBook files. Genre-specialist designers with 3,000+ covers published.",
  },

  publishing: {
    slug: "publishing",
    color: "#059669",
    lightBg: "#F0FDF4",
    icon: Globe,
    badge: "Global Distribution",
    headline: "From Manuscript to Global Bookstores in 72 Hours",
    subline: "Complete publishing setup — 40+ platforms, 100% royalties paid directly to you.",
    desc: "We handle the entire publishing process so you don't have to navigate it alone. From professional interior formatting and ISBN registration to Amazon KDP setup and global distribution through IngramSpark — your book reaches readers worldwide while you keep every cent of your royalties.",
    stats: [
      { value: "2,500+", label: "Books Published", icon: Globe },
      { value: "40+", label: "Global Platforms", icon: TrendingUp },
      { value: "72 hrs", label: "Live on Amazon", icon: Clock },
      { value: "100%", label: "Royalty Ownership", icon: Award },
    ],
    subServices: [
      { tag: "Amazon", title: "Amazon KDP Publishing", desc: "Complete Kindle and paperback setup on Amazon — optimized title, description, categories, keywords, and Amazon Author Central profile." },
      { tag: "Global", title: "IngramSpark Distribution", desc: "Get your book into bookstores, libraries, and 40+ online retailers worldwide through IngramSpark's global distribution network." },
      { tag: "Digital", title: "eBook Formatting", desc: "Professional EPUB and MOBI formatting validated for all major e-readers — Kindle, iPad, Kobo, Nook — with a clean, reflowable layout." },
      { tag: "Print", title: "Print Interior Formatting", desc: "Print-ready interior design with proper margins, fonts, headers, page numbers, and chapter styling for a truly professional printed book." },
    ],
    steps: [
      { num: "01", title: "Manuscript Assessment", desc: "We review your manuscript for formatting readiness and flag any issues before we begin the publishing process." },
      { num: "02", title: "Interior Formatting", desc: "We professionally format your interior for both print (PDF) and digital (EPUB/MOBI) with consistent, reader-friendly styling." },
      { num: "03", title: "ISBN & Copyright", desc: "We register your ISBN (print and digital), file copyright registration, and set up your official publisher information." },
      { num: "04", title: "Platform Setup", desc: "We create and optimize your Amazon KDP account, set up IngramSpark distribution, and configure all platform settings for maximum visibility." },
      { num: "05", title: "Live & Distributed", desc: "Your book goes live on Amazon within 72 hours and reaches global retailers within 6–8 weeks through IngramSpark distribution." },
    ],
    included: [
      "Print interior formatting (PDF)",
      "eBook formatting (EPUB + MOBI)",
      "ISBN registration (print + digital)",
      "Copyright filing assistance",
      "Amazon KDP account setup",
      "Kindle + paperback publishing",
      "Book description copywriting",
      "Category & keyword research",
      "Amazon Author Central setup",
      "IngramSpark distribution setup",
      "40+ platform global distribution",
      "100% royalties paid to your account",
    ],
    testimonials: [
      { quote: "Live on Amazon in 48 hours. The whole process was effortless — they handled every technical detail I was dreading. My book looked completely professional.", name: "Janet W.", title: "Fiction Author · Amazon Top 50", result: "Amazon Top 50" },
      { quote: "They handled everything — ISBN, formatting, Kindle, IngramSpark. Three weeks later my book was in Barnes & Noble and 30 other retailers. Incredible.", name: "Kevin L.", title: "Business Author · Wall Street Pick", result: "Wall Street Pick" },
      { quote: "The formatting quality is indistinguishable from a Big Five publisher. Headers, fonts, margins — absolutely perfect for both print and Kindle.", name: "Priya S.", title: "Self-Help Author · 12,000 Copies", result: "12,000 Copies Sold" },
    ],
    faqs: [
      { q: "Do I keep my royalties?", a: "100%. We set up publishing accounts in your name, and all royalties flow directly to your bank account. We never take a cut of your sales — ever." },
      { q: "What platforms will my book be available on?", a: "Amazon (Kindle + paperback), Barnes & Noble, Apple Books, Kobo, Google Play Books, IngramSpark (bookstores + libraries), Scribd, and 35+ additional platforms." },
      { q: "Will my book be in physical bookstores?", a: "Through IngramSpark distribution, bookstores can order your book. We set it up with returnable options to maximize physical retail placement." },
      { q: "Do I need my own Amazon account?", a: "We recommend setting up your own KDP account so royalties go directly to you. We handle all the technical setup — you just need to provide access." },
      { q: "How long until my book is live?", a: "Amazon Kindle: 24–72 hours. Amazon Paperback: 5–7 days. IngramSpark and other retailers: 4–6 weeks for full global distribution." },
    ],
    metaTitle: "Book Publishing & Distribution Services | The Author Success",
    metaDesc: "Professional book publishing on Amazon KDP and 40+ global platforms. ISBN registration, interior formatting, eBook conversion. 100% royalties. Live on Amazon in 72 hours.",
  },

  marketing: {
    slug: "marketing",
    color: "#0891B2",
    lightBg: "#F0F9FF",
    icon: Megaphone,
    badge: "Launch & Grow",
    headline: "Get Your Book in Front of the Right Readers",
    subline: "Data-driven marketing strategies that generate sales from day one.",
    desc: "A great book without marketing stays undiscovered. Our launch strategists combine Amazon SEO, social media campaigns, email marketing, influencer outreach, and press coverage to build pre-launch buzz and sustain post-launch momentum. We've helped over 300 authors hit bestseller status in their categories.",
    stats: [
      { value: "300+", label: "Bestsellers Launched", icon: TrendingUp },
      { value: "3x", label: "Avg. Sales Increase", icon: Award },
      { value: "50K+", label: "Avg. Launch Reach", icon: Users },
      { value: "4 Wks", label: "Pre-Launch Prep", icon: Clock },
    ],
    subServices: [
      { tag: "Strategy", title: "Book Launch Strategy", desc: "A full 90-day launch plan covering pre-launch buzz, launch day execution, and post-launch sustainment — mapped to your specific genre and audience." },
      { tag: "Amazon", title: "Amazon SEO & Optimization", desc: "Keyword research, category optimization, A+ content, book description copywriting, and Amazon Ads setup to maximize organic discoverability." },
      { tag: "Social", title: "Social Media Campaigns", desc: "Instagram, TikTok (BookTok), Facebook, and Pinterest campaigns targeting the right readers with content that gets shared." },
      { tag: "PR", title: "Press & Media Outreach", desc: "Professional press releases, media kit creation, and targeted outreach to book bloggers, podcasters, journalists, and book clubs." },
    ],
    steps: [
      { num: "01", title: "Market Research", desc: "We analyze your genre, target audience, competitive landscape, and identify the highest-impact marketing channels for your book." },
      { num: "02", title: "Launch Strategy Build", desc: "We create a customized 90-day launch plan with specific tactics, timelines, and deliverables for each marketing channel." },
      { num: "03", title: "Pre-Launch Campaign", desc: "ARC distribution to early readers, social media build-up, email list warming, and pre-order optimization — 4 weeks before launch." },
      { num: "04", title: "Launch Week Execution", desc: "Coordinated launch-day push across all channels — social posts, email blasts, influencer activations, and Amazon Ads go live simultaneously." },
      { num: "05", title: "Reporting & Optimization", desc: "Weekly analytics reports during the launch period with real-time optimization based on what's driving the most sales." },
    ],
    included: [
      "90-day marketing strategy document",
      "Amazon SEO keyword research",
      "Optimized book title & description",
      "Amazon category & keyword setup",
      "ARC (Advance Review Copy) program",
      "Email marketing campaign (3 sequences)",
      "Social media content calendar",
      "BookTok & Bookstagram outreach",
      "Press release writing & distribution",
      "Book blogger outreach (50+ contacts)",
      "Amazon Ads campaign setup",
      "Post-launch analytics reporting",
    ],
    testimonials: [
      { quote: "Pre-launch strategy got me 200 ARC readers before release day. I hit #1 in my Amazon category on launch day with 600 reviews in the first week.", name: "Michelle C.", title: "Romance Author · #1 Amazon Category", result: "#1 Amazon Category" },
      { quote: "The BookTok campaign went viral — 50,000 TikTok views in 3 days. My book sold out its first print run before launch week was over.", name: "Tyler S.", title: "YA Author · 15,000 Copies Sold", result: "15,000 Copies Sold" },
      { quote: "The Amazon SEO work alone tripled my organic traffic. Three months after launch I'm still seeing consistent daily sales because the discoverability is so strong.", name: "Nina P.", title: "Self-Help Author · Bestseller", result: "Sustained Bestseller" },
    ],
    faqs: [
      { q: "When should I start book marketing?", a: "Ideally 8–12 weeks before your launch date. Pre-launch activities like ARC distribution, email list building, and social media presence are critical for a strong launch day." },
      { q: "Do you run Amazon Ads?", a: "Yes, we set up and manage Sponsored Products and Sponsored Brands campaigns on Amazon, with ongoing optimization to maximize your ad spend ROI." },
      { q: "What is an ARC program?", a: "ARC (Advance Review Copy) is when we send your book to early readers before launch to generate verified reviews on Amazon and Goodreads before your official release date." },
      { q: "Can you help with a book that's already published?", a: "Absolutely. We can run marketing campaigns for existing titles to boost sales, improve Amazon rankings, and build a long-term reader audience." },
      { q: "Do you guarantee bestseller status?", a: "We can't guarantee specific rankings, but our strategies have achieved Amazon category bestseller status for over 300 authors. Results depend on your genre, competition, and execution of the strategy." },
    ],
    metaTitle: "Book Marketing Services | The Author Success",
    metaDesc: "Professional book launch strategy, Amazon SEO, social media campaigns, ARC programs, and PR outreach. 300+ bestsellers launched. 3x average sales increase.",
  },

  audiobooks: {
    slug: "audiobooks",
    color: "#BE185D",
    lightBg: "#FFF1F2",
    icon: Headphones,
    badge: "Fastest Growing Format",
    headline: "Reach Millions of Listeners Worldwide",
    subline: "Studio-quality audiobook production and distribution to Audible, Spotify & beyond.",
    desc: "The audiobook market is growing 25% year over year and now represents over $6 billion in annual revenue. Don't miss this audience. We handle professional narrator casting, studio-quality recording, post-production mastering, and distribution to all major audio platforms — with a finished product that rivals anything from a Big Five publisher.",
    stats: [
      { value: "400+", label: "Audiobooks Produced", icon: Headphones },
      { value: "3–5 Wks", label: "Average Delivery", icon: Clock },
      { value: "15+", label: "Audio Platforms", icon: Globe },
      { value: "25%", label: "Market Growth YoY", icon: TrendingUp },
    ],
    subServices: [
      { tag: "Narration", title: "Professional Human Narration", desc: "We cast the perfect narrator for your book's genre and tone from our network of 200+ professional voice artists with studio-quality home setups." },
      { tag: "Production", title: "Full Post-Production", desc: "Audio editing, noise reduction, mastering, chapter splitting, and ACX/Audible quality control — every file meets platform technical standards." },
      { tag: "Distribution", title: "Audible & Platform Distribution", desc: "ACX distribution to Audible, Amazon, and Apple Books. Findaway Voices distribution to Spotify, Scribd, Libro.fm, and 30+ additional platforms." },
      { tag: "Multilingual", title: "Multilingual Narration", desc: "Expand your audience globally with Spanish, French, German, and Portuguese narration options from native-speaking professional voice artists." },
    ],
    steps: [
      { num: "01", title: "Script Preparation", desc: "We prepare your manuscript as a clean narration script with pronunciation guides, character notes, and pacing instructions for the narrator." },
      { num: "02", title: "Narrator Casting", desc: "We present 3–5 narrator auditions matched to your book's genre and tone. You choose your voice, or we find additional options." },
      { num: "03", title: "Studio Recording", desc: "Your narrator records in a professional studio or acoustically-treated home studio. Each chapter is delivered as a raw audio file." },
      { num: "04", title: "Post-Production & Mastering", desc: "Audio editing, noise removal, breath reduction, leveling, and mastering to -23 LUFS — meeting every platform's technical specifications." },
      { num: "05", title: "Distribution & Go Live", desc: "We distribute to ACX (Audible) and Findaway Voices, handling all metadata, cover art sizing, and platform submissions." },
    ],
    included: [
      "Professional narrator casting (3 auditions)",
      "Script preparation & pronunciation guide",
      "Studio-quality recording sessions",
      "Audio editing & cleanup",
      "Noise reduction & mastering",
      "ACX technical quality check",
      "Chapter splitting & file labeling",
      "Audible & Amazon distribution via ACX",
      "Findaway Voices distribution (30+ platforms)",
      "Audiobook cover art (ACX specifications)",
      "Metadata and platform optimization",
      "Royalty setup in your account",
    ],
    testimonials: [
      { quote: "The narrator they chose sounded exactly like I'd always imagined my protagonist. The production quality is on par with audiobooks from major publishers. I couldn't be more impressed.", name: "Elena V.", title: "Horror Author · Audible Bestseller", result: "Audible Bestseller" },
      { quote: "On Audible in 4 weeks from submission. The narration quality rivals anything from a Big Five publisher. My listeners keep saying it's the best audiobook they've heard.", name: "Daniel H.", title: "Thriller Author · 5,000+ Listens", result: "5,000+ Listens in Month 1" },
      { quote: "The Spanish narration opened up an entirely new market for my book. Sales from Spanish-speaking listeners now account for 30% of my total revenue.", name: "Carlos M.", title: "Self-Help Author · Bilingual Release", result: "30% Revenue from New Market" },
    ],
    faqs: [
      { q: "How do I choose between royalty share and flat fee?", a: "Flat fee means you pay the narrator upfront and keep 100% of royalties. Royalty share means no upfront cost but you split royalties 50/50 with the narrator. We recommend flat fee if you expect strong sales." },
      { q: "Can I choose my own narrator?", a: "Yes. We provide auditions and you make the final choice. If you have a specific narrator in mind, we can reach out to them directly as well." },
      { q: "What's the difference between ACX and Findaway Voices?", a: "ACX distributes exclusively to Audible, Amazon, and Apple Books. Findaway Voices distributes to 30+ platforms including Spotify, Scribd, and Libro.fm — but without Audible exclusivity." },
      { q: "How long is the average audiobook?", a: "A 60,000-word book produces approximately 6–7 hours of audio. Shorter books (30,000 words) produce 3–4 hours. Length affects production time and narrator fees." },
      { q: "Do you offer author-narrated audiobooks?", a: "Yes. If you want to narrate your own book, we provide the recording guide, technical setup advice, and full post-production services to make your recording sound professional." },
    ],
    metaTitle: "Audiobook Production & Distribution Services | The Author Success",
    metaDesc: "Professional audiobook production — narrator casting, studio recording, mastering, and distribution to Audible, Spotify & 30+ platforms. Delivery in 3–5 weeks.",
  },

  "book-publishing": {
    slug: "book-publishing",
    color: "#0891B2", lightBg: "#ECFEFF", icon: BookMarked, badge: "Full-Service Publishing",
    headline: "Your Book Published Professionally on Every Platform",
    subline: "Complete book publishing from manuscript to global retail — fast, affordable, and 100% royalty-owned.",
    desc: "We manage the entire publishing process so you can focus on writing. From Amazon KDP and IngramSpark setup to global distribution across 40+ platforms, we handle every technical detail. Your book reaches readers worldwide while every royalty flows directly to your account.",
    stats: [
      { value: "2,500+", label: "Books Published", icon: BookMarked },
      { value: "40+", label: "Global Platforms", icon: Globe },
      { value: "72 hrs", label: "Live on Amazon", icon: Clock },
      { value: "100%", label: "Royalty Ownership", icon: Award },
    ],
    subServices: [
      { tag: "Amazon", title: "Amazon KDP Publishing", desc: "Kindle and paperback publishing with fully optimized metadata, categories, and keywords for maximum discoverability." },
      { tag: "Global", title: "IngramSpark Distribution", desc: "Bookstore and library distribution worldwide through IngramSpark's global network of 40,000+ retailers." },
      { tag: "Digital", title: "eBook Publishing", desc: "EPUB formatting and distribution to Kindle, Apple Books, Kobo, Nook, and all major e-reader platforms." },
      { tag: "Print", title: "Print-on-Demand Setup", desc: "Professional print-on-demand configuration so readers can order physical copies with no inventory risk to you." },
    ],
    steps: [
      { num: "01", title: "Manuscript Review", desc: "We check your manuscript and cover files for publishing readiness before beginning the setup process." },
      { num: "02", title: "Formatting", desc: "Interior formatting for both print PDF and digital EPUB, styled to professional publishing standards." },
      { num: "03", title: "ISBN & Metadata", desc: "ISBN registration, copyright setup, book description copywriting, and keyword/category research." },
      { num: "04", title: "Platform Setup", desc: "Amazon KDP and IngramSpark accounts configured and your book submitted for review." },
      { num: "05", title: "Live & Distributed", desc: "Your book goes live on Amazon within 72 hours and reaches global retailers within 4–6 weeks." },
    ],
    included: ["Amazon KDP account setup", "Kindle + paperback publishing", "ISBN registration", "Book description copywriting", "Category & keyword research", "eBook formatting (EPUB)", "Print interior formatting (PDF)", "IngramSpark distribution", "40+ platform global reach", "Amazon Author Central setup", "100% royalties to your account", "Publishing timeline report"],
    testimonials: [
      { quote: "Published on Amazon in 48 hours and live in Barnes & Noble within a month. The whole process was handled without me lifting a finger.", name: "Daniel H.", title: "Business Author · Wall Street Pick", result: "Wall Street Pick" },
      { quote: "Everything was taken care of — ISBN, formatting, all platforms. Professional quality that rivals Big Five publishers.", name: "Lisa P.", title: "Self-Help Author · 12K Copies", result: "12,000 Copies Sold" },
      { quote: "My book is now in 40+ countries. The global reach they set up has brought in readers I never expected.", name: "Maria G.", title: "Memoir Author", result: "Global Distribution" },
    ],
    faqs: [
      { q: "Do I keep my royalties?", a: "100%. All publishing accounts are set up in your name and royalties flow directly to your bank account. We never take a cut." },
      { q: "How fast will my book be live?", a: "Amazon Kindle goes live in 24–72 hours. Paperback takes 5–7 days. Global distribution via IngramSpark takes 4–6 weeks." },
      { q: "Do I need my own KDP account?", a: "We recommend your own account so royalties go directly to you. We handle all the technical setup — you just provide access." },
      { q: "What platforms will my book be on?", a: "Amazon, Barnes & Noble, Apple Books, Kobo, Google Play, Scribd, and 35+ more through IngramSpark." },
      { q: "Can you publish a book I already have?", a: "Yes. If you have a finished manuscript and cover, we can publish it immediately. We also offer formatting and cover design if needed." },
    ],
    metaTitle: "Professional Book Publishing Services | The Author Success",
    metaDesc: "Complete book publishing on Amazon KDP and 40+ global platforms. ISBN, formatting, distribution — 100% royalties kept by you. Live on Amazon in 72 hours.",
  },

  "book-promotion": {
    slug: "book-promotion",
    color: "#0891B2", lightBg: "#ECFEFF", icon: Megaphone, badge: "Boost Your Sales",
    headline: "Promote Your Book to Thousands of Readers",
    subline: "Strategic book promotion campaigns that drive reviews, rankings, and sustained sales.",
    desc: "Publishing a book is just the beginning — getting it in front of readers is where we come in. Our book promotion strategies combine Amazon ranking campaigns, influencer outreach, email promotions, and reader community engagement to create lasting visibility for your title.",
    stats: [
      { value: "500+", label: "Books Promoted", icon: Megaphone },
      { value: "3x", label: "Avg. Sales Lift", icon: TrendingUp },
      { value: "50K+", label: "Reader Reach", icon: Users },
      { value: "4.8/5", label: "Client Rating", icon: Award },
    ],
    subServices: [
      { tag: "Amazon", title: "Amazon Rank Campaigns", desc: "Coordinated free/discount promotions timed to push your book up Amazon's bestseller charts in your target categories." },
      { tag: "Reviews", title: "ARC & Review Programs", desc: "Advance Review Copy distribution to verified reader communities to generate authentic reviews before and after launch." },
      { tag: "Social", title: "BookTok & Bookstagram", desc: "Influencer outreach to BookTok creators and Bookstagram accounts with audiences matching your book's genre and readership." },
      { tag: "Email", title: "Reader Newsletter Blasts", desc: "Featured placement in curated book promotion newsletters reaching tens of thousands of active genre readers." },
    ],
    steps: [
      { num: "01", title: "Book Assessment", desc: "We review your book's genre, audience, current rankings, and existing reviews to build the right promotion strategy." },
      { num: "02", title: "Campaign Planning", desc: "We design a multi-channel promotion calendar with specific actions, timelines, and expected outcomes." },
      { num: "03", title: "ARC Distribution", desc: "Your book is sent to early reader communities to generate authentic reviews ahead of the main promotion push." },
      { num: "04", title: "Campaign Execution", desc: "All promotion channels go live simultaneously — Amazon ads, newsletter blasts, influencer posts, and social media." },
      { num: "05", title: "Results Report", desc: "You receive a full analytics report showing ranking movement, review growth, and sales performance." },
    ],
    included: ["90-day promotion strategy", "Amazon category optimization", "ARC reader distribution", "BookTok influencer outreach", "Bookstagram campaign", "Newsletter blast placements", "Amazon Ads campaign", "Review request sequences", "Social media content", "Press release distribution", "Ranking tracking reports", "Post-campaign analytics"],
    testimonials: [
      { quote: "My book jumped from #12,000 to #47 in my category within a week of the promotion campaign. The ARC readers delivered 80 reviews in the first two weeks.", name: "Rachel T.", title: "Romance Author · Amazon Top 100", result: "Amazon Top 100" },
      { quote: "The BookTok campaign alone drove 3,000 sales in 5 days. I had no idea that platform could move that kind of volume for an indie author.", name: "Marcus L.", title: "YA Author · 15K Copies", result: "15,000 Copies Sold" },
      { quote: "Consistent, sustained sales 6 months after launch because of the promotion infrastructure they built. My book keeps selling.", name: "Carol W.", title: "Self-Help Author", result: "Sustained Bestseller" },
    ],
    faqs: [
      { q: "When should I start book promotion?", a: "Ideally 6–8 weeks before launch for new books, or immediately for existing books that need a sales boost." },
      { q: "Can you promote a book that's already published?", a: "Absolutely. We run promotion campaigns for existing titles at any stage — launch, mid-life, or relaunch." },
      { q: "Do you guarantee bestseller status?", a: "We can't guarantee rankings, but our campaigns have achieved Amazon category bestseller status for hundreds of authors." },
      { q: "What genres do you promote?", a: "All genres — fiction, non-fiction, romance, thriller, self-help, business, children's, and more." },
      { q: "How is book promotion different from book marketing?", a: "Marketing builds long-term brand awareness. Promotion focuses on short-term sales spikes through specific campaigns and placements." },
    ],
    metaTitle: "Book Promotion Services | The Author Success",
    metaDesc: "Strategic book promotion campaigns — Amazon rankings, ARC programs, BookTok, newsletter blasts. 3x average sales increase. 500+ books promoted.",
  },

  "ebook-writing": {
    slug: "ebook-writing",
    color: "#0891B2", lightBg: "#ECFEFF", icon: FileText, badge: "Digital Publishing",
    headline: "Professional eBook Writing for Any Topic or Niche",
    subline: "Expert eBook writers who craft compelling digital content that informs, engages, and converts.",
    desc: "Whether you're building an authority eBook, a lead magnet, a Kindle bestseller, or a digital course companion, our writers produce polished, well-researched eBooks that deliver real value to your readers. All projects come with full NDA coverage and 100% copyright ownership.",
    stats: [
      { value: "800+", label: "eBooks Written", icon: FileText },
      { value: "2–6 Wks", label: "Average Delivery", icon: Clock },
      { value: "98%", label: "Client Satisfaction", icon: Award },
      { value: "100%", label: "Copyright Yours", icon: Users },
    ],
    subServices: [
      { tag: "Kindle", title: "Kindle eBook Writing", desc: "Amazon Kindle-optimized eBooks written for specific niches and genres, structured for maximum reader engagement and review generation." },
      { tag: "Lead Magnet", title: "Lead Magnet eBooks", desc: "Short, high-value eBooks designed to attract and convert leads for your business, email list, or online course funnel." },
      { tag: "Authority", title: "Authority eBooks", desc: "Long-form eBooks that establish you as an expert in your field — ideal for consultants, coaches, and thought leaders." },
      { tag: "Course", title: "Course Companion eBooks", desc: "Digital workbooks and companion guides for online courses, workshops, and coaching programs." },
    ],
    steps: [
      { num: "01", title: "Topic & Outline", desc: "We research your topic and create a detailed chapter outline for your approval before writing begins." },
      { num: "02", title: "Research & Writing", desc: "Your dedicated writer researches thoroughly and writes each chapter to your outline, voice, and style." },
      { num: "03", title: "Draft Review", desc: "You receive the full draft and provide feedback. We revise until every chapter meets your expectations." },
      { num: "04", title: "Editing & Polish", desc: "A senior editor reviews the final draft for clarity, flow, grammar, and consistency." },
      { num: "05", title: "Final Delivery", desc: "You receive the finished eBook in DOCX and PDF formats, ready for publishing or distribution." },
    ],
    included: ["Dedicated eBook writer assigned", "Topic research & outline", "NDA signed before project", "Chapter-by-chapter writing", "Unlimited revision rounds", "Senior editorial review", "SEO-optimized if required", "Formatted PDF version", "DOCX source file", "Cover design available", "100% copyright ownership", "Kindle publishing support"],
    testimonials: [
      { quote: "My lead magnet eBook gets 200+ downloads a week and converts at 40% to my email list. The writer nailed the tone perfectly.", name: "Jessica M.", title: "Business Coach · Lead Gen Expert", result: "40% Conversion Rate" },
      { quote: "Kindle eBook written, published, and hitting Top 100 in my niche within 2 weeks. The research quality was outstanding.", name: "Tom H.", title: "Fitness Author · Kindle Top 100", result: "Kindle Top 100" },
      { quote: "Three authority eBooks written in 6 months. Each one has positioned me as the go-to expert in my consulting niche.", name: "Dr. Sarah L.", title: "Business Consultant", result: "3 Published eBooks" },
    ],
    faqs: [
      { q: "How long can an eBook be?", a: "We write eBooks of any length — from 5,000-word lead magnets to 80,000-word Kindle novels and comprehensive guides." },
      { q: "What topics do you cover?", a: "Any topic — business, self-help, health, fitness, finance, technology, fiction, parenting, cooking, travel, and more." },
      { q: "Will the eBook be optimized for Kindle?", a: "Yes. We write with Kindle structure in mind — proper chapter breaks, reading flow, and formatting for the best reader experience." },
      { q: "Can I use the eBook as a lead magnet?", a: "Absolutely. We write eBooks specifically designed to convert — with the right hook, value delivery, and call-to-action structure." },
      { q: "Do you provide the cover design?", a: "Cover design is an optional add-on. We can create a professional cover optimized for your platform and use case." },
    ],
    metaTitle: "Professional eBook Writing Services | The Author Success",
    metaDesc: "Expert eBook writers for Kindle, lead magnets, authority content, and course companions. 800+ eBooks written. Fast delivery, unlimited revisions, 100% yours.",
  },

  "formatting-services": {
    slug: "formatting-services",
    color: "#0891B2", lightBg: "#ECFEFF", icon: BookOpen, badge: "Print & Digital Ready",
    headline: "Professional Book Formatting That Publishers Accept",
    subline: "Flawless interior formatting for print, eBook, and every major publishing platform.",
    desc: "Poor formatting is the fastest way to get rejected by readers — and publishing platforms. Our formatting specialists produce publication-ready files for print-on-demand and digital distribution that meet Amazon KDP, IngramSpark, and all major platform specifications. Your book will look as professional as any Big Five title.",
    stats: [
      { value: "3,000+", label: "Books Formatted", icon: BookOpen },
      { value: "5–7 Days", label: "Average Delivery", icon: Clock },
      { value: "100%", label: "Platform Approved", icon: Award },
      { value: "40+", label: "Platforms Supported", icon: Globe },
    ],
    subServices: [
      { tag: "Print", title: "Print Interior Formatting", desc: "Professional print layout with correct margins, fonts, headers, footers, page numbers, and chapter styling for a truly book-quality result." },
      { tag: "eBook", title: "EPUB & MOBI Formatting", desc: "Clean, reflowable EPUB and MOBI files validated for Kindle, Apple Books, Kobo, Nook, and all major e-reader devices." },
      { tag: "Complex", title: "Complex Layout Formatting", desc: "Cookbooks, workbooks, children's books, and illustrated guides with complex layouts requiring advanced design and formatting work." },
      { tag: "Series", title: "Series Consistency Formatting", desc: "Multi-book series formatting with consistent style guides across all titles for a unified professional look." },
    ],
    steps: [
      { num: "01", title: "File Assessment", desc: "We review your manuscript for any issues that need resolving before formatting begins." },
      { num: "02", title: "Style Setup", desc: "We establish your typography, spacing, chapter headings, and formatting style based on your genre conventions." },
      { num: "03", title: "Print Formatting", desc: "Full interior design for your specified trim size with print-ready PDF output at correct specifications." },
      { num: "04", title: "eBook Conversion", desc: "Clean EPUB/MOBI conversion validated against all major platform technical requirements." },
      { num: "05", title: "Quality Review & Delivery", desc: "Final quality check and delivery of all formatted files with a platform-specific spec checklist." },
    ],
    included: ["Print interior formatting (PDF)", "eBook formatting (EPUB + MOBI)", "Trim size configuration", "Font and typography setup", "Chapter heading design", "Page number and header styling", "Table of contents (print + digital)", "Front matter formatting", "Back matter formatting", "KDP & IngramSpark specs compliance", "Platform submission guidance", "One round of revision included"],
    testimonials: [
      { quote: "Submitted to KDP and IngramSpark on the first try — no errors, no rejections. The formatting quality is indistinguishable from a traditional publisher.", name: "Priya S.", title: "Self-Help Author · 12K Copies", result: "Zero Rejections" },
      { quote: "My cookbook formatting was complex with recipes, photos, and special layouts. They handled everything perfectly — it looks stunning.", name: "Chef Anna B.", title: "Cookbook Author", result: "Professional Layout" },
      { quote: "All 5 books in my series now have consistent, unified formatting. Readers keep commenting on how professional the interior looks.", name: "James C.", title: "Fantasy Series Author", result: "5-Book Series" },
    ],
    faqs: [
      { q: "What file format should I submit?", a: "We prefer Microsoft Word (.docx). We can also work with Google Docs or PDF. For complex layouts, please include any images or graphics separately." },
      { q: "What trim sizes do you support?", a: "All standard trim sizes — 5×8, 5.5×8.5, 6×9, and custom sizes. We format to your exact specifications." },
      { q: "Does formatting include cover design?", a: "No, formatting covers the interior only. Cover design is a separate service we also offer." },
      { q: "Will the EPUB work on all e-readers?", a: "Yes. We validate all EPUB files against Kindle, Apple Books, Kobo, and Nook specifications before delivery." },
      { q: "How do I know if my formatting is correct for KDP?", a: "We run your files through KDP's previewer and IngramSpark's file checker before delivering — zero surprises at submission." },
    ],
    metaTitle: "Professional Book Formatting Services | The Author Success",
    metaDesc: "Print and eBook interior formatting for Amazon KDP, IngramSpark, and all platforms. 3,000+ books formatted. Fast delivery, platform-approved files guaranteed.",
  },

  "digital-marketing": {
    slug: "digital-marketing",
    color: "#0891B2", lightBg: "#ECFEFF", icon: BarChart2, badge: "Data-Driven Growth",
    headline: "Digital Marketing That Puts Your Book in Front of Buyers",
    subline: "Full-funnel digital marketing strategies built specifically for authors and publishers.",
    desc: "In today's crowded book market, digital marketing is the difference between a book that sells and one that sits. Our team runs comprehensive digital campaigns — Amazon ads, social media, content marketing, email, and paid search — all optimized for the unique dynamics of the book market.",
    stats: [
      { value: "300+", label: "Campaigns Run", icon: BarChart2 },
      { value: "4x", label: "Avg. ROAS", icon: TrendingUp },
      { value: "100K+", label: "Monthly Reach", icon: Users },
      { value: "4.9/5", label: "Client Rating", icon: Award },
    ],
    subServices: [
      { tag: "Amazon", title: "Amazon Advertising", desc: "Sponsored Products, Sponsored Brands, and Display ads managed by Amazon Ads specialists who understand book buyer behavior." },
      { tag: "Social", title: "Social Media Advertising", desc: "Facebook, Instagram, and TikTok ads targeting readers by genre interest, comparable authors, and reading behavior." },
      { tag: "Content", title: "Content Marketing", desc: "Blog posts, author newsletters, and long-form content that attracts organic readers and builds lasting discoverability." },
      { tag: "SEO", title: "Author & Book SEO", desc: "Search engine optimization for your author website, Amazon product page, and Google discoverability." },
    ],
    steps: [
      { num: "01", title: "Audit & Strategy", desc: "We audit your current digital presence and build a channel-specific strategy with clear KPIs and budget allocation." },
      { num: "02", title: "Campaign Setup", desc: "All ad accounts, tracking pixels, and campaign structures are set up and configured before any spend begins." },
      { num: "03", title: "Content Creation", desc: "Ad creatives, copy, and landing pages are produced and A/B tested for maximum click-through and conversion." },
      { num: "04", title: "Launch & Optimize", desc: "Campaigns go live with daily monitoring and optimization for the first two weeks to maximize early performance." },
      { num: "05", title: "Monthly Reporting", desc: "Detailed monthly reports with spend, reach, clicks, conversions, and actionable insights for the next period." },
    ],
    included: ["Digital marketing strategy document", "Amazon Ads campaign setup & management", "Facebook & Instagram ad campaigns", "TikTok advertising (optional)", "Email marketing setup (3 sequences)", "Content calendar", "SEO optimization", "Ad creative design", "Conversion tracking setup", "Weekly performance updates", "Monthly detailed reports", "Ongoing campaign optimization"],
    testimonials: [
      { quote: "Amazon Ads ROAS of 6x in the first month. They know exactly how to target book buyers — the results spoke for themselves.", name: "Kevin L.", title: "Business Author · Bestseller", result: "6x Amazon Ads ROAS" },
      { quote: "Facebook campaigns drove 2,000 pre-orders before launch. The targeting was so precise — every click was a reader who actually wanted my book.", name: "Nina P.", title: "Romance Author", result: "2,000 Pre-Orders" },
      { quote: "Our author website traffic grew 400% in 3 months from the SEO and content strategy. Organic readers now find us every day.", name: "Rebecca S.", title: "Thriller Author", result: "400% Traffic Growth" },
    ],
    faqs: [
      { q: "What budget do I need for digital marketing?", a: "We work with budgets from $500/month upward. We'll recommend an allocation across channels based on your goals and genre." },
      { q: "Do you manage Amazon Ads?", a: "Yes — Sponsored Products, Sponsored Brands, and Display campaigns with ongoing bid optimization and keyword management." },
      { q: "How quickly will I see results?", a: "Amazon Ads typically show results within 1–2 weeks. Social ads take 2–4 weeks to optimize. SEO results build over 3–6 months." },
      { q: "Can you market a book in any genre?", a: "Yes. We have experience marketing books across all genres — fiction, non-fiction, self-help, business, children's, and more." },
      { q: "Do you create the ad creatives?", a: "Yes. Our design team produces all ad graphics, copy, and video creatives as part of the service." },
    ],
    metaTitle: "Digital Marketing for Authors & Books | The Author Success",
    metaDesc: "Full-funnel digital marketing for authors — Amazon Ads, social media, email, SEO, and content marketing. 300+ campaigns. Average 4x ROAS.",
  },

  "author-marketing": {
    slug: "author-marketing",
    color: "#0891B2", lightBg: "#ECFEFF", icon: Users, badge: "Build Your Brand",
    headline: "Build an Author Brand That Readers Remember",
    subline: "Strategic author marketing to grow your audience, platform, and long-term book sales.",
    desc: "Your author brand is your most valuable long-term asset. We help authors build a compelling, consistent brand identity across their website, social media, email list, and public presence — creating the kind of reader loyalty that turns one book into a multi-book career.",
    stats: [
      { value: "250+", label: "Authors Branded", icon: Users },
      { value: "10K+", label: "Avg. Email List Built", icon: Award },
      { value: "6 Mos", label: "Brand Build Timeline", icon: Clock },
      { value: "5x", label: "Repeat Reader Rate", icon: TrendingUp },
    ],
    subServices: [
      { tag: "Identity", title: "Author Brand Identity", desc: "Author name positioning, bio writing, brand voice definition, and visual identity system — logo, colors, and typography." },
      { tag: "Website", title: "Author Website", desc: "Professional author website built on your brand — with book pages, press kit, contact form, and email capture." },
      { tag: "Social", title: "Social Media Strategy", desc: "Platform selection, profile optimization, content strategy, and posting calendar tailored to your genre's reader community." },
      { tag: "Email", title: "Reader Email List Building", desc: "Lead magnet creation, email signup optimization, and automated welcome sequences to build and nurture your reader list." },
    ],
    steps: [
      { num: "01", title: "Brand Discovery", desc: "We learn your story, genre, target readers, comparable authors, and long-term career goals to anchor the brand strategy." },
      { num: "02", title: "Brand Identity", desc: "Author bio, positioning statement, visual identity, and brand voice guidelines are developed and approved." },
      { num: "03", title: "Platform Build", desc: "Website, social profiles, and email system are built and branded consistently across all touchpoints." },
      { num: "04", title: "Content Strategy", desc: "A 90-day content calendar is built with post templates, email sequences, and engagement strategies." },
      { num: "05", title: "Launch & Grow", desc: "Brand launches across all platforms with an initial growth push — social follows, email subscribers, and PR outreach." },
    ],
    included: ["Author brand strategy document", "Professional author bio (short + long)", "Brand voice guidelines", "Social media profile optimization", "90-day content calendar", "Email list setup & welcome sequence", "Reader community strategy", "Press kit design", "Media appearance preparation", "Comparable author analysis", "Genre reader community mapping", "Ongoing monthly brand report"],
    testimonials: [
      { quote: "My email list went from 200 to 8,000 subscribers in 4 months. The brand strategy they built completely transformed how readers see me.", name: "Emily C.", title: "Romance Author · 8K Email List", result: "8,000 Subscribers" },
      { quote: "I went from unknown indie author to a recognized name in my niche. The brand consistency across website, social, and email makes all the difference.", name: "Dr. Robert M.", title: "Business Author", result: "Recognized Niche Expert" },
      { quote: "My second book launch was 10x bigger than my first because the audience was already there. Building the brand first was the best investment I made.", name: "Lisa K.", title: "Self-Help Author", result: "10x Second Launch" },
    ],
    faqs: [
      { q: "What's included in an author brand?", a: "Your name positioning, bio, visual identity, website, social media presence, email list, and the consistent voice across all platforms." },
      { q: "Which social platforms should I focus on?", a: "It depends on your genre. BookTok (TikTok) and Instagram work well for fiction. LinkedIn and Twitter work for business/non-fiction. We recommend the right ones for you." },
      { q: "Do I need a website as an author?", a: "Yes — it's your home base that you own. Unlike social media, your website can't be taken away and it builds long-term SEO value." },
      { q: "How long does it take to build an author brand?", a: "The initial brand build takes 4–6 weeks. Building an audience takes 3–6 months of consistent content and community engagement." },
      { q: "Can you help with an existing author brand?", a: "Absolutely. We offer brand audits and refreshes for established authors looking to strengthen or update their presence." },
    ],
    metaTitle: "Author Marketing & Brand Building Services | The Author Success",
    metaDesc: "Build a powerful author brand — website, social media, email list, and reader community. 250+ authors branded. Average 10,000 email subscribers built.",
  },

  "audio-book-recording": {
    slug: "audio-book-recording",
    color: "#0891B2", lightBg: "#ECFEFF", icon: Mic, badge: "Studio Quality",
    headline: "Studio-Quality Audiobook Recording & Production",
    subline: "Professional narration, recording, and mastering that rivals any major publisher.",
    desc: "The audiobook market is the fastest-growing format in publishing. We provide complete audio book recording services — from professional narrator casting and studio recording to post-production mastering and platform distribution. Every project meets ACX and Findaway Voices technical standards.",
    stats: [
      { value: "400+", label: "Audiobooks Recorded", icon: Mic },
      { value: "3–5 Wks", label: "Average Delivery", icon: Clock },
      { value: "15+", label: "Audio Platforms", icon: Globe },
      { value: "25%", label: "Market Growth YoY", icon: TrendingUp },
    ],
    subServices: [
      { tag: "Narration", title: "Professional Narrator Casting", desc: "We present 3–5 narrator auditions matched to your book's genre and tone from our network of 200+ professional voice artists." },
      { tag: "Recording", title: "Studio Recording", desc: "Sessions recorded in professional studios or acoustically-treated home studios with broadcast-quality equipment." },
      { tag: "Production", title: "Post-Production Mastering", desc: "Audio editing, noise reduction, breath reduction, leveling, and mastering to -23 LUFS ACX specifications." },
      { tag: "Distribution", title: "Platform Distribution", desc: "Distribution to Audible via ACX and 30+ platforms via Findaway Voices — fully configured and metadata optimized." },
    ],
    steps: [
      { num: "01", title: "Script Preparation", desc: "We prepare your manuscript as a clean narration script with pronunciation guides and character notes." },
      { num: "02", title: "Narrator Casting", desc: "We present auditions and you choose the perfect voice for your book." },
      { num: "03", title: "Recording Sessions", desc: "Your narrator records each chapter with professional studio setup and quality control." },
      { num: "04", title: "Post-Production", desc: "Full audio editing, mastering, and ACX technical quality check on all files." },
      { num: "05", title: "Distribution", desc: "Submission to ACX and Findaway Voices with metadata, cover art, and royalty setup." },
    ],
    included: ["Narrator casting (3 auditions)", "Script & pronunciation guide", "Professional studio recording", "Audio editing & cleanup", "Noise & breath reduction", "Mastering to ACX specs", "Chapter splitting & labeling", "ACX distribution (Audible)", "Findaway Voices distribution", "Audiobook cover art", "Platform metadata setup", "Royalty account configuration"],
    testimonials: [
      { quote: "The narrator they chose brought my characters to life in ways I never imagined. Audible Bestseller in month one.", name: "Elena V.", title: "Horror Author · Audible Bestseller", result: "Audible Bestseller" },
      { quote: "On Audible in 4 weeks. Production quality rivals anything from a Big Five publisher. My listeners say it's the best audiobook they've heard.", name: "Daniel H.", title: "Thriller Author · 5K Listens", result: "5,000+ Listens" },
      { quote: "The Spanish narration opened an entire new market. 30% of my revenue now comes from Spanish-speaking listeners.", name: "Carlos M.", title: "Self-Help Author", result: "New Market Revenue" },
    ],
    faqs: [
      { q: "How long does recording take?", a: "A 60,000-word book takes approximately 3–5 weeks from script preparation to final delivery." },
      { q: "Can I narrate my own book?", a: "Yes. We provide recording guidance, technical setup advice, and full post-production for author-narrated books." },
      { q: "What's the difference between ACX and Findaway?", a: "ACX distributes to Audible, Amazon, and Apple Books. Findaway distributes to 30+ platforms including Spotify without Audible exclusivity." },
      { q: "Do you offer multilingual narration?", a: "Yes — Spanish, French, German, and Portuguese narration is available from native-speaking professional voice artists." },
      { q: "Royalty share vs flat fee — which is better?", a: "Flat fee means you keep 100% of royalties. Royalty share has no upfront cost but splits 50/50. We recommend flat fee for expected strong sellers." },
    ],
    metaTitle: "Audio Book Recording & Production Services | The Author Success",
    metaDesc: "Professional audiobook recording, production, and distribution. Narrator casting, studio recording, mastering, ACX & Findaway distribution. 400+ audiobooks produced.",
  },

  "article-writing": {
    slug: "article-writing",
    color: "#0891B2", lightBg: "#ECFEFF", icon: FileText, badge: "Content Authority",
    headline: "Professional Article Writing That Builds Your Authority",
    subline: "SEO-optimized articles and guest posts that establish you as the expert in your field.",
    desc: "High-quality articles are the most sustainable way to build online authority and attract readers organically. Our writers produce well-researched, SEO-optimized articles for your blog, industry publications, and guest post placements — all written in your voice and under your name.",
    stats: [
      { value: "5,000+", label: "Articles Written", icon: FileText },
      { value: "24–48h", label: "Turnaround", icon: Clock },
      { value: "Top 3", label: "Avg. Google Ranking", icon: TrendingUp },
      { value: "98%", label: "Client Approval Rate", icon: Award },
    ],
    subServices: [
      { tag: "SEO", title: "SEO Blog Articles", desc: "Keyword-targeted articles structured for search engine ranking — proper headers, meta descriptions, and internal linking included." },
      { tag: "Guest Posts", title: "Guest Post Writing", desc: "Authority-building articles written for placement in industry publications, major blogs, and media outlets in your niche." },
      { tag: "Publishing", title: "Article Publishing", desc: "We pitch and place your articles on high-DA websites and publications in the book, publishing, and author space." },
      { tag: "Thought Leadership", title: "Thought Leadership Content", desc: "LinkedIn articles and long-form thought leadership pieces that build your professional reputation and reader trust." },
    ],
    steps: [
      { num: "01", title: "Topic & Keyword Research", desc: "We identify the highest-traffic, lowest-competition keywords and topics for your niche and audience." },
      { num: "02", title: "Article Brief", desc: "A detailed article brief is created covering title, target keyword, structure, and key points to cover." },
      { num: "03", title: "Writing & Research", desc: "Your dedicated writer produces a well-researched, engaging article optimized for both readers and search engines." },
      { num: "04", title: "Editorial Review", desc: "A senior editor reviews for clarity, accuracy, SEO optimization, and brand voice consistency." },
      { num: "05", title: "Delivery & Publishing", desc: "Final article delivered in your preferred format, ready to publish or submit for placement." },
    ],
    included: ["SEO keyword research", "Topic ideation", "Fully researched article writing", "SEO optimization", "Meta title & description", "Internal linking suggestions", "Image alt text recommendations", "Editorial review", "Plagiarism check", "Unlimited revisions", "Publishing support", "Performance tracking"],
    testimonials: [
      { quote: "Three of my articles are now ranking on page one of Google. The organic traffic from those pieces alone generates 50+ new email subscribers every month.", name: "Sarah M.", title: "Business Author & Coach", result: "Page 1 Google Rankings" },
      { quote: "Guest posts placed on Forbes, Entrepreneur, and Inc. The credibility boost was immediate — people started reaching out for speaking engagements.", name: "John K.", title: "Self-Help Author", result: "Forbes & Entrepreneur Placement" },
      { quote: "Consistent LinkedIn articles have made me the most recognized name in my niche. My book sales track directly to article performance.", name: "Dr. Amy R.", title: "Business Book Author", result: "Niche Authority" },
    ],
    faqs: [
      { q: "How long are your articles?", a: "We write articles from 500 to 5,000+ words. SEO articles typically perform best at 1,500–2,500 words depending on the topic." },
      { q: "Do you publish the articles?", a: "We offer a publishing add-on where we pitch and place your articles on high-authority websites. Placement is not guaranteed but we have strong relationships." },
      { q: "Will the articles rank on Google?", a: "We optimize every article for search engines using proper keyword targeting, structure, and on-page SEO. Rankings depend on competition in your niche." },
      { q: "Can you write in my voice?", a: "Yes. We study your existing content, conduct a voice interview, and match your tone, style, and vocabulary throughout." },
      { q: "How many articles do I need per month?", a: "For meaningful SEO impact, we recommend at least 4 articles per month. We offer monthly content packages at discounted rates." },
    ],
    metaTitle: "Professional Article Writing Services | The Author Success",
    metaDesc: "SEO-optimized article writing and publishing for authors and experts. Guest posts, blog articles, thought leadership content. 5,000+ articles written.",
  },

  "blog-writing": {
    slug: "blog-writing",
    color: "#0891B2", lightBg: "#ECFEFF", icon: Rss, badge: "Consistent Content",
    headline: "Engaging Blog Writing That Attracts and Converts Readers",
    subline: "Professional blog writing to keep your author platform active, visible, and growing.",
    desc: "A consistently updated blog is one of the most powerful tools for long-term author discoverability. Our blog writers produce engaging, well-researched posts in your voice — building your SEO, growing your email list, and keeping your audience coming back between book launches.",
    stats: [
      { value: "10,000+", label: "Blog Posts Written", icon: Rss },
      { value: "48 hrs", label: "Average Delivery", icon: Clock },
      { value: "3x", label: "Avg. Traffic Growth", icon: TrendingUp },
      { value: "98%", label: "Client Retention", icon: Award },
    ],
    subServices: [
      { tag: "Author Blog", title: "Author Blog Writing", desc: "Regular blog posts for your author website covering your writing journey, book updates, genre insights, and reader engagement." },
      { tag: "SEO", title: "SEO Blog Content", desc: "Keyword-optimized posts designed to rank in Google and attract readers searching for books and topics in your genre." },
      { tag: "Ghostwritten", title: "Ghostwritten Blog Posts", desc: "Professional posts written entirely in your voice — published under your name with no attribution to us." },
      { tag: "Packages", title: "Monthly Blog Packages", desc: "4, 8, or 12 posts per month on a consistent schedule to keep your platform active and your audience engaged." },
    ],
    steps: [
      { num: "01", title: "Blog Strategy", desc: "We define your blog topics, posting frequency, target keywords, and content goals aligned with your book and brand." },
      { num: "02", title: "Content Calendar", desc: "A monthly content calendar is built with approved topics and scheduled delivery dates." },
      { num: "03", title: "Writing", desc: "Each post is written in your voice with proper SEO structure, headers, and engaging storytelling." },
      { num: "04", title: "Review & Approval", desc: "You review each post and request any changes before it goes live." },
      { num: "05", title: "Publishing Support", desc: "We format and upload posts to your WordPress, Squarespace, or Wix site if needed." },
    ],
    included: ["Blog strategy & planning", "Monthly content calendar", "SEO keyword targeting", "Fully written blog posts", "Meta descriptions", "Image sourcing recommendations", "Internal linking", "Author voice matching", "Editorial proofreading", "CTA integration", "WordPress publishing support", "Monthly performance summary"],
    testimonials: [
      { quote: "My blog now gets 15,000 monthly visitors from Google. Every post is written perfectly in my voice — readers assume I write every word.", name: "Claire T.", title: "Fiction Author · 15K Monthly Readers", result: "15,000 Monthly Visitors" },
      { quote: "Consistent blogging built my email list from zero to 5,000 subscribers in 8 months. It's my best reader acquisition channel.", name: "Mark H.", title: "Non-Fiction Author", result: "5,000 Email Subscribers" },
      { quote: "My blog traffic tripled in 3 months. The SEO optimization they bring to every post makes a real, measurable difference.", name: "Jen W.", title: "Self-Help Author", result: "3x Traffic Growth" },
    ],
    faqs: [
      { q: "How often should I blog?", a: "For SEO and audience growth, we recommend at least 4 posts per month. More frequency accelerates results." },
      { q: "What topics should my author blog cover?", a: "Your writing process, book research, genre news, reader Q&As, writing tips, and behind-the-scenes content all perform well." },
      { q: "Will it sound like me?", a: "Yes. We conduct a voice interview, study your existing content, and match your tone so every post reads authentically as yours." },
      { q: "Do you publish to my website?", a: "Yes, publishing support is included. We format and upload posts to WordPress, Squarespace, Wix, or most other platforms." },
      { q: "Can you repurpose blog posts into social media?", a: "Yes — we offer a content repurposing add-on that turns each blog post into social media captions, email newsletters, and short-form content." },
    ],
    metaTitle: "Professional Blog Writing Services for Authors | The Author Success",
    metaDesc: "Consistent, SEO-optimized blog writing in your voice. Monthly packages available. 10,000+ posts written. Grow your audience between book launches.",
  },

  "book-trailer": {
    slug: "book-trailer",
    color: "#0891B2", lightBg: "#ECFEFF", icon: Video, badge: "Visual Storytelling",
    headline: "Cinematic Book Trailers That Sell Your Story",
    subline: "Compelling video trailers that bring your book to life on social media and Amazon.",
    desc: "A great book trailer doesn't just describe your book — it makes viewers feel it. Our video production team creates cinematic trailers that capture the essence, mood, and excitement of your story, optimized for TikTok, Instagram, Amazon A+ pages, and your author website.",
    stats: [
      { value: "500+", label: "Trailers Produced", icon: Video },
      { value: "7–14 Days", label: "Average Delivery", icon: Clock },
      { value: "2M+", label: "Total Views Generated", icon: TrendingUp },
      { value: "4.9/5", label: "Client Rating", icon: Award },
    ],
    subServices: [
      { tag: "Social", title: "Social Media Trailer", desc: "Short-form 30–60 second trailers optimized for TikTok, Instagram Reels, and YouTube Shorts with platform-specific dimensions." },
      { tag: "Amazon", title: "Amazon Book Trailer", desc: "Professional book trailers formatted for Amazon A+ content pages to increase conversion on your book's product listing." },
      { tag: "Cinematic", title: "Full Cinematic Trailer", desc: "90–120 second cinematic trailers with original music, voice-over narration, and professional video production values." },
      { tag: "Series", title: "Series & Author Branding", desc: "Branded video content for author websites, book series announcements, and multi-book launch campaigns." },
    ],
    steps: [
      { num: "01", title: "Creative Brief", desc: "We learn your book's genre, tone, target audience, and key selling points to guide the trailer concept." },
      { num: "02", title: "Script & Storyboard", desc: "We write the trailer script and present a visual storyboard for your approval before production begins." },
      { num: "03", title: "Production", desc: "Video production using licensed footage, original graphics, typography animation, and music selection." },
      { num: "04", title: "Review & Revisions", desc: "You review the cut and request any changes to pacing, music, text, or visuals." },
      { num: "05", title: "Final Delivery", desc: "Final trailer delivered in all required formats and dimensions for each platform." },
    ],
    included: ["Creative brief consultation", "Script writing", "Visual storyboard", "Licensed stock footage", "Custom typography animation", "Licensed background music", "Professional voice-over (optional)", "Color grading", "Sound mixing & mastering", "All platform formats (vertical, square, wide)", "Amazon A+ format", "2 rounds of revisions"],
    testimonials: [
      { quote: "My book trailer got 500,000 views on TikTok in the first week. Pre-orders spiked 300% and the book went to #1 in its category on launch day.", name: "Tyler S.", title: "YA Author · 500K Views", result: "500K TikTok Views" },
      { quote: "The cinematic quality of the trailer made my indie novel look like it had a Big Five budget behind it. Readers keep sharing it organically.", name: "Rachel M.", title: "Thriller Author", result: "Organic Virality" },
      { quote: "Amazon A+ trailer increased my conversion rate by 22%. That's thousands of extra copies sold just from the video on the product page.", name: "David K.", title: "Self-Help Author", result: "22% Conversion Increase" },
    ],
    faqs: [
      { q: "How long should a book trailer be?", a: "Social media trailers perform best at 30–60 seconds. Amazon trailers work well at 60–90 seconds. Full cinematic trailers run 90–120 seconds." },
      { q: "Do you use actors?", a: "We primarily use licensed stock footage and animation. Live-action with actors is available as a premium option." },
      { q: "Can I use my own music?", a: "Yes, if you have licensed music you want to use. We can also select from our library of royalty-free licensed tracks." },
      { q: "What formats do you deliver?", a: "MP4 in all required resolutions — 9:16 (TikTok/Reels), 1:1 (Instagram), 16:9 (YouTube/Amazon), and 4:5 (Facebook)." },
      { q: "Will the trailer work for a series?", a: "Yes. We create series trailers and individual book trailers that share visual branding for consistency across all titles." },
    ],
    metaTitle: "Book Trailer Production Services | The Author Success",
    metaDesc: "Cinematic book trailers for TikTok, Instagram, Amazon, and more. 500+ trailers produced. Script, production, all platform formats included. 7–14 day delivery.",
  },

  "business-proposal": {
    slug: "business-proposal",
    color: "#0891B2", lightBg: "#ECFEFF", icon: Briefcase, badge: "Win More Deals",
    headline: "Persuasive Business Proposals That Close Deals",
    subline: "Professional proposal and white paper writing that wins clients, funding, and partnerships.",
    desc: "A poorly written proposal loses deals before the meeting happens. Our business writing team produces polished, persuasive proposals, white papers, and pitch decks that communicate your value clearly and compellingly — whether you're pitching to investors, clients, or publishers.",
    stats: [
      { value: "1,000+", label: "Proposals Written", icon: Briefcase },
      { value: "72 hrs", label: "Rush Delivery", icon: Clock },
      { value: "78%", label: "Avg. Win Rate", icon: Award },
      { value: "98%", label: "Client Satisfaction", icon: TrendingUp },
    ],
    subServices: [
      { tag: "RFP", title: "RFP & Client Proposals", desc: "Structured responses to Requests for Proposal — clearly articulating your approach, value, timeline, and pricing." },
      { tag: "White Paper", title: "White Papers & Reports", desc: "Authoritative, research-backed white papers that position you as a thought leader and generate qualified leads." },
      { tag: "Publisher", title: "Book Proposal Writing", desc: "Query letters and full book proposals for traditional publishers — synopsis, sample chapters, market analysis, and author bio." },
      { tag: "Grant", title: "Grant Proposals", desc: "Compelling grant applications for arts, writing, cultural, and business funding bodies." },
    ],
    steps: [
      { num: "01", title: "Brief & Research", desc: "We gather all information about your offering, the client, and the opportunity to ground the proposal in specifics." },
      { num: "02", title: "Structure & Strategy", desc: "We map the proposal structure to match the client's decision criteria and anticipate their questions." },
      { num: "03", title: "Writing", desc: "Your proposal is written with clarity, persuasion, and a clear value narrative from opening to close." },
      { num: "04", title: "Design & Formatting", desc: "Professional layout and design that makes the proposal visually impressive and easy to navigate." },
      { num: "05", title: "Review & Delivery", desc: "Final review, revisions, and delivery in PDF and editable formats." },
    ],
    included: ["Client/opportunity research", "Proposal structure strategy", "Executive summary writing", "Full body proposal writing", "Value proposition development", "Pricing section guidance", "Case study integration", "Professional layout & design", "Proofreading & editing", "PDF + editable formats", "One round of revisions", "Rush delivery available"],
    testimonials: [
      { quote: "Won a $2M contract using a proposal they wrote. The clarity and professionalism made us stand out in a competitive bid process.", name: "James C.", title: "Technology Firm · $2M Contract Won", result: "$2M Contract" },
      { quote: "My book proposal got requests from 3 literary agents in the first week. The synopsis and market analysis were exactly what they wanted to see.", name: "Angela M.", title: "Non-Fiction Author · 3 Agent Requests", result: "3 Agent Requests" },
      { quote: "Our win rate on RFPs went from 20% to 65% after professionalizing our proposals. Game-changing investment.", name: "Mark T.", title: "Consulting Firm Owner", result: "65% Win Rate" },
    ],
    faqs: [
      { q: "How long does a proposal take?", a: "Standard proposals take 3–5 business days. Rush delivery in 24–72 hours is available for an additional fee." },
      { q: "Do you write book proposals for publishers?", a: "Yes — full traditional publishing proposals including query letter, synopsis, market analysis, author bio, and sample chapters." },
      { q: "Can you help with grant applications?", a: "Yes. We write grant proposals for arts councils, writing foundations, cultural grants, and small business funding." },
      { q: "What information do you need from me?", a: "We'll send you a brief questionnaire covering the opportunity, your company/project, key differentiators, and any specific requirements." },
      { q: "Do you offer proposal templates?", a: "We write every proposal from scratch to your specific opportunity — we don't use generic templates." },
    ],
    metaTitle: "Professional Business Proposal Writing Services | The Author Success",
    metaDesc: "Expert business proposal, white paper, and book proposal writing. 1,000+ proposals written. 78% average win rate. Rush delivery available.",
  },

  "childrens-book-publication": {
    slug: "childrens-book-publication",
    color: "#0891B2", lightBg: "#ECFEFF", icon: Baby, badge: "For Young Readers",
    headline: "Complete Children's Book Publishing From Concept to Shelf",
    subline: "End-to-end publication for picture books, early readers, and middle grade — beautifully crafted.",
    desc: "Children's books require a unique blend of storytelling, illustration, and production expertise. We offer a complete children's book publication service — from writing and illustration to formatting, printing, and global distribution — producing books that parents, teachers, and children love.",
    stats: [
      { value: "300+", label: "Children's Books Published", icon: Baby },
      { value: "8–12 Wks", label: "Average Delivery", icon: Clock },
      { value: "4.9/5", label: "Parent & Teacher Rating", icon: Award },
      { value: "40+", label: "Distribution Platforms", icon: Globe },
    ],
    subServices: [
      { tag: "Picture Books", title: "Picture Book Publishing", desc: "Full publication for 32–48 page picture books — writing, illustration, layout, printing, and distribution to Amazon and 40+ retailers." },
      { tag: "Early Reader", title: "Early Reader Books", desc: "Age-appropriate chapter books for emerging readers with illustrations, proper vocabulary leveling, and educational alignment." },
      { tag: "Middle Grade", title: "Middle Grade Publishing", desc: "Complete publishing service for longer-form middle grade fiction and non-fiction targeting readers aged 8–12." },
      { tag: "Board Books", title: "Board Books & Activity Books", desc: "Durable board books, activity books, and educational titles formatted for the youngest readers." },
    ],
    steps: [
      { num: "01", title: "Concept Development", desc: "We finalize your story concept, target age group, page count, and illustration style." },
      { num: "02", title: "Writing & Editing", desc: "Story writing or editing with age-appropriate language, pacing, and developmental considerations." },
      { num: "03", title: "Illustration", desc: "Professional illustrators create original artwork matched to your story's tone, characters, and world." },
      { num: "04", title: "Layout & Design", desc: "Text and illustration are designed together into a beautiful, print-ready book layout." },
      { num: "05", title: "Publishing & Distribution", desc: "Your book is published to Amazon, bookstores, school distributors, and 40+ global platforms." },
    ],
    included: ["Story writing or editing", "Age-appropriate language review", "Professional illustration (12+ pages)", "Full book layout & design", "ISBN registration", "Print-on-demand setup", "Amazon KDP publishing", "IngramSpark distribution", "School & library distribution", "eBook version (optional)", "3D mockup renders", "Marketing materials"],
    testimonials: [
      { quote: "My picture book is now in 200 school libraries across the country. The illustration quality is stunning — parents keep buying copies as gifts.", name: "Michelle T.", title: "Children's Author · 200 School Libraries", result: "200 School Libraries" },
      { quote: "From rough concept to published book in 10 weeks. The illustrator they assigned captured my characters perfectly.", name: "Peter L.", title: "Picture Book Author", result: "Published in 10 Weeks" },
      { quote: "My early reader series is now in Barnes & Noble. The production quality and distribution setup made the difference.", name: "Sandra K.", title: "Early Reader Series Author", result: "Barnes & Noble Listed" },
    ],
    faqs: [
      { q: "How many illustrations do I need for a picture book?", a: "A standard 32-page picture book has 14–16 full spreads (illustrations). We provide a complete illustration plan before starting." },
      { q: "Can I provide my own illustrations?", a: "Yes. If you have an illustrator, we handle writing, editing, layout, and publishing. Or we can provide illustration separately." },
      { q: "How do I get my book into schools?", a: "We set up distribution through Follett and Baker & Taylor, the two largest school and library distributors in North America." },
      { q: "What age group do you write for?", a: "0–3 (board books), 3–6 (picture books), 6–9 (early readers), 8–12 (middle grade). We tailor content to the exact age group." },
      { q: "Can the book be printed in color?", a: "Yes — full color print-on-demand is available through Amazon KDP and IngramSpark. We recommend full color for picture books." },
    ],
    metaTitle: "Children's Book Publication Services | The Author Success",
    metaDesc: "Complete children's book publishing — writing, illustration, design, and global distribution. 300+ children's books published. School & library distribution included.",
  },

  "book-illustrations": {
    slug: "book-illustrations",
    color: "#0891B2", lightBg: "#ECFEFF", icon: Image, badge: "Visual Storytelling",
    headline: "Beautiful Book Illustrations That Bring Stories to Life",
    subline: "Professional illustrations for children's books, graphic novels, and illustrated publications.",
    desc: "Great illustrations transform good books into unforgettable experiences. Our network of professional illustrators creates original, publication-quality artwork in any style — from whimsical watercolors to digital graphic novel art — tailored to your book's genre, tone, and audience.",
    stats: [
      { value: "500+", label: "Books Illustrated", icon: Image },
      { value: "4–8 Wks", label: "Average Delivery", icon: Clock },
      { value: "30+", label: "Illustration Styles", icon: Paintbrush },
      { value: "4.9/5", label: "Author Rating", icon: Award },
    ],
    subServices: [
      { tag: "Picture Books", title: "Children's Picture Book Illustrations", desc: "Full-colour picture book illustrations in any style — watercolor, digital, ink, flat, and more — matched to your story and target age group." },
      { tag: "Character", title: "Character Design", desc: "Original character sheets with multiple poses, expressions, and outfits to ensure consistency across all illustrations and future titles." },
      { tag: "Interior", title: "Interior Book Illustrations", desc: "Black & white or colour interior illustrations for chapter books, non-fiction, activity books, and educational titles." },
      { tag: "Cover", title: "Illustrated Cover Art", desc: "Original hand-crafted or digitally-illustrated cover art for books that require a fully illustrated aesthetic." },
    ],
    steps: [
      { num: "01", title: "Style & Brief", desc: "We review your story, target audience, and preferred illustration styles, then match you with the ideal illustrator." },
      { num: "02", title: "Character Sketches", desc: "Rough character designs are presented for approval before any full illustrations are produced." },
      { num: "03", title: "Sketch Approval", desc: "Line sketches of each illustration are presented for your review and feedback before final coloring." },
      { num: "04", title: "Final Illustrations", desc: "Approved sketches are completed with full color, texture, and detail to production-ready standards." },
      { num: "05", title: "File Delivery", desc: "All illustration files delivered in print-ready CMYK at 300dpi, plus RGB versions for digital use." },
    ],
    included: ["Illustrator matching & casting", "Style consultation", "Character design sheets", "Rough sketch approval process", "Full colour illustrations", "Print-ready CMYK files (300dpi)", "Digital RGB versions", "Transparent background files", "Cover illustration (if applicable)", "Unlimited revisions on sketches", "Two rounds of final revisions", "Source files included"],
    testimonials: [
      { quote: "The illustrations brought my characters to life exactly as I imagined them. Parents tell me their children ask to read the book every night.", name: "Sophie T.", title: "Children's Author · Award-Nominated", result: "Award Nominated" },
      { quote: "Character consistency across 32 pages was perfect. The illustrator understood the story and added details I hadn't even asked for.", name: "Michael C.", title: "Picture Book Series Author", result: "5-Book Series" },
      { quote: "My graphic novel illustrations are stunning. The style matched my genre perfectly — readers compare them to traditionally published works.", name: "Jess L.", title: "Graphic Novel Author", result: "Publisher Attention" },
    ],
    faqs: [
      { q: "How do I choose an illustration style?", a: "We present 3–5 style options with portfolio examples matched to your genre and age group. You choose based on mood, aesthetics, and preference." },
      { q: "How many illustrations do I get?", a: "A standard 32-page picture book includes 14–16 full spreads. Custom quantities are available for any project type." },
      { q: "Can you match an existing illustration style?", a: "Yes. If you have an existing series with established artwork, we match new illustrations to maintain consistency." },
      { q: "What file formats do you provide?", a: "Print-ready CMYK PDF and TIFF at 300dpi, plus RGB PNG/JPEG for digital. Source files (PSD/AI) included on request." },
      { q: "Do I own the illustrations?", a: "Yes — full copyright is transferred to you upon project completion. The illustrations are 100% yours." },
    ],
    metaTitle: "Professional Book Illustration Services | The Author Success",
    metaDesc: "Original book illustrations for children's books, picture books, and graphic novels. 30+ styles, 500+ books illustrated. Character design and full manuscript illustration.",
  },

  "web-content": {
    slug: "web-content",
    color: "#0891B2", lightBg: "#ECFEFF", icon: Monitor, badge: "Convert Visitors",
    headline: "Web Content Writing That Engages and Converts",
    subline: "Professional website copy, landing pages, and brand messaging that turns visitors into readers.",
    desc: "Your website is your most important marketing asset — and weak copy is the number one reason visitors leave without converting. Our web copywriters produce clear, compelling content for author websites, publishing company pages, and book landing pages that communicate your brand and drive action.",
    stats: [
      { value: "2,000+", label: "Pages Written", icon: Monitor },
      { value: "48 hrs", label: "Average Delivery", icon: Clock },
      { value: "35%", label: "Avg. Conversion Lift", icon: TrendingUp },
      { value: "98%", label: "Client Approval", icon: Award },
    ],
    subServices: [
      { tag: "Author Site", title: "Author Website Copy", desc: "Homepage, about page, book pages, and contact copy that captures your author brand and encourages reader engagement." },
      { tag: "Landing Pages", title: "Book Landing Pages", desc: "High-converting launch pages for new books — built to capture pre-orders, email signups, and review requests." },
      { tag: "SEO", title: "SEO Web Copy", desc: "Search engine optimized website copy that ranks for your name, genre, and book topic keywords." },
      { tag: "Publisher", title: "Publishing Company Websites", desc: "Professional copy for publishing service websites — service pages, about sections, testimonials, and calls to action." },
    ],
    steps: [
      { num: "01", title: "Brand & Audience Brief", desc: "We learn your brand voice, target audience, key messages, and conversion goals before writing a word." },
      { num: "02", title: "Copy Strategy", desc: "Page structure and messaging hierarchy are planned to guide visitors through the right journey." },
      { num: "03", title: "Copywriting", desc: "Every page is written with clear messaging, emotional appeal, and strategic calls to action." },
      { num: "04", title: "SEO Optimization", desc: "Keywords are woven naturally into headings, body copy, and meta descriptions for search visibility." },
      { num: "05", title: "Revisions & Delivery", desc: "You review, we refine, and final copy is delivered in your preferred format." },
    ],
    included: ["Website copy strategy", "Homepage copy", "About page copy", "Service/book page copy", "Contact page copy", "SEO keyword integration", "Meta titles & descriptions", "Calls to action", "Brand voice consistency", "Two rounds of revisions", "Mobile-friendly formatting", "CMS upload support"],
    testimonials: [
      { quote: "My author website conversion rate doubled after the copy rewrite. More email signups, more book sales — the difference was immediate.", name: "Caroline M.", title: "Romance Author", result: "2x Conversion Rate" },
      { quote: "The book landing page generated 1,200 pre-orders in 3 weeks. The copy communicated exactly why readers needed to buy this book.", name: "James K.", title: "Thriller Author · 1,200 Pre-Orders", result: "1,200 Pre-Orders" },
      { quote: "My website now ranks on page one for my author name and genre keywords. Organic traffic drives steady book sales every month.", name: "Anna S.", title: "Self-Help Author", result: "Page 1 Rankings" },
    ],
    faqs: [
      { q: "How long does website copy take?", a: "A full 5-page author website takes 5–7 business days. Individual pages can be delivered in 24–48 hours." },
      { q: "Do you write in my voice?", a: "Yes. We conduct a voice interview and review your existing content to ensure copy sounds authentically like you." },
      { q: "Do you include SEO optimization?", a: "Yes — all copy is written with target keywords integrated naturally, plus meta titles and descriptions for every page." },
      { q: "Can you upload the copy to my website?", a: "Yes — we offer CMS upload support for WordPress, Squarespace, Wix, and most major platforms." },
      { q: "Do you write product descriptions for book pages?", a: "Yes — Amazon book descriptions, book blurbs, and product page copy are all part of our web content offering." },
    ],
    metaTitle: "Professional Web Content Writing Services | The Author Success",
    metaDesc: "Website copy, landing pages, and SEO content for authors and publishers. 2,000+ pages written. Average 35% conversion rate improvement. Fast turnaround.",
  },

  "author-website": {
    slug: "author-website",
    color: "#0891B2", lightBg: "#ECFEFF", icon: Laptop, badge: "Your Digital Home",
    headline: "Professional Author Websites That Build Your Brand",
    subline: "Beautiful, functional author websites designed to grow your audience and sell your books.",
    desc: "Your author website is the one platform you truly own — unlike social media, it can't be taken away or changed by an algorithm. We design and build professional author websites that look stunning, load fast, and convert visitors into readers, subscribers, and buyers.",
    stats: [
      { value: "400+", label: "Author Websites Built", icon: Laptop },
      { value: "2–3 Wks", label: "Average Delivery", icon: Clock },
      { value: "99%", label: "Client Satisfaction", icon: Award },
      { value: "2x", label: "Avg. Email List Growth", icon: TrendingUp },
    ],
    subServices: [
      { tag: "Custom", title: "Custom Author Website", desc: "Fully custom designed website built to your brand — unique design, professional photography integration, and seamless user experience." },
      { tag: "Template", title: "Template Author Website", desc: "Professionally customized website from premium templates — launched in 1–2 weeks with your branding, content, and book pages." },
      { tag: "Book Landing", title: "Book Launch Landing Pages", desc: "High-converting standalone landing pages for book launches — pre-order links, email capture, review requests, and press kit." },
      { tag: "Redesign", title: "Website Redesign", desc: "Modernize an existing author website — improved design, faster loading, mobile optimization, and better conversion structure." },
    ],
    steps: [
      { num: "01", title: "Discovery & Planning", desc: "We define your brand, audience, required pages, functionality, and design direction before any work begins." },
      { num: "02", title: "Design Mockup", desc: "A full homepage mockup is presented for approval before development — ensuring the vision is right before we build." },
      { num: "03", title: "Development", desc: "Your site is built on WordPress or Squarespace with mobile responsiveness, fast loading, and SEO foundations." },
      { num: "04", title: "Content Integration", desc: "All copy, images, book covers, and media are integrated and the site is tested across all devices." },
      { num: "05", title: "Launch & Training", desc: "Site goes live with a custom domain and you receive a training session to manage content updates." },
    ],
    included: ["Custom design (up to 8 pages)", "Mobile-responsive build", "WordPress or Squarespace setup", "Book pages with purchase links", "About & bio page", "Email capture integration", "Blog setup", "Contact form", "Social media integration", "Basic SEO setup", "Google Analytics", "Training session & documentation"],
    testimonials: [
      { quote: "My website went from embarrassing to stunning in 2 weeks. My email list doubled in the first month from the improved signup forms and UX.", name: "Sandra K.", title: "Romance Author · 2x Email Growth", result: "2x Email Growth" },
      { quote: "Professional, fast, and exactly what I envisioned. The team built my author brand online and I've had press inquiries I never expected.", name: "Dr. Lee H.", title: "Non-Fiction Author", result: "Press Inquiries" },
      { quote: "My book landing page converted 18% of visitors to pre-orders. The design and copy worked together perfectly.", name: "Chris M.", title: "Thriller Author · 18% Conversion", result: "18% Conversion Rate" },
    ],
    faqs: [
      { q: "Do I need a website as an author?", a: "Yes — it's the only online platform you fully own. It builds SEO, captures emails, and serves as your professional home base." },
      { q: "What platform do you build on?", a: "We primarily build on WordPress (most flexible) and Squarespace (easiest to manage). We recommend based on your technical comfort level." },
      { q: "Can I update it myself?", a: "Yes. We build with easy-to-edit page builders and provide training so you can update content without needing a developer." },
      { q: "Do you provide the copy?", a: "Copywriting is available as an add-on. We can write all page content, or you can provide your own for us to design around." },
      { q: "What about hosting and domain?", a: "We help you set up and configure hosting and your domain. Ongoing hosting costs are typically $10–20/month, paid directly to the host." },
    ],
    metaTitle: "Professional Author Website Design Services | The Author Success",
    metaDesc: "Beautiful author websites built to grow your audience and sell your books. 400+ author websites designed. Mobile-responsive, SEO-ready, launched in 2–3 weeks.",
  },

  "children-book-writing": {
    slug: "children-book-writing",
    color: "#0891B2", lightBg: "#ECFEFF", icon: Baby, badge: "For Young Readers",
    headline: "Expert Children's Book Writing That Kids Love",
    subline: "Age-appropriate stories with imagination, heart, and the right developmental voice.",
    desc: "Writing for children is a specialized craft — every word must earn its place, the pacing must be perfect, and the story must connect emotionally with both the child and the adult reading aloud. Our children's book writers bring deep genre expertise across all age groups, from board books to middle grade.",
    stats: [
      { value: "400+", label: "Children's Books Written", icon: Baby },
      { value: "3–6 Wks", label: "Average Delivery", icon: Clock },
      { value: "4.9/5", label: "Parent Rating", icon: Award },
      { value: "100%", label: "NDA Guaranteed", icon: Users },
    ],
    subServices: [
      { tag: "Picture Books", title: "Picture Book Writing", desc: "32–48 page picture books with perfectly paced text, read-aloud rhythm, and an emotional arc that satisfies both children and parents." },
      { tag: "Early Reader", title: "Early Reader Chapter Books", desc: "Beginning chapter books for ages 6–9 with controlled vocabulary, short chapters, and engaging plots that build reading confidence." },
      { tag: "Middle Grade", title: "Middle Grade Fiction", desc: "Full-length middle grade novels (20,000–50,000 words) for readers aged 8–12 — adventure, mystery, fantasy, and more." },
      { tag: "Educational", title: "Educational Children's Books", desc: "Curriculum-aligned children's books on STEM, history, social-emotional learning, and other educational topics." },
    ],
    steps: [
      { num: "01", title: "Discovery & Brief", desc: "We learn your story concept, target age group, main character, key message, and any specific requirements." },
      { num: "02", title: "Outline & Characters", desc: "A story outline and character descriptions are presented for approval before writing begins." },
      { num: "03", title: "First Draft", desc: "Your dedicated children's writer crafts the full story with age-appropriate language, pacing, and emotional resonance." },
      { num: "04", title: "Revisions", desc: "You review and provide feedback. We revise until the story is exactly right — no limit on revision rounds." },
      { num: "05", title: "Final Delivery", desc: "Final manuscript delivered in DOCX format, ready for illustration and publishing." },
    ],
    included: ["Dedicated children's book writer", "Age-group appropriateness review", "Story outline & character brief", "Full manuscript writing", "Read-aloud rhythm check", "Developmental vocabulary review", "Unlimited revision rounds", "NDA before project starts", "Educational alignment (if required)", "Illustration notes for illustrator", "Final DOCX delivery", "Publishing support available"],
    testimonials: [
      { quote: "My picture book is now in 200 school libraries. The writer perfectly captured the rhyme and rhythm I wanted — children ask for it every night.", name: "Michelle B.", title: "Picture Book Author · 200 Libraries", result: "200 School Libraries" },
      { quote: "They wrote my middle grade series — 4 books in 8 months. The consistency in voice, characters, and world-building is remarkable.", name: "Tom L.", title: "Middle Grade Author · 4-Book Series", result: "4-Book Series" },
      { quote: "My educational book about science is used in classrooms across 3 states. The writer made complex concepts accessible and fun for 7-year-olds.", name: "Dr. Emma K.", title: "Educational Author", result: "Classroom Adoption" },
    ],
    faqs: [
      { q: "What age groups do you write for?", a: "0–3 (board books), 3–6 (picture books), 6–9 (early readers), 8–12 (middle grade), and 12+ (young adult)." },
      { q: "Can I provide the story idea?", a: "Yes — most clients come with a concept or character. We develop it into a complete, publishable story." },
      { q: "How long is a picture book?", a: "Picture books are typically 500–1,000 words for 32 pages. Board books are 100–200 words. We match the length to the age group." },
      { q: "Do you also provide illustrations?", a: "Illustration is a separate service we offer. We match you with a professional illustrator after the writing is complete." },
      { q: "Will my name be on the cover?", a: "100%. All work is covered by NDA and you receive full copyright. Your name on the cover, always." },
    ],
    metaTitle: "Professional Children's Book Writing Services | The Author Success",
    metaDesc: "Expert children's book writers for picture books, early readers, and middle grade. 400+ children's books written. All ages, all genres, 100% confidential.",
  },

  "book-printing": {
    slug: "book-printing",
    color: "#0891B2", lightBg: "#ECFEFF", icon: Printer, badge: "Print Quality",
    headline: "Professional Book Printing for Every Project and Budget",
    subline: "High-quality print-on-demand and bulk printing with global fulfillment.",
    desc: "Whether you need 10 copies for a launch event or 10,000 for a retail distribution campaign, we source the right printing solution for your project. We manage print specifications, file preparation, quality checking, and fulfillment — so your books arrive looking exactly as you envisioned.",
    stats: [
      { value: "500K+", label: "Books Printed", icon: Printer },
      { value: "5–10 Days", label: "Standard Delivery", icon: Clock },
      { value: "50+", label: "Binding Options", icon: Award },
      { value: "100%", label: "Quality Guaranteed", icon: TrendingUp },
    ],
    subServices: [
      { tag: "POD", title: "Print-on-Demand Setup", desc: "Amazon KDP and IngramSpark print-on-demand configuration — sell physical copies worldwide with zero inventory and upfront printing cost." },
      { tag: "Bulk", title: "Bulk Offset Printing", desc: "Cost-effective bulk printing for 500+ copies — perfect for author events, bookstore stocking, and direct sales." },
      { tag: "Specialty", title: "Specialty & Hardcover", desc: "Premium hardcover, case laminate, and special format printing for gift books, collector editions, and premium publications." },
      { tag: "Proof", title: "Author Proof Copies", desc: "Physical proof copies before mass printing to verify print quality, color accuracy, and binding before committing to a print run." },
    ],
    steps: [
      { num: "01", title: "Print Specifications", desc: "We define trim size, binding, paper stock, cover finish, and print quantity based on your goals and budget." },
      { num: "02", title: "File Preparation", desc: "Your files are checked and prepared to the exact printer's specifications — cover bleed, resolution, color profile." },
      { num: "03", title: "Proof Review", desc: "A digital proof is approved and physical proof copies are sent to you before any full print run." },
      { num: "04", title: "Print Production", desc: "Full production run with quality control checkpoints throughout the printing and binding process." },
      { num: "05", title: "Delivery & Fulfillment", desc: "Books are shipped directly to you or to your distribution partner — tracked delivery to any location." },
    ],
    included: ["Print specification consultation", "File preflight check", "Print-ready file preparation", "Digital proof approval", "Physical proof copy (1 copy)", "Quality control review", "Bulk print production", "Binding options (perfect, case, saddle)", "Multiple paper stock options", "Matte or gloss cover options", "Tracked delivery", "Fulfillment to multiple addresses"],
    testimonials: [
      { quote: "1,000 copies for my launch event and not a single defect. The print quality was stunning — readers couldn't believe it was self-published.", name: "Karen M.", title: "Memoir Author · 1,000 Copy Launch", result: "Zero Defects" },
      { quote: "My hardcover collector edition sold out in a week. The premium quality justified the higher price point and readers loved the physical book.", name: "Robert T.", title: "History Author · Sold Out Edition", result: "Sold Out" },
      { quote: "Print-on-demand setup meant I could sell physical copies worldwide with zero upfront cost. Now I earn print royalties every month passively.", name: "Sandra L.", title: "Fiction Author", result: "Passive Print Income" },
    ],
    faqs: [
      { q: "What's the minimum print quantity for bulk printing?", a: "Offset bulk printing starts at 250–500 copies. For smaller quantities, print-on-demand is more cost-effective." },
      { q: "What's the difference between POD and offset printing?", a: "POD prints one copy at a time with no upfront cost but higher per-unit cost. Offset printing has setup costs but lower per-unit pricing at volume." },
      { q: "How long does bulk printing take?", a: "Standard: 10–15 business days. Rush options are available for time-sensitive events." },
      { q: "Can you match the quality of traditionally published books?", a: "Yes. We use the same printing vendors used by major publishers — the quality is indistinguishable." },
      { q: "Do you ship internationally?", a: "Yes. We fulfill to any country with tracked international shipping. We also set up distribution for bookstores in your target markets." },
    ],
    metaTitle: "Professional Book Printing Services | The Author Success",
    metaDesc: "High-quality book printing — print-on-demand setup, bulk offset printing, hardcover editions. 500,000+ books printed. Fast turnaround, global fulfillment.",
  },
};

export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES[slug];
  if (!s) return { title: "Service Not Found" };
  return { title: s.metaTitle, description: s.metaDesc };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = SERVICES[slug];
  if (!s) notFound();

  const Icon = s.icon;
  const COLOR = "#0891B2";
  const LIGHT_BG = "#ECFEFF";

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative pt-36 pb-20 overflow-hidden"
        style={{ background: `linear-gradient(145deg, ${COLOR}22 0%, #ffffff 50%, ${COLOR}12 100%)` }}
      >
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideLeft>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5 text-white" style={{ background: COLOR }}>
                  {s.badge}
                </div>
                <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-black leading-[1.1] mb-4">
                  {s.headline}
                </h1>
                <p className="text-lg font-semibold mb-4" style={{ color: COLOR }}>{s.subline}</p>
                <p className="text-brand-body leading-relaxed mb-8">{s.desc}</p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:opacity-90"
                    style={{ background: COLOR }}
                  >
                    Get Free Quote <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-800 text-slate-800 font-bold px-7 py-4 rounded-full transition-all"
                  >
                    See Our Work
                  </Link>
                </div>
              </div>
            </SlideLeft>

            <SlideRight delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {s.stats.map(({ value, label, icon: StatIcon }, i) => (
                  <FadeUp key={label} delay={i * 0.08}>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `${COLOR}15` }}>
                        <StatIcon size={18} style={{ color: COLOR }} />
                      </div>
                      <div className="font-[family-name:var(--font-playfair)] text-2xl font-black text-brand-dark">{value}</div>
                      <div className="text-xs text-brand-muted mt-0.5">{label}</div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>What We Offer</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-brand-dark">
                <span className="text-black">Every Type of </span><span style={{ color: COLOR }}>{s.icon === PenLine ? "Ghostwriting" : s.icon === BookOpen ? "Editing" : s.icon === Palette ? "Cover Design" : s.icon === Globe ? "Publishing" : s.icon === Megaphone ? "Marketing" : "Audiobook"}</span><span className="text-black"> Covered</span>
              </h2>
            </div>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {s.subServices.map((sub, i) => (
              <FadeUp key={sub.title} delay={i * 0.08}>
                <div className="rounded-2xl p-6 border border-slate-100 hover:border-transparent hover:shadow-xl transition-all group" style={{ background: LIGHT_BG }}>
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full text-white inline-block mb-4" style={{ background: COLOR }}>
                    {sub.tag}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-brand-dark mb-2">{sub.title}</h3>
                  <p className="text-sm text-brand-body leading-relaxed">{sub.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ── */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>How It Works</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-brand-dark">
                <span className="text-black">Our Proven </span><span style={{ color: COLOR }}>Process</span>
              </h2>
            </div>
          </FadeUp>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px border-t-2 border-dashed" style={{ borderColor: `${COLOR}40` }} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {s.steps.map((step, i) => (
                <FadeUp key={step.num} delay={i * 0.08}>
                  <div className="relative">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 font-[family-name:var(--font-playfair)] text-xl font-black text-white shadow-lg"
                      style={{ background: COLOR }}
                    >
                      {step.num}
                    </div>
                    <h4 className="font-bold text-brand-dark text-center text-sm mb-2">{step.title}</h4>
                    <p className="text-xs text-brand-muted text-center leading-relaxed">{step.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideLeft>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block text-[#CFFAFE]">Everything Included</span>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">
                  No Hidden Fees.<br />No Surprises.
                </h2>
                <p className="text-[#CFFAFE] leading-relaxed mb-8">
                  When you work with us, you get everything listed below — included in your quoted price. We believe in transparent pricing with no unexpected add-ons.
                </p>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/20">
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Free Consultation Included</div>
                    <div className="text-[#CFFAFE] text-xs">Talk to a publishing expert before you commit — no obligation.</div>
                  </div>
                </div>
              </div>
            </SlideLeft>
            <SlideRight delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {s.included.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle size={15} className="shrink-0 mt-0.5 text-white" />
                    <span className="text-[#CFFAFE] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>Author Stories</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-brand-dark">
                <span className="text-black">Real Results, Real </span><span style={{ color: COLOR }}>Authors</span>
              </h2>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {s.testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.1}>
                <div className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex mb-4">
                    {[1,2,3,4,5].map((j) => <Star key={j} size={13} className="text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="font-[family-name:var(--font-playfair)] text-base italic text-brand-dark-2 mb-6 leading-relaxed">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-xs shrink-0" style={{ background: COLOR }}>
                        {t.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <div className="font-bold text-sm text-brand-dark">{t.name}</div>
                        <div className="text-xs text-brand-muted">{t.title}</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-black uppercase px-2.5 py-1 rounded-full whitespace-nowrap" style={{ background: `${COLOR}15`, color: COLOR }}>
                      {t.result}
                    </span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>FAQ</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-brand-dark">
                <span className="text-black">Common </span><span style={{ color: COLOR }}>Questions</span>
              </h2>
            </div>
          </FadeUp>
          <div className="flex flex-col gap-3">
            {s.faqs.map((faq, i) => (
              <FadeUp key={faq.q} delay={i * 0.07}>
                <details className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-semibold text-brand-dark text-sm gap-4">
                    {faq.q}
                    <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 border border-slate-200 group-open:rotate-45 transition-transform" style={{ color: COLOR }}>
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-sm text-brand-body leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-cyan-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ background: COLOR }}>
              <Icon size={28} className="text-white" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-brand-dark mb-4">
              <span className="text-black">Ready to Get </span><span style={{ color: COLOR }}>Started?</span>
            </h2>
            <p className="text-brand-body mb-8 max-w-lg mx-auto">
              Book a free 30-minute consultation with one of our publishing experts. No commitment — just honest advice about your project.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white font-bold px-10 py-4 rounded-full shadow-lg shadow-cyan-200 transition-all hover:opacity-90"
                style={{ background: COLOR }}
              >
                Book Free Consultation <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-primary text-brand-dark-2 font-bold px-8 py-4 rounded-full transition-all"
              >
                All Services
              </Link>
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
