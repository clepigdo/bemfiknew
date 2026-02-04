import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import {
    LayoutDashboard,
    FileText,
    Users,
    Activity,
    Plus,
    Settings,
    ArrowRight,
    TrendingUp,
} from "lucide-react";

export default function Dashboard({ auth }) {
    return (
        <div className="min-h-screen bg-[#0B0F19] text-white font-sans selection:bg-indigo-500 selection:text-white">
            <Head title="Dashboard Admin" />

            <Navbar />

            <main className="pt-32 pb-20 container mx-auto px-6 md:px-12 relative z-10">
                {/* --- 1. HEADER SECTION --- */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-xs font-bold text-green-400 uppercase tracking-widest">
                                System Online
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black">
                            Selamat Datang,{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                {auth.user.name}
                            </span>{" "}
                            👋
                        </h1>
                        <p className="text-slate-400 mt-2">
                            Ini adalah pusat kendali untuk mengelola konten
                            website BEM FIK.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="px-5 py-2.5 rounded-xl bg-[#131926] border border-white/10 hover:border-white/20 text-slate-300 font-medium text-sm transition-all">
                            <Settings size={18} />
                        </button>
                        <Link
                            href="/"
                            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2"
                        >
                            Lihat Website <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>

                {/* --- 2. STATISTIK CARDS --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <StatCard
                        title="Total Artikel"
                        value="12"
                        icon={<FileText size={24} />}
                        color="text-blue-400"
                        bg="bg-blue-400/10"
                        trend="+2 bulan ini"
                    />
                    <StatCard
                        title="Pengurus Aktif"
                        value="48"
                        icon={<Users size={24} />}
                        color="text-purple-400"
                        bg="bg-purple-400/10"
                        trend="Tetap"
                    />
                    <StatCard
                        title="Program Kerja"
                        value="8"
                        icon={<LayoutDashboard size={24} />}
                        color="text-emerald-400"
                        bg="bg-emerald-400/10"
                        trend="3 Selesai"
                    />
                    <StatCard
                        title="Pengunjung"
                        value="1.2k"
                        icon={<Activity size={24} />}
                        color="text-orange-400"
                        bg="bg-orange-400/10"
                        trend="+15% naik"
                    />
                </div>

                {/* --- 3. QUICK ACTIONS (MENU CRUD) --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="p-6 rounded-3xl bg-[#131926] border border-white/5">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                                    <LayoutDashboard size={20} />
                                </span>
                                Menu Kelola
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Link
                                    href={route("articles.index")}
                                    className="group p-5 rounded-2xl bg-white/5 hover:bg-blue-600 hover:scale-[1.02] border border-white/5 transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 rounded-xl bg-white/10 text-white group-hover:bg-white group-hover:text-blue-600 transition-colors">
                                            <FileText size={24} />
                                        </div>
                                        <ArrowRight className="text-white/20 group-hover:text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-1">
                                        Artikel & Berita
                                    </h3>
                                    <p className="text-sm text-slate-400 group-hover:text-blue-100">
                                        Tulis berita, edit konten, dan upload
                                        foto kegiatan.
                                    </p>
                                </Link>
                                <div className="p-5 rounded-2xl bg-white/5 border border-white/5 opacity-60 cursor-not-allowed">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 rounded-xl bg-white/10 text-white">
                                            <Users size={24} />
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold mb-1">
                                        Data Anggota
                                    </h3>
                                    <p className="text-sm text-slate-400">
                                        Segera Hadir
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 rounded-3xl bg-[#131926] border border-white/5">
                        <h2 className="text-xl font-bold mb-6">
                            Aktivitas Terbaru
                        </h2>
                        <div className="space-y-6 relative">
                            <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-white/10"></div>
                            <ActivityItem
                                title="Login Berhasil"
                                time="Baru saja"
                                desc={`Admin ${auth.user.name} masuk ke sistem.`}
                            />
                            <ActivityItem
                                title="Artikel Dibuat"
                                time="2 jam lalu"
                                desc="Berita 'Fixcup 2025' berhasil dipublikasikan."
                            />
                            <ActivityItem
                                title="Update Profil"
                                time="1 hari lalu"
                                desc="Data struktur organisasi diperbarui."
                            />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

function StatCard({ title, value, icon, color, bg, trend }) {
    return (
        <div className="p-6 rounded-3xl bg-[#131926] border border-white/5 hover:border-white/10 transition-colors group">
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${bg} ${color}`}>{icon}</div>
                <div className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
                    <TrendingUp size={12} /> {trend}
                </div>
            </div>
            <h3 className="text-slate-400 text-sm font-medium mb-1">{title}</h3>
            <p className="text-3xl font-black text-white">{value}</p>
        </div>
    );
}

function ActivityItem({ title, time, desc }) {
    return (
        <div className="relative pl-12">
            <div className="absolute left-0 top-1 w-10 h-10 flex items-center justify-center rounded-full bg-[#0B0F19] border border-white/10 z-10">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            </div>
            <div>
                <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold text-sm text-white">{title}</h4>
                    <span className="text-xs text-slate-500">{time}</span>
                </div>
                <p className="text-xs text-slate-400">{desc}</p>
            </div>
        </div>
    );
}
