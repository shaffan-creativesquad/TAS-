import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle, ArrowRight, Star, Clock, Award, Users, TrendingUp,
  PenLine, BookOpen, Palette, Globe, Megaphone, Headphones,
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
    color: "#DC2626",
    lightBg: "#FEF2F2",
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
  const COLOR = "#DC2626";
  const LIGHT_BG = "#FEF2F2";

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative pt-36 pb-20 overflow-hidden"
        style={{ background: `linear-gradient(145deg, ${COLOR}22 0%, #ffffff 50%, ${COLOR}12 100%)` }}
      >
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#0F172A 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideLeft>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5 text-white" style={{ background: COLOR }}>
                  {s.badge}
                </div>
                <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-brand-dark leading-[1.1] mb-4">
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
                Every Type of {s.icon === PenLine ? "Ghostwriting" : s.icon === BookOpen ? "Editing" : s.icon === Palette ? "Cover Design" : s.icon === Globe ? "Publishing" : s.icon === Megaphone ? "Marketing" : "Audiobook"} Covered
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
                Our Proven Process
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
                <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>Everything Included</span>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">
                  No Hidden Fees.<br />No Surprises.
                </h2>
                <p className="text-slate-400 leading-relaxed mb-8">
                  When you work with us, you get everything listed below — included in your quoted price. We believe in transparent pricing with no unexpected add-ons.
                </p>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${COLOR}25` }}>
                    <Icon size={22} style={{ color: COLOR }} />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Free Consultation Included</div>
                    <div className="text-slate-400 text-xs">Talk to a publishing expert before you commit — no obligation.</div>
                  </div>
                </div>
              </div>
            </SlideLeft>
            <SlideRight delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {s.included.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle size={15} className="shrink-0 mt-0.5" style={{ color: COLOR }} />
                    <span className="text-slate-300 text-sm">{item}</span>
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
                Real Results, Real Authors
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
                Common Questions
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
      <section className="py-20 bg-red-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ background: COLOR }}>
              <Icon size={28} className="text-white" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-brand-dark mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-brand-body mb-8 max-w-lg mx-auto">
              Book a free 30-minute consultation with one of our publishing experts. No commitment — just honest advice about your project.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white font-bold px-10 py-4 rounded-full shadow-lg shadow-red-200 transition-all hover:opacity-90"
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
