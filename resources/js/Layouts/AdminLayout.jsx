import React from "react";
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
} from "lucide-react";

export default function AdminLayout({ children, title }) {
    const { auth } = usePage().props;
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

    // Menu Navigasi Admin
    const menus = [
        { name: "Dashboard", route: "dashboard", icon: LayoutDashboard },
        { name: "Program Kerja", route: "programs.index", icon: LayoutGrid },
        { name: "Artikel & Berita", route: "articles.index", icon: FileText }, // Pastikan route ini ada
        { name: "Data Pengurus", route: "members.index", icon: Users }, // Pastikan route ini ada
        {
            name: "Pesan Masuk",
            route: "admin.inbox.index",
            icon: MessageSquare,
        }, // Route Inbox yang kita buat kemarin
    ];

    return (
        <div className="min-h-screen bg-[#0B0F19] text-white font-sans flex overflow-hidden">
            <Head title={title} />

            {/* --- SIDEBAR --- */}
            <aside
                className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#131926] border-r border-white/5 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
            >
                <div className="h-20 flex items-center px-8 border-b border-white/5">
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

                <nav className="p-4 space-y-2 mt-4">
                    <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                        Menu Utama
                    </p>

                    {menus.map((item, index) => {
                        // Cek apakah route aktif (untuk highlight menu)
                        const isActive = route().current(
                            item.route.split(".")[0] + "*",
                        );

                        return (
                            <Link
                                key={index}
                                href={route(item.route)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${isActive ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}
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

                <div className="absolute bottom-8 left-0 right-0 px-4">
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

            {/* --- KONTEN UTAMA --- */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
                {/* Topbar */}
                <header className="h-20 bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 md:px-10 z-40 sticky top-0">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="lg:hidden p-2 text-slate-400 hover:text-white"
                    >
                        <Menu size={24} />
                    </button>

                    <h2 className="text-lg font-bold hidden md:block text-slate-200">
                        {title}
                    </h2>

                    <div className="flex items-center gap-6">
                        <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-[#0B0F19]"></span>
                        </button>

                        <div className="flex items-center gap-3 pl-6 border-l border-white/10">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-bold text-white">
                                    {auth.user.name}
                                </p>
                                <p className="text-xs text-slate-500">
                                    Administrator
                                </p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[2px]">
                                <div className="w-full h-full rounded-full bg-[#131926] flex items-center justify-center text-xs font-bold">
                                    {auth.user.name
                                        .substring(0, 2)
                                        .toUpperCase()}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content Scrollable Area */}
                <main className="flex-1 overflow-y-auto p-6 md:p-10 bg-[#0B0F19]">
                    {children}
                </main>
            </div>
        </div>
    );
}
