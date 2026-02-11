import React, { useState } from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import {
    LayoutDashboard,
    FileText,
    Users,
    LayoutGrid,
    MessageSquare,
    LogOut,
    Menu,
    X,
    Bell,
    CheckCircle2,
    AlertCircle,
} from "lucide-react";

export default function AdminLayout({ children, title }) {
    const { auth } = usePage().props;

    // State untuk Sidebar Mobile
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // State untuk Dropdown Notifikasi
    const [isNotifOpen, setIsNotifOpen] = useState(false);

    // Data Dummy Notifikasi (Nanti bisa diganti data dari database)
    const notifications = [
        {
            id: 1,
            title: "Pesan Baru",
            desc: "Ada pesan dari Mahasiswa Teknik...",
            time: "Baru saja",
            type: "message", // message, alert, success
            read: false,
        },
        {
            id: 2,
            title: "Artikel Diterbitkan",
            desc: "Berita 'Fixcup 2025' sudah tayang.",
            time: "2 jam lalu",
            type: "success",
            read: true,
        },
        {
            id: 3,
            title: "Peringatan Sistem",
            desc: "Penyimpanan server hampir penuh.",
            time: "1 hari lalu",
            type: "alert",
            read: true,
        },
    ];

    // Hitung notifikasi yang belum dibaca (untuk badge merah)
    const unreadCount = notifications.filter((n) => !n.read).length;

    const menus = [
        { name: "Dashboard", route: "dashboard", icon: LayoutDashboard },
        { name: "Program Kerja", route: "programs.index", icon: LayoutGrid },
        { name: "Artikel & Berita", route: "articles.index", icon: FileText },
        { name: "Data Pengurus", route: "members.index", icon: Users },
        {
            name: "Pesan Masuk",
            route: "admin.inbox.index",
            icon: MessageSquare,
        },
    ];

    return (
        <div className="min-h-screen bg-[#0B0F19] text-white font-sans flex relative">
            <Head title={title} />

            {/* --- 1. OVERLAY GELAP (Untuk Mobile Sidebar & Notifikasi) --- */}
            {(isSidebarOpen || isNotifOpen) && (
                <div
                    onClick={() => {
                        setIsSidebarOpen(false);
                        setIsNotifOpen(false);
                    }}
                    className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm transition-opacity"
                ></div>
            )}

            {/* --- 2. SIDEBAR --- */}
            <aside
                className={`
                    fixed inset-y-0 left-0 z-50 w-64 bg-[#131926] border-r border-white/5 
                    transform transition-transform duration-300 ease-in-out
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                    lg:translate-x-0 lg:static lg:inset-auto lg:block
                `}
            >
                <div className="h-20 flex items-center justify-between px-6 border-b border-white/5">
                    <div className="flex items-center">
                        <img
                            src="/images/logo.png"
                            alt="Logo"
                            className="h-8 w-auto mr-3"
                            onError={(e) => (e.target.style.display = "none")}
                        />
                        <span className="font-black text-xl tracking-wider">
                            ADMIN<span className="text-blue-500">BEM</span>
                        </span>
                    </div>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="lg:hidden text-slate-400 hover:text-white"
                    >
                        <X size={24} />
                    </button>
                </div>

                <nav className="p-4 space-y-2 mt-4 overflow-y-auto h-[calc(100vh-140px)]">
                    <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                        Menu Utama
                    </p>
                    {menus.map((item, index) => {
                        const isActive = route().current(
                            item.route.split(".")[0] + "*",
                        );
                        return (
                            <Link
                                key={index}
                                href={route(item.route)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                                    isActive
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                                }`}
                            >
                                <item.icon
                                    size={20}
                                    className={
                                        isActive
                                            ? "text-white"
                                            : "text-slate-500 group-hover:text-blue-400"
                                    }
                                />
                                <span className="font-medium text-sm">
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#131926] border-t border-white/5">
                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-500 transition-colors"
                    >
                        <LogOut size={20} />
                        <span className="font-bold text-sm">Keluar Sistem</span>
                    </Link>
                </div>
            </aside>

            {/* --- 3. KONTEN UTAMA --- */}
            <div className="flex-1 flex flex-col min-h-screen w-full lg:w-[calc(100%-16rem)]">
                {/* Header Topbar */}
                <header className="h-20 bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-4 md:px-8 sticky top-0 z-50">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="lg:hidden p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        >
                            <Menu size={24} />
                        </button>
                        <h2 className="text-lg font-bold text-slate-200 truncate">
                            {title}
                        </h2>
                    </div>

                    <div className="flex items-center gap-4 md:gap-6">
                        {/* --- BAGIAN LONCENG NOTIFIKASI --- */}
                        <div className="relative">
                            <button
                                onClick={() => setIsNotifOpen(!isNotifOpen)}
                                className={`relative p-2 rounded-full transition-all duration-300 ${isNotifOpen ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" : "text-slate-400 hover:text-white hover:bg-white/5"}`}
                            >
                                <Bell size={20} />
                                {unreadCount > 0 && (
                                    <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#0B0F19] animate-pulse"></span>
                                )}
                            </button>

                            {/* DROPDOWN NOTIFIKASI */}
                            {isNotifOpen && (
                                <div className="absolute right-0 mt-4 w-80 md:w-96 bg-[#131926] border border-white/10 rounded-2xl shadow-2xl overflow-hidden origin-top-right animate-in fade-in zoom-in-95 duration-200 ring-1 ring-white/5">
                                    <div className="p-4 border-b border-white/5 flex justify-between items-center bg-[#1a202e]">
                                        <h3 className="font-bold text-sm text-white">
                                            Notifikasi
                                        </h3>
                                        <span className="text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded-md font-medium">
                                            {unreadCount} Baru
                                        </span>
                                    </div>
                                    <div className="max-h-[300px] overflow-y-auto">
                                        {notifications.map((notif) => (
                                            <div
                                                key={notif.id}
                                                className={`p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer flex gap-4 ${!notif.read ? "bg-blue-500/5" : ""}`}
                                            >
                                                <div
                                                    className={`mt-1 w-2 h-2 rounded-full shrink-0 ${!notif.read ? "bg-blue-500" : "bg-transparent"}`}
                                                ></div>
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start mb-1">
                                                        <h4
                                                            className={`text-sm ${!notif.read ? "font-bold text-white" : "font-medium text-slate-300"}`}
                                                        >
                                                            {notif.title}
                                                        </h4>
                                                        <span className="text-[10px] text-slate-500 whitespace-nowrap ml-2">
                                                            {notif.time}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                                                        {notif.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="p-3 text-center border-t border-white/5 bg-[#1a202e]">
                                        <button className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider">
                                            Tandai Semua Dibaca
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* ---------------------------------- */}

                        <div className="flex items-center gap-3 pl-4 md:pl-6 border-l border-white/10">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-bold text-white leading-none mb-1">
                                    {auth.user.name}
                                </p>
                                <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                                    Administrator
                                </p>
                            </div>
                            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[2px]">
                                <div className="w-full h-full rounded-full bg-[#131926] flex items-center justify-center text-xs font-bold text-white">
                                    {auth.user.name
                                        .substring(0, 2)
                                        .toUpperCase()}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}
