import React, { useState } from "react";
import { Head, router } from "@inertiajs/react";
import {
    Mail,
    Trash2,
    Search,
    Eye,
    CheckCircle,
    Clock,
    MoreVertical,
    MessageSquare,
} from "lucide-react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function InboxIndex({ contacts }) {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter pesan berdasarkan pencarian
    const filteredContacts = contacts.filter(
        (contact) =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.message.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    const handleDelete = (id) => {
        if (confirm("Hapus pesan ini secara permanen?")) {
            router.delete(route("admin.inbox.destroy", id));
        }
    };

    const toggleRead = (id) => {
        router.patch(route("admin.inbox.update", id));
    };

    return (
        <AdminLayout title="Kelola Pesan Masuk">
            <div className="min-h-screen bg-slate-900 text-white p-6 md:p-10 font-sans">
                <Head title="Pesan Masuk - Admin BEM FIK" />

                {/* --- HEADER --- */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                            <MessageSquare size={24} />
                        </div>
                        <h1 className="text-3xl font-black tracking-tight">
                            Pesan Masuk
                        </h1>
                    </div>
                    <p className="text-slate-400">
                        Daftar aspirasi dan pesan kolaborasi dari pengunjung
                        website.
                    </p>
                </div>

                {/* --- TOP BAR: SEARCH & STATS --- */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Cari pengirim atau isi pesan..."
                            className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-sm focus:outline-none focus:border-blue-500 transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-4">
                        <div className="px-4 py-2 bg-slate-800 rounded-xl border border-slate-700 text-xs font-bold">
                            TOTAL:{" "}
                            <span className="text-blue-400">
                                {contacts.length}
                            </span>
                        </div>
                        <div className="px-4 py-2 bg-slate-800 rounded-xl border border-slate-700 text-xs font-bold">
                            BELUM DIBACA:{" "}
                            <span className="text-orange-400">
                                {contacts.filter((c) => !c.is_read).length}
                            </span>
                        </div>
                    </div>
                </div>

                {/* --- TABLE CONTAINER --- */}
                <div className="bg-slate-800 rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-white/5 bg-white/5 text-xs font-black uppercase tracking-widest text-slate-400">
                                    <th className="px-8 py-5">Pengirim</th>
                                    <th className="px-8 py-5">Pesan</th>
                                    <th className="px-8 py-5">Waktu</th>
                                    <th className="px-8 py-5">Status</th>
                                    <th className="px-8 py-5 text-right">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-sm">
                                {filteredContacts.length > 0 ? (
                                    filteredContacts.map((contact) => (
                                        <tr
                                            key={contact.id}
                                            className={`group transition-colors hover:bg-white/[0.02] ${!contact.is_read ? "bg-blue-500/[0.03]" : ""}`}
                                        >
                                            <td className="px-8 py-6">
                                                <div className="flex flex-col">
                                                    <span
                                                        className={`font-bold ${!contact.is_read ? "text-blue-400" : "text-white"}`}
                                                    >
                                                        {contact.name}
                                                    </span>
                                                    <span className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                                                        <Mail size={12} />{" "}
                                                        {contact.email}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 max-w-xs md:max-w-sm">
                                                <p className="line-clamp-2 text-slate-300 italic leading-relaxed">
                                                    "{contact.message}"
                                                </p>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-2 text-slate-500 whitespace-nowrap">
                                                    <Clock size={14} />
                                                    {new Date(
                                                        contact.created_at,
                                                    ).toLocaleDateString(
                                                        "id-ID",
                                                        {
                                                            day: "numeric",
                                                            month: "short",
                                                        },
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                {contact.is_read ? (
                                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-slate-700 text-slate-400 text-[10px] font-bold uppercase tracking-tighter">
                                                        Dibaca
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-tighter border border-blue-500/20">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                                                        Baru
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button
                                                        onClick={() =>
                                                            toggleRead(
                                                                contact.id,
                                                            )
                                                        }
                                                        className={`p-2 rounded-lg border transition-all ${contact.is_read ? "border-slate-700 text-slate-500 hover:text-white" : "border-blue-500/30 text-blue-400 hover:bg-blue-500 hover:text-white"}`}
                                                        title="Tandai Sudah Dibaca"
                                                    >
                                                        <CheckCircle
                                                            size={16}
                                                        />
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                contact.id,
                                                            )
                                                        }
                                                        className="p-2 rounded-lg border border-red-500/30 text-red-500 hover:bg-red-500 hover:text-white transition-all"
                                                        title="Hapus"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="5"
                                            className="px-8 py-20 text-center text-slate-500 italic"
                                        >
                                            Tidak ada pesan ditemukan.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
