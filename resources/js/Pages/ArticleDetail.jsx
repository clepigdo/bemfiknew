import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Calendar, User, ArrowLeft, Share2, Tag, Hash } from "lucide-react";
import { motion } from "framer-motion";

export default function ArticleDetail({ article }) {
    if (!article) {
        return (
            <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center">
                <div className="text-white animate-pulse font-black tracking-widest">
                    LOADING...
                </div>
            </div>
        );
    }

    // --- LOGIKA PARSING MODULAR BLOCKS ---
    let contentBlocks = [];
    try {
        contentBlocks =
            typeof article.content === "string" &&
            article.content.startsWith("[")
                ? JSON.parse(article.content)
                : [{ type: "text", value: article.content }];
    } catch (e) {
        contentBlocks = [{ type: "text", value: article.content }];
    }

    const formatDate = (dateString) => {
        if (!dateString) return "-";
        return new Date(dateString).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    return (
        <div className="min-h-screen bg-[#0B0F19] text-slate-300 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
            <Head title={`${article?.title} - BEM FIK`} />
            <Navbar />

            {/* Progress Bar Sederhana */}
            <div className="fixed top-0 left-0 w-full h-1.5 z-[100] bg-white/5">
                <div className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 w-full origin-left scale-x-0 transition-transform duration-300"></div>
            </div>

            <main className="relative pt-40 pb-32">
                {/* --- 1. PREMIUM HEADER SECTION --- */}
                <header className="container mx-auto px-6 max-w-4xl text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        {/* Tombol Kembali yang Minimalis */}
                        <Link
                            href={route("public.articles")}
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-cyan-400 transition-colors group"
                        >
                            <ArrowLeft
                                size={14}
                                className="group-hover:-translate-x-1 transition-transform"
                            />
                            Kembali ke Insights
                        </Link>

                        {/* Kategori dengan Glow */}
                        <div className="flex justify-center">
                            <span className="px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase tracking-widest shadow-[0_0_20px_rgba(79,70,229,0.1)]">
                                {article.category?.name || "Umum"}
                            </span>
                        </div>

                        {/* Judul: Dibuat sangat menonjol */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                            {article.title}
                        </h1>

                        {/* Meta Info yang Elegan */}
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-bold text-slate-500">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xs font-black ring-4 ring-[#0B0F19]">
                                    {article.author?.charAt(0).toUpperCase()}
                                </div>
                                <span className="text-slate-200 uppercase tracking-wider">
                                    {article.author}
                                </span>
                            </div>
                            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-800"></div>
                            <div className="flex items-center gap-2 uppercase tracking-wider">
                                <Calendar size={16} className="text-cyan-500" />
                                {formatDate(article.published_at)}
                            </div>
                        </div>
                    </motion.div>
                </header>

                {/* --- 2. HERO IMAGE (Sinematik 21:9) --- */}
                <section className="container mx-auto px-4 md:px-6 mb-20 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-video md:aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/10"
                    >
                        <img
                            src={`/storage/${article.image}`}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/40 to-transparent"></div>
                    </motion.div>
                </section>

                {/* --- 3. KONTEN (Fokus Keterbacaan) --- */}
                <article className="container mx-auto px-6 max-w-3xl">
                    <div className="space-y-12">
                        {contentBlocks.map((block, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="article-block"
                            >
                                {block.type === "text" ? (
                                    <div
                                        className="prose prose-lg prose-invert max-w-none text-slate-300 leading-[1.8] text-xl font-medium custom-article-content"
                                        dangerouslySetInnerHTML={{
                                            __html: block.value,
                                        }}
                                    />
                                ) : (
                                    <figure className="my-16">
                                        <img
                                            src={block.value}
                                            alt={`Visual content ${index}`}
                                            className="w-full rounded-[2rem] border border-white/5 shadow-2xl transition-transform hover:scale-[1.02] duration-500"
                                        />
                                        {/* Optional Caption */}
                                        <figcaption className="mt-4 text-center text-sm text-slate-500 font-medium italic">
                                            Dokumentasi Kegiatan BEM FIK UDINUS
                                        </figcaption>
                                    </figure>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* --- 4. FOOTER ARTICLE --- */}
                    <footer className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-3 px-5 py-2 rounded-xl bg-white/5 border border-white/5 text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
                            <Hash size={14} className="text-indigo-500" />
                            <span>{article.category?.name}</span>
                        </div>

                        <button className="group relative px-8 py-4 rounded-2xl bg-white text-slate-950 font-black text-sm uppercase tracking-widest overflow-hidden transition-all hover:pr-12">
                            <span className="relative z-10 flex items-center gap-2">
                                <Share2 size={18} /> Bagikan Cerita
                            </span>
                            <div className="absolute top-1/2 -translate-y-1/2 right-4 opacity-0 group-hover:opacity-100 transition-all">
                                <ArrowLeft className="rotate-180" size={16} />
                            </div>
                        </button>
                    </footer>
                </article>
            </main>

            <Footer />

            <style>{`
                .custom-article-content p { margin-bottom: 2rem; }
                .custom-article-content h2 { color: white; font-weight: 900; font-size: 2.25rem; margin-top: 4rem; margin-bottom: 1.5rem; letter-spacing: -0.02em; }
                .custom-article-content h3 { color: white; font-weight: 800; font-size: 1.75rem; margin-top: 3rem; }
                .custom-article-content a { color: #818cf8; text-decoration: underline; text-underline-offset: 4px; font-bold; }
                .custom-article-content blockquote { border-left: 4px solid #6366f1; padding-left: 2rem; font-style: italic; color: #94a3b8; font-size: 1.5rem; line-height: 1.6; margin: 3rem 0; }
                .custom-article-content ul, .custom-article-content ol { margin-bottom: 2rem; padding-left: 1.5rem; }
                .custom-article-content li { margin-bottom: 0.75rem; }
            `}</style>
        </div>
    );
}
