import React, { useState, useEffect, useCallback } from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import {
    Search,
    Calendar,
    User,
    ArrowRight,
    Clock,
    Sparkles,
    ChevronRight,
    Flame,
    Hash,
    X,
} from "lucide-react";
import { motion } from "framer-motion";
import { router } from "@inertiajs/react";
import debounce from "lodash/debounce";

export default function ArticlePage({ articles, featuredArticle, filters }) {
    const [activeCategory, setActiveCategory] = useState("Semua");
    const [hoveredCard, setHoveredCard] = useState(null);

    const currentFilters = filters || {};

    const [search, setSearch] = useState(filters?.search || "");
    const handleSearch = useCallback(
        debounce((value) => {
            router.get(
                route("public.articles"),
                { search: value },
                { preserveState: true, replace: true },
            );
        }, 500), // Delay 500ms
        [],
    );

    const categories = ["Semua", "Berita Kampus", "Event", "Teknologi"];

    const getCategoryStyle = (cat) => {
        const categoryName = cat?.name || cat || "Umum";

        switch (categoryName) {
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

    const formatDate = (dateString) => {
        if (!dateString) return "-";
        const options = { day: "numeric", month: "short", year: "numeric" };
        return new Date(dateString).toLocaleDateString("id-ID", options);
    };

    const filteredArticles =
        activeCategory === "Semua"
            ? articles.data
            : articles.data.filter(
                  (article) => article.category?.name === activeCategory,
              );

    useEffect(() => {
        handleSearch(search);
    }, [search, handleSearch]);

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
                                        className={`ml-4 transition-colors ${search ? "text-cyan-400" : "text-slate-400"}`}
                                        size={20}
                                    />
                                    <input
                                        type="text"
                                        // HUBUNGKAN STATE DI SINI
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                        placeholder="Cari artikel, topik, atau penulis..."
                                        className="w-full py-3 px-4 bg-transparent border-none text-white placeholder-slate-500 focus:ring-0 focus:outline-none font-medium"
                                    />

                                    {/* Tombol Reset jika ada teks */}
                                    {search && (
                                        <button
                                            onClick={() => setSearch("")}
                                            className="mr-4 text-slate-500 hover:text-white transition-colors"
                                        >
                                            <X size={16} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- FEATURED ARTICLE (HERO) --- */}
                    {featuredArticle && (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="mb-24"
                        >
                            <Link
                                href={route(
                                    "public.articles.show",
                                    featuredArticle.slug,
                                )}
                            >
                                <div className="group relative h-[500px] md:h-[650px] w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/10 cursor-pointer">
                                    {/* Image Background */}
                                    <div className="absolute inset-0 overflow-hidden">
                                        <img
                                            src={`/storage/${featuredArticle.image}`}
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
                                                className={`inline-block px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider mb-6 border backdrop-blur-sm ${getCategoryStyle(featuredArticle.category?.name)}`}
                                            >
                                                {featuredArticle.category?.name}
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
                                                    {formatDate(
                                                        featuredArticle.published_at,
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    )}

                    {/* --- CATEGORY TABS --- */}
                    <div className="sticky top-24 z-30 mb-12 py-4">
                        <div className="container mx-auto px-4 md:px-0 max-w-3xl">
                            <div className="bg-[#131926]/90 backdrop-blur-xl border border-white/10 p-1.5 rounded-full shadow-xl shadow-black/20 overflow-hidden">
                                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar px-1 w-full">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() =>
                                                setActiveCategory(cat)
                                            }
                                            className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex-shrink-0 whitespace-nowrap ${
                                                activeCategory === cat
                                                    ? "text-white"
                                                    : "text-slate-400 hover:text-white hover:bg-white/5"
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
                                            <span className="relative z-10">
                                                {cat}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- ARTICLE GRID --- */}
                    <motion.div
                        key={activeCategory}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } },
                        }}
                    >
                        {/* 3. LOOPING DATA DARI DATABASE */}
                        {filteredArticles.length > 0 ? (
                            filteredArticles.map((article) => (
                                <motion.div
                                    key={article.id}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    onMouseEnter={() =>
                                        setHoveredCard(article.id)
                                    }
                                    onMouseLeave={() => setHoveredCard(null)}
                                    className="group relative bg-[#131926] rounded-[2rem] border border-white/5 overflow-hidden hover:border-indigo-500/50 transition-colors duration-500 flex flex-col h-full"
                                >
                                    {/* Glow Effect on Hover */}
                                    <div className="absolute -inset-px bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[2rem] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"></div>

                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden rounded-t-[2rem]">
                                        <div className="absolute top-4 left-4 z-10">
                                            <span
                                                className={`px-3 py-1 text-xs font-bold rounded-lg border backdrop-blur-md ${getCategoryStyle(article.category?.name)}`}
                                            >
                                                {article.category?.name}
                                            </span>
                                        </div>
                                        <img
                                            src={`/storage/${article.image}`}
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
                                                {formatDate(
                                                    article.published_at,
                                                )}
                                            </div>
                                            <span className="text-slate-700">
                                                •
                                            </span>
                                            <div className="flex items-center gap-1.5">
                                                <User
                                                    size={14}
                                                    className="text-indigo-400"
                                                />
                                                {article.author}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-indigo-300 transition-colors line-clamp-2">
                                            <Link
                                                href={route(
                                                    "public.articles.show",
                                                    article.slug,
                                                )}
                                            >
                                                {article.title}
                                            </Link>
                                        </h3>

                                        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                            {article.excerpt}
                                        </p>

                                        <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                                            <Link
                                                href={route(
                                                    "public.articles.show",
                                                    article.slug,
                                                )}
                                                className="flex items-center gap-2 text-sm font-bold text-cyan-400 group-hover:translate-x-1 transition-transform cursor-pointer"
                                            >
                                                Baca
                                                <ArrowRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            // Tampilan jika data kosong
                            <div className="col-span-full text-center py-20 text-slate-500">
                                <p>Belum ada artikel yang tersedia.</p>
                            </div>
                        )}
                    </motion.div>

                    {/* --- PAGINATION (Menggantikan Tombol 'Muat Lebih Banyak') --- */}
                    {articles.links.length > 3 && (
                        <div className="mt-20 flex justify-center gap-2">
                            {articles.links.map((link, i) => (
                                <Link
                                    key={i}
                                    href={link.url || "#"}
                                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                                        link.active
                                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                                            : "bg-[#131926] border border-white/10 text-slate-400 hover:bg-white/5 hover:text-white"
                                    } ${!link.url && "opacity-50 cursor-not-allowed"}`}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
