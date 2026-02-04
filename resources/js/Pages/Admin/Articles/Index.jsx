import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Plus, Edit, Trash2, Eye, FileText } from "lucide-react";

export default function ArticleIndex({ articles }) {
    const { flash = {} } = usePage().props;
    if (!articles)
        return (
            <div className="text-white p-20 text-center">Memuat data...</div>
        );

    return (
        <div className="min-h-screen bg-[#0B0F19] text-white font-sans selection:bg-blue-500 selection:text-white">
            <Head title="Kelola Artikel" />
            <Navbar />

            <main className="pt-32 pb-20 container mx-auto px-6 md:px-12">
                {/* --- HEADER PAGE --- */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                                <FileText size={20} />
                            </span>
                            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                                Admin Area
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black">
                            Kelola Artikel
                        </h1>
                        <p className="text-slate-400 mt-2">
                            Daftar semua berita yang telah dipublikasikan di
                            website.
                        </p>
                    </div>

                    {/* Tombol Tambah Baru */}
                    <Link
                        href={route("articles.create")}
                        className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-1"
                    >
                        <Plus size={20} />
                        <span>Tambah Baru</span>
                    </Link>
                </div>

                {/* --- NOTIFIKASI SUKSES --- */}
                {flash?.success && (
                    <div className="mb-8 p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl font-medium flex items-center gap-3 animate-pulse">
                        <span className="bg-green-500 text-black rounded-full p-1">
                            <Plus size={12} />
                        </span>
                        {flash.success}
                    </div>
                )}

                {/* --- TABEL ARTIKEL --- */}
                <div className="bg-[#131926] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-white/5 text-slate-300 uppercase text-xs font-bold tracking-wider">
                                <tr>
                                    <th className="p-6 w-32">Cover</th>
                                    <th className="p-6">Judul & Ringkasan</th>
                                    <th className="p-6">Kategori</th>
                                    <th className="p-6">Penulis</th>
                                    <th className="p-6 text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {articles.data.map((article) => (
                                    <tr
                                        key={article.id}
                                        className="hover:bg-white/[0.02] transition-colors group"
                                    >
                                        {/* Kolom Gambar */}
                                        <td className="p-6">
                                            <div className="w-24 h-16 rounded-lg overflow-hidden bg-slate-800 border border-white/10 relative">
                                                {article.image ? (
                                                    <img
                                                        src={`/storage/${article.image}`}
                                                        alt="cover"
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-xs text-slate-500">
                                                        No Img
                                                    </div>
                                                )}
                                            </div>
                                        </td>

                                        {/* Kolom Judul */}
                                        <td className="p-6 max-w-md">
                                            <h3 className="font-bold text-white mb-1 truncate text-lg group-hover:text-blue-400 transition-colors">
                                                {article.title}
                                            </h3>
                                            <p className="text-xs text-slate-500 truncate leading-relaxed">
                                                {article.excerpt}
                                            </p>
                                            <div className="mt-2 text-[10px] text-slate-600">
                                                Dipublish:{" "}
                                                {article.published_at}
                                            </div>
                                        </td>

                                        {/* Kolom Kategori */}
                                        <td className="p-6">
                                            <span className="px-3 py-1 rounded-lg text-xs font-bold bg-white/5 text-slate-300 border border-white/10">
                                                {article.category?.name ||
                                                    "Uncategorized"}
                                            </span>
                                        </td>

                                        {/* Kolom Penulis */}
                                        <td className="p-6">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-[10px] font-bold">
                                                    {article.author.charAt(0)}
                                                </div>
                                                <span className="text-sm text-slate-400">
                                                    {article.author}
                                                </span>
                                            </div>
                                        </td>

                                        {/* Kolom Aksi */}
                                        <td className="p-6">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={route('public.articles.show', article.slug)}
                                                    className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-blue-600 rounded-lg transition-all"
                                                    title="Lihat Detail"
                                                >
                                                    <Eye size={18} />
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "articles.edit",
                                                        article.id,
                                                    )}
                                                    className="p-2 text-yellow-500 hover:text-white bg-yellow-500/10 hover:bg-yellow-500 rounded-lg transition-all"
                                                    title="Edit Artikel"
                                                >
                                                    <Edit size={18} />
                                                </Link>
                                                <Link
                                                    as="button"
                                                    method="delete"
                                                    href={route(
                                                        "articles.destroy",
                                                        article.id,
                                                    )}
                                                    onBefore={() =>
                                                        confirm(
                                                            "Yakin ingin menghapus artikel ini?",
                                                        )
                                                    }
                                                    className="p-2 text-red-500 hover:text-white bg-red-500/10 hover:bg-red-500 rounded-lg transition-all"
                                                    title="Hapus Artikel"
                                                >
                                                    <Trash2 size={18} />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}

                                {/* State Kosong */}
                                {articles.data.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan="5"
                                            className="p-20 text-center text-slate-500"
                                        >
                                            <div className="flex flex-col items-center justify-center gap-4">
                                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                                                    <FileText
                                                        size={32}
                                                        className="opacity-50"
                                                    />
                                                </div>
                                                <p>
                                                    Belum ada artikel yang
                                                    dibuat.
                                                </p>
                                                <Link
                                                    href={route(
                                                        "articles.create",
                                                    )}
                                                    className="text-blue-400 hover:text-blue-300 text-sm font-bold underline decoration-blue-500/30 underline-offset-4"
                                                >
                                                    Buat Artikel Pertama
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* --- PAGINATION --- */}
                    {articles.links.length > 3 && (
                        <div className="p-6 border-t border-white/5 flex justify-center bg-[#0B0F19]/50">
                            <div className="flex gap-2">
                                {articles.links.map((link, i) => (
                                    <Link
                                        key={i}
                                        href={link.url || "#"}
                                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                                            link.active
                                                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                                : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                                        } ${!link.url && "opacity-50 cursor-not-allowed"}`}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
