import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar"; // Pastikan Navbar Anda support transparent/dark mode
import {
    Search,
    Calendar,
    User,
    ArrowRight,
    Clock,
    BookOpen,
    TrendingUp,
    Sparkles,
    ChevronRight,
    Flame,
    Hash,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/Components/Footer";

export default function ArticlePage() {
    const [activeCategory, setActiveCategory] = useState("Semua");
    const [hoveredCard, setHoveredCard] = useState(null);

    const categories = [
        "Semua",
        "Berita Kampus",
        "Event",
        "Teknologi",
        "Opini",
        "Prestasi",
    ];

    // Data Dummy (Sama seperti sebelumnya)
    const featuredArticle = {
        id: 1,
        title: "Recap Keseruan FIXCUP 2025: Semangat Sportivitas Tanpa Batas!",
        excerpt:
            "Melihat kembali momen-momen epik dari ajang kompetisi futsal terbesar di FIK UDINUS.",
        category: "Event",
        author: "Divisi MIKAT",
        date: "28 Jan 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bde9be51?q=80&w=1200&auto=format&fit=crop",
    };

    const articles = [
        {
            id: 2,
            title: "Mengenal 'Cyber Security': Peluang Karir Menjanjikan",
            excerpt:
                "Di tengah maraknya kebocoran data, profesi Cyber Security menjadi primadona. Apa saja skill yang dibutuhkan?",
            category: "Teknologi",
            author: "Divisi P3",
            date: "25 Jan 2026",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        },
        {
            id: 3,
            title: "Opini: Menyeimbangkan Akademik dan Organisasi",
            excerpt:
                "Banyak yang bilang ikut BEM bikin IPK turun. Benarkah? Simak tips manajemen waktu dari Kahim kita.",
            category: "Opini",
            author: "Biro PSDM",
            date: "20 Jan 2026",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop",
        },
        {
            id: 4,
            title: "Pelatihan Desain Grafis 'Imaginate' Sukses Digelar!",
            excerpt:
                "Antusiasme peserta membludak, Divisi Medkref berhasil mencetak desainer muda berbakat.",
            category: "Berita Kampus",
            author: "Divisi Medkref",
            date: "15 Jan 2026",
            readTime: "3 min read",
            image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=800&auto=format&fit=crop",
        },
        {
            id: 5,
            title: "Tips Mencari Sponsor Event Anti Ditolak",
            excerpt:
                "Bingung cari dana usaha? Divisi Ekokraf membagikan rahasia proposal sponsorship yang menarik.",
            category: "Tips & Trik",
            author: "Divisi Ekokraf",
            date: "10 Jan 2026",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
        },
        {
            id: 6,
            title: "Kunjungan Industri ke GoTo: Intip Dapur Startup",
            excerpt:
                "Pengalaman seru mahasiswa FIK UDINUS berkunjung ke kantor pusat GoTo di Jakarta.",
            category: "Berita Kampus",
            author: "Divisi PR",
            date: "05 Jan 2026",
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
        },
    ];

    // Helper untuk warna kategori (Versi Neon/Dark)
    const getCategoryStyle = (cat) => {
        switch (cat) {
            case "Event":
                return "bg-orange-500/20 text-orange-300 border-orange-500/30";
            case "Teknologi":
                return "bg-cyan-500/20 text-cyan-300 border-cyan-500/30";
            case "Opini":
                return "bg-purple-500/20 text-purple-300 border-purple-500/30";
            case "Berita Kampus":
                return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
            default:
                return "bg-slate-500/20 text-slate-300 border-slate-500/30";
        }
    };

    return (
        <div className="min-h-screen bg-[#0B0F19] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
            <Head title="Artikel & Berita - BEM FIK UDINUS" />
            <Navbar />

            {/* --- ANIMATED BACKGROUND ORBS --- */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <main className="relative z-10 pt-32 pb-20">
                <div className="container mx-auto px-6 md:px-12">
                    {/* --- HEADER SECTION --- */}
                    <div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-20">
                        <div className="max-w-3xl">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-3 text-cyan-400 font-bold mb-6"
                            >
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                                    <Hash size={16} />
                                </span>
                                <span className="tracking-[0.2em] text-sm uppercase">
                                    FIK UDINUS Insights
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-white"
                            >
                                Jelajahi{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
                                    Cerita
                                </span>{" "}
                                <br />& Inovasi Terbaru.
                            </motion.h1>
                        </div>

                        {/* Search Bar - Glass Effect */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="w-full lg:w-auto min-w-[350px]"
                        >
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl opacity-30 group-hover:opacity-100 transition duration-500 blur"></div>
                                <div className="relative flex items-center bg-[#131926] rounded-2xl p-2">
                                    <Search
                                        className="ml-4 text-slate-400 group-focus-within:text-cyan-400 transition-colors"
                                        size={20}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Cari artikel, topik, atau penulis..."
                                        className="w-full py-3 px-4 bg-transparent border-none text-white placeholder-slate-500 focus:ring-0 focus:outline-none font-medium"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- FEATURED ARTICLE (HERO) --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="mb-24"
                    >
                        <div className="group relative h-[500px] md:h-[650px] w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/10">
                            {/* Image Background with Parallax/Zoom effect on hover */}
                            <div className="absolute inset-0 overflow-hidden">
                                <img
                                    src={featuredArticle.image}
                                    alt={featuredArticle.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent opacity-90"></div>
                            </div>

                            {/* Trending Label */}
                            <div className="absolute top-8 left-8">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
                                    <Flame
                                        size={16}
                                        className="text-orange-500 fill-orange-500 animate-pulse"
                                    />
                                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                                        Sedang Hangat
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-5xl">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <span
                                        className={`inline-block px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider mb-6 border backdrop-blur-sm ${getCategoryStyle(featuredArticle.category)}`}
                                    >
                                        {featuredArticle.category}
                                    </span>

                                    <h2 className="text-3xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                                        {featuredArticle.title}
                                    </h2>

                                    <p className="text-slate-300 text-lg md:text-xl mb-8 line-clamp-2 md:w-3/4 leading-relaxed">
                                        {featuredArticle.excerpt}
                                    </p>

                                    {/* Meta Info */}
                                    <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-300">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-indigo-500/30">
                                                {featuredArticle.author.charAt(
                                                    0,
                                                )}
                                            </div>
                                            <span className="text-white">
                                                {featuredArticle.author}
                                            </span>
                                        </div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
                                        <div className="flex items-center gap-2">
                                            <Calendar
                                                size={16}
                                                className="text-cyan-500"
                                            />
                                            {featuredArticle.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock
                                                size={16}
                                                className="text-cyan-500"
                                            />
                                            {featuredArticle.readTime}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- CATEGORY TABS (Interactive Sliding) --- */}
                    <div className="sticky top-24 z-30 mb-12 py-4">
                        <div className="flex justify-start md:justify-center overflow-x-auto hide-scrollbar gap-2 p-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full w-max max-w-full mx-auto shadow-xl shadow-black/20">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 z-10 ${
                                        activeCategory === cat
                                            ? "text-white"
                                            : "text-slate-400 hover:text-white"
                                    }`}
                                >
                                    {activeCategory === cat && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-indigo-600 rounded-full shadow-lg shadow-indigo-600/40"
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                    <span className="relative z-10">{cat}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* --- ARTICLE GRID --- */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } },
                        }}
                    >
                        {articles.map((article) => (
                            <motion.div
                                key={article.id}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                onMouseEnter={() => setHoveredCard(article.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className="group relative bg-[#131926] rounded-[2rem] border border-white/5 overflow-hidden hover:border-indigo-500/50 transition-colors duration-500 flex flex-col h-full"
                            >
                                {/* Glow Effect on Hover */}
                                <div className="absolute -inset-px bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[2rem] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"></div>

                                {/* Image */}
                                <div className="relative h-64 overflow-hidden rounded-t-[2rem]">
                                    <div className="absolute top-4 left-4 z-10">
                                        <span
                                            className={`px-3 py-1 text-xs font-bold rounded-lg border backdrop-blur-md ${getCategoryStyle(article.category)}`}
                                        >
                                            {article.category}
                                        </span>
                                    </div>
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#131926] to-transparent opacity-60"></div>
                                </div>

                                {/* Content */}
                                <div className="relative p-6 flex flex-col flex-grow z-10">
                                    <div className="flex items-center gap-3 text-xs font-medium text-slate-400 mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar
                                                size={14}
                                                className="text-indigo-400"
                                            />
                                            {article.date}
                                        </div>
                                        <span className="text-slate-700">
                                            •
                                        </span>
                                        <div className="flex items-center gap-1.5">
                                            <Clock
                                                size={14}
                                                className="text-indigo-400"
                                            />
                                            {article.readTime}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-indigo-300 transition-colors">
                                        {article.title}
                                    </h3>

                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {article.excerpt}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                                            {article.author}
                                        </span>

                                        <div className="flex items-center gap-2 text-sm font-bold text-cyan-400 group-hover:translate-x-1 transition-transform cursor-pointer">
                                            Baca
                                            <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* --- LOAD MORE BUTTON --- */}
                    <div className="mt-20 text-center">
                        <button className="group relative px-10 py-4 rounded-full bg-[#131926] border border-white/10 text-white font-bold overflow-hidden transition-all hover:border-indigo-500/50 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            <span className="relative z-10 flex items-center gap-3">
                                Muat Lebih Banyak
                                <ChevronRight
                                    size={18}
                                    className="group-hover:rotate-90 transition-transform duration-300"
                                />
                            </span>
                        </button>
                    </div>

                    {/* --- NEWSLETTER SECTION (Gradient Card) --- */}
                    <div className="mt-32 relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-indigo-900 to-slate-900 border border-white/10 p-8 md:p-20 text-center shadow-2xl">
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500 rounded-full blur-[100px] opacity-40"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-40"></div>

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl mb-8 shadow-inner shadow-white/10">
                                <Sparkles
                                    size={32}
                                    className="text-yellow-400"
                                />
                            </div>

                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                Jangan Ketinggalan <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                                    Info Kampus!
                                </span>
                            </h2>

                            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                                Dapatkan ringkasan berita terpanas, info
                                beasiswa, dan event seru FIK UDINUS langsung di
                                emailmu.
                            </p>

                            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                                <input
                                    type="email"
                                    placeholder="Masukkan email kampus..."
                                    className="flex-1 h-14 pl-6 rounded-2xl bg-[#0B0F19]/50 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:bg-[#0B0F19]/80 transition-all"
                                />
                                <button className="h-14 px-8 rounded-2xl bg-white text-slate-900 font-bold hover:bg-cyan-50 transition-colors shadow-lg shadow-white/10">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
