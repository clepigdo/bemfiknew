import React from "react";
import { Head, Link, router } from "@inertiajs/react";
import { Plus, Calendar, Trash2, Pencil, LayoutGrid } from "lucide-react";
import Navbar from "@/Components/Navbar"; // <--- Import Navbar
import Footer from "@/Components/Footer"; // <--- Import Footer
import AdminLayout from "@/Layouts/AdminLayout";

export default function ProgramIndex({ programs }) {
    const handleDelete = (id, title) => {
        if (confirm(`Hapus program kerja "${title}"?`)) {
            router.delete(route("programs.destroy", id));
        }
    };

    return (
        <AdminLayout title="Kelola Program Kerja">
            <div className="min-h-screen bg-slate-900 text-white font-sans">
                <Head title="Program Kerja RKT" />

                {/* 2. KONTEN UTAMA (Diberi padding atas pt-32 agar tidak tertutup Navbar) */}
                <main className="pt-32 pb-20 container mx-auto px-6 md:px-12">
                    {/* HEADER HALAMAN */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                        <div>
                            <h1 className="text-3xl font-black mb-2">
                                Program Kerja RKT
                            </h1>
                            <p className="text-slate-400">
                                Kelola agenda dan kegiatan BEM FIK.
                            </p>
                        </div>
                        <Link
                            href={route("programs.create")}
                            className="px-5 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-blue-600/20 transition-all"
                        >
                            <Plus size={20} /> Tambah Proker
                        </Link>
                    </div>

                    {/* GRID CARD PROKER */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {programs.map((program) => (
                            <div
                                key={program.id}
                                className="bg-slate-800 rounded-3xl border border-white/5 overflow-hidden group hover:border-blue-500/30 transition-all"
                            >
                                {/* Gambar Poster */}
                                <div className="h-48 bg-slate-700 relative overflow-hidden">
                                    {program.image ? (
                                        <img
                                            src={`/storage/${program.image}`}
                                            alt={program.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-500">
                                            <LayoutGrid size={40} />
                                        </div>
                                    )}
                                    {/* Badge Status */}
                                    <div className="absolute top-4 right-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm
                                        ${
                                            program.status === "terlaksana"
                                                ? "bg-emerald-500 text-white"
                                                : program.status === "berjalan"
                                                  ? "bg-blue-500 text-white"
                                                  : "bg-slate-500 text-white"
                                        }
                                    `}
                                        >
                                            {program.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Konten */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-3 uppercase tracking-wider">
                                        <Calendar size={14} />
                                        {new Date(
                                            program.date,
                                        ).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                                        {program.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm line-clamp-2 mb-6">
                                        {program.description}
                                    </p>

                                    {/* Tombol Aksi */}
                                    <div className="flex gap-2 pt-4 border-t border-white/5">
                                        <Link
                                            href={route(
                                                "programs.edit",
                                                program.id,
                                            )}
                                            className="flex-1 py-2 rounded-lg bg-slate-700 text-slate-300 hover:bg-blue-600 hover:text-white text-center text-sm font-bold transition-colors flex justify-center items-center gap-2"
                                        >
                                            <Pencil size={16} /> Edit
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(
                                                    program.id,
                                                    program.title,
                                                )
                                            }
                                            className="px-3 py-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {programs.length === 0 && (
                        <div className="text-center py-20">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-800 mb-4 text-slate-500">
                                <LayoutGrid size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-white">
                                Belum ada Program Kerja
                            </h3>
                            <p className="text-slate-500">
                                Mulai tambahkan kegiatan BEM FIK dengan menekan
                                tombol di atas.
                            </p>
                        </div>
                    )}
                </main>

                {/* 3. FOOTER DI BAWAH */}
                <Footer />
            </div>
        </AdminLayout>
    );
}
