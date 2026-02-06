import React from "react";
import { Head, Link, router } from "@inertiajs/react";
import {
    Plus,
    Search,
    Pencil,
    Trash2,
    User,
    MoreHorizontal,
} from "lucide-react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function MemberIndex({ members }) {
    // Fungsi untuk menghapus member
    const handleDelete = (id, name) => {
        if (confirm(`Apakah Anda yakin ingin menghapus ${name}?`)) {
            router.delete(route("members.destroy", id));
        }
    };

    return (
        <AdminLayout title="Kelola Members">
            <div className="min-h-screen bg-slate-900 text-white p-6 md:p-10">
                <Head title="Manajemen Pengurus" />

                {/* --- HEADER SECTION --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
                    <div>
                        <h1 className="text-3xl font-black text-white tracking-tight mb-2">
                            Manajemen Pengurus
                        </h1>
                        <p className="text-slate-400">
                            Kelola data anggota BEM, jabatan, dan status
                            keaktifan.
                        </p>
                    </div>

                    <Link
                        href={route("members.create")}
                        className="group flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                    >
                        <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                        Tambah Pengurus
                    </Link>
                </div>

                {/* --- SEARCH & FILTER BAR --- */}
                <div className="bg-slate-800 rounded-2xl p-4 mb-8 border border-slate-700/50 flex flex-col md:flex-row gap-4 justify-between items-center">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Cari nama atau jabatan..."
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                    </div>
                    <div className="text-sm text-slate-500 font-medium">
                        Total:{" "}
                        <span className="text-white font-bold">
                            {members.length}
                        </span>{" "}
                        Anggota
                    </div>
                </div>

                {/* --- TABLE SECTION --- */}
                <div className="bg-slate-800 rounded-3xl border border-slate-700/50 overflow-hidden shadow-xl">
                    {members.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-slate-700/50 bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
                                        <th className="p-6 font-bold">
                                            Nama & Posisi
                                        </th>
                                        <th className="p-6 font-bold">
                                            Divisi
                                        </th>
                                        <th className="p-6 font-bold">
                                            Status
                                        </th>
                                        <th className="p-6 font-bold text-right">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-700/50">
                                    {members.map((member) => (
                                        <tr
                                            key={member.id}
                                            className="hover:bg-slate-700/30 transition-colors group"
                                        >
                                            <td className="p-6">
                                                <div className="flex items-center gap-4">
                                                    {/* Foto Profil / Avatar */}
                                                    <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center overflow-hidden border border-slate-600 shrink-0">
                                                        {member.photo ? (
                                                            <img
                                                                src={`/storage/${member.photo}`}
                                                                alt={
                                                                    member.name
                                                                }
                                                                className="w-full h-full object-cover"
                                                            />
                                                        ) : (
                                                            <User className="w-6 h-6 text-slate-400" />
                                                        )}
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-white text-base mb-0.5">
                                                            {member.name}
                                                        </div>
                                                        <div className="text-sm text-slate-400">
                                                            {member.position}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-6">
                                                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 text-sm font-medium">
                                                    {member.division}
                                                </span>
                                            </td>
                                            <td className="p-6">
                                                {member.status === "aktif" ? (
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                                        Aktif
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-700 text-slate-400 text-xs font-bold border border-slate-600">
                                                        Nonaktif
                                                    </span>
                                                )}
                                            </td>
                                            <td className="p-6 text-right">
                                                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <Link
                                                        href={route(
                                                            "members.edit",
                                                            member.id,
                                                        )}
                                                        className="p-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white border border-blue-500/20 transition-all"
                                                        title="Edit"
                                                    >
                                                        <Pencil className="w-4 h-4" />
                                                    </Link>
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                member.id,
                                                                member.name,
                                                            )
                                                        }
                                                        className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white border border-red-500/20 transition-all"
                                                        title="Hapus"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                                {/* Mobile / Default view action dot */}
                                                <div className="block md:hidden text-slate-500">
                                                    <MoreHorizontal className="w-5 h-5 ml-auto" />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        // --- EMPTY STATE ---
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <div className="w-20 h-20 bg-slate-700/50 rounded-full flex items-center justify-center mb-4">
                                <User className="w-10 h-10 text-slate-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                Belum ada pengurus
                            </h3>
                            <p className="text-slate-400 max-w-sm mx-auto mb-6">
                                Mulai tambahkan data pengurus BEM FIK untuk
                                periode ini agar website terlihat lebih hidup.
                            </p>
                            <Link
                                href={route("members.create")}
                                className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
                            >
                                Tambah Sekarang
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}
