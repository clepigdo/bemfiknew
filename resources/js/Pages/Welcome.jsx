import React, { useState, useEffect } from "react";
import {
    BookOpen,
    Lightbulb,
    Trophy,
    Handshake,
    MonitorPlay,
    Users,
    ArrowRight,
    Sparkles,
    Target,
    Rocket,
    Zap,
} from "lucide-react";
import { Head, Link } from "@inertiajs/react";
import { DivisiCarousel } from "@/Components/Divisi";
import LeadersCarousel from "@/Components/Leader";
import ContactBemFik from "@/Components/ContactBemFik";
import { ParallaxSeparator } from "@/Components/ParallaxSeparator";
import { LampDemo } from "@/Components/ui/lamp";
import { VideoProfileSection } from "@/Components/VideoProfileSection";
import Footer from "@/Components/Footer";

export default function Welcome() {
    const [scrolled, setScrolled] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrolled(position > 50);
            setScrollY(position);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // --- DATA DIVISI ---
    const dataDivisi = [
        {
            title: "P3",
            icon: <img src="/images/icons/p3.png" className="w-16 h-16" />,
            desc: "Divisi Pendidikan, Penelitian dan Pengabdian berperan melakukan pengkajian ilmu pengetahuan, pengembangan, dan teknologi serta pendidikan akademik.",
            path: "/divisi/p3",
        },
        {
            title: "EKOKRAF",
            icon: <img src="/images/icons/ekokraf.png" className="w-16 h-16" />,
            desc: "Divisi Ekonomi Kreatif bertanggung jawab merancang, mengembangkan, dan mempelopori kewirausahaan dengan basis ekonomi kreatif.",
            path: "/divisi/p3",
        },
        {
            title: "MIKAT",
            icon: <img src="/images/icons/mikat.png" className="w-16 h-16" />,
            desc: "Divisi Minat dan Bakat berperan mewadahi potensi minat Mahasiswa Fakultas Ilmu Komputer UDINUS khususnya bidang Seni dan Olahraga.",
            path: "/divisi/p3",
        },
        {
            title: "PR",
            icon: <img src="/images/icons/pr.png" className="w-16 h-16" />,
            desc: "Divisi Public Relation berperan menjalin hubungan kerjasama kolaboratif dengan pihak eksternal maupun internal Fakultas Ilmu Komputer UDINUS.",
            path: "/divisi/p3",
        },
        {
            title: "MEDKREF",
            icon: <img src="/images/icons/medkref.png" className="w-16 h-16" />,
            desc: "Divisi Media Kreatif, Komunikasi dan Informasi berperan mengelola media informasi dan komunikasi BEM FIK secara tulisan maupun visual.",
            path: "/divisi/p3",
        },
        {
            title: "PSDM",
            icon: <img src="/images/icons/psdm.png" className="w-16 h-16" />,
            desc: "Divisi Pengembangan Sumber Daya Mahasiswa bertanggung jawab dalam penyelesaian konflik internal dan pemeliharaan aspek kekeluargaan.",
            path: "/divisi/p3",
        },
    ];

    const dataProker = [
        {
            title: "LKMM-TD",
            subtitle: "Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar",
            desc: "Program rutin tahunan untuk memberikan pengetahuan manajerial organisasi ke mahasiswa baru.",
            img: "/images/prokerrkt/lkm.png",
        },
        {
            title: "FIX CUP",
            subtitle: "Fakultas Ilmu Komputer Competition",
            desc: "Ajang kompetisi olahraga dan seni tahunan yang mempertemukan bakat-bakat terbaik mahasiswa FIK.",
            img: "/images/prokerrkt/fixcup.png",
        },
        {
            title: "PCP FIK",
            subtitle: "Pembekalan Calon Pengurus",
            desc: "Kegiatan untuk mencetak kader pengurus BEM yang berkualitas dan berintegritas tinggi.",
            img: "/images/prokerrkt/pcp.png",
        },
    ];

    return (
        <div className="font-poppins text-white relative bg-[#050A1F] w-full overflow-x-hidden">
            <Head title="Beranda - BEM FIK UDINUS" />

            {/* --- NAVBAR --- */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    scrolled
                        ? "bg-[#0a0f2c]/95 shadow-lg shadow-[#323EDD]/10 py-3 backdrop-blur-md border-b border-[#323EDD]/30"
                        : "bg-transparent py-5"
                }`}
            >
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    {/* LOGO AREA */}
                    <Link href="/" className="flex items-center group">
                        <img
                            src="/images/logo.png"
                            alt="BEM FIK Logo"
                            className="h-10 md:h-12 mr-3 transition-transform group-hover:scale-105"
                        />
                        <div className="hidden md:flex flex-col">
                            <span className="font-bold text-lg tracking-wider text-white leading-none">
                                BEM FIK
                                <span className="font-bold text-lg ml-2 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#EE99C2] to-[#FBDF07]">
                                    UDINUS
                                </span>
                            </span>
                        </div>
                    </Link>

                    {/* DESKTOP MENU LINKS */}
                    <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-wide text-white/90">
                        {[
                            { name: "Beranda", href: "/" },
                            { name: "Tentang", href: "/#tentang" },
                            { name: "Periode", href: "/#periode" },
                            { name: "Divisi", href: "/#divisi" },
                            { name: "Event", href: "/#event" },
                            { name: "Kontak", href: "/#kontak" },
                            { name: "Artikel", href: "/artikel" },
                        ].map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="relative group hover:text-[#FBDF07] transition-colors duration-300"
                            >
                                {item.name}
                                {/* Animated Underline (Kuning) */}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FBDF07] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button className="md:hidden text-2xl focus:outline-none text-white hover:text-[#FBDF07] transition-colors">
                        ☰
                    </button>
                </div>
            </nav>

            {/* --- HERO SECTION START --- */}
            <div className="relative w-full min-h-screen flex items-center bg-[#0a0f2c] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/bemfikku.jpg"
                        alt="Background BEM FIK Team"
                        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                        className="w-full h-full object-cover opacity-30 scale-110 will-change-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f2c] via-[#0a0f2c]/90 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2c] via-transparent to-transparent"></div>
                </div>

                <div
                    style={{ transform: `translateY(${scrollY * 0.3}px)` }}
                    className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#323EDD]/40 rounded-full blur-[120px] mix-blend-screen animate-pulse"
                ></div>
                <div
                    style={{ transform: `translateY(${scrollY * 0.4}px)` }}
                    className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#EE99C2]/20 rounded-full blur-[100px] mix-blend-screen"
                ></div>

                {/* --- CONTENT LAYER --- */}
                <div
                    style={{ transform: `translateY(${scrollY * 0.2}px)` }}
                    className="relative z-10 container mx-auto px-6 md:px-12 pt-20"
                >
                    <div className="max-w-4xl">
                        {/* Badge Status */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#323EDD]/10 border border-[#323EDD]/30 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FBDF07] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FBDF07]"></span>{" "}
                            </span>
                            <span className="text-[#EE99C2] text-xs font-semibold tracking-wider uppercase">
                                Official Portal Gen. 2025/2026
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-6 tracking-tight drop-shadow-xl">
                            BEM FIK <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE99C2] via-[#FBDF07] to-[#EE99C2]">
                                UDINUS
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light border-l-4 border-[#323EDD] pl-6">
                            Menggerakkan inovasi teknologi dan kolaborasi nyata
                            untuk masa depan Fakultas Ilmu Komputer yang lebih
                            progresif.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Tombol Utama: Biru #323EDD */}
                            <Link
                                href="/tentang"
                                className="group relative px-8 py-4 bg-[#323EDD] hover:bg-[#252eb3] text-white rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#323EDD]/40"
                            >
                                Jelajahi Profil
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <a
                                href="#contact"
                                className="px-8 py-4 bg-transparent border border-gray-500 hover:border-[#FBDF07] text-gray-300 hover:text-[#FBDF07] rounded-lg font-medium text-lg transition-all duration-300 flex items-center justify-center"
                            >
                                Hubungi Kami
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-[#FBDF07] tracking-widest uppercase opacity-80 font-bold">
                        Scroll
                    </span>
                    {/* Garis Gradasi ke Kuning */}
                    <div className="w-[2px] h-12 bg-gradient-to-b from-[#FBDF07] to-transparent opacity-80"></div>
                </div>
            </div>
            {/* --- HERO SECTION END --- */}

            {/* --- ABOUT SECTION START --- */}
            <section
                className="relative z-20 py-24 bg-white -mt-16 rounded-t-[3rem] shadow-[0_-20px_60px_rgba(0,0,0,0.5)] overflow-hidden"
                style={{
                    backgroundImage: "url('/images/pattern.png')",
                    backgroundSize: "cover", // Pastikan pattern memenuhi area
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-white/85 z-0"></div>

                {/* === CONTAINER KONTEN === */}
                {/* Tambahkan 'relative z-10' agar teks muncul DI ATAS lapisan overlay */}
                <div
                    id="tentang"
                    className="container mx-auto px-6 md:px-40 relative z-10"
                >
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                        <div className="w-full md:w-5/12 flex justify-center md:justify-end">
                            <div className="relative group animate-float">
                                <div className="absolute inset-0 bg-blue-400 blur-[60px] opacity-30 rounded-full group-hover:opacity-50 transition-opacity duration-500"></div>
                                <img
                                    src="/images/bemfik.png"
                                    alt="Logo Kabinet Sacakarsa"
                                    className="relative w-64 md:w-96 object-contain drop-shadow-xl transform transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-7/12 text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 uppercase tracking-wider">
                                Tentang BEM FIK
                            </h2>

                            <div className="text-gray-700 text-lg leading-relaxed space-y-4 font-light text-justify">
                                <p>
                                    BEM FIK UDINUS adalah Organisasi mahasiswa
                                    intra kampus yang merupakan lembaga
                                    eksekutif tertinggi di Fakultas Ilmu
                                    Komputer. Dalam menjalankan tugasnya Badan
                                    Eksekutif Mahasiswa Fakultas Ilmu Komputer
                                    Universitas Dian Nuswantoro bertanggung
                                    jawab untuk menerapkan hukum atau kebijakan
                                    di tingkat fakultas.
                                </p>
                                <p className="font-medium text-gray-900">
                                    Kabinet tahun ini bernama “Sacakarsa”.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* --- ABOUT SECTION END --- */}

            <div className="">
                <LampDemo />
            </div>

            {/* --- LEADERS SECTION --- */}
            <div id="periode" className="bg-white pb-20 pt-10 relative z-20">
                <div className="container mx-auto">
                    <LeadersCarousel />
                </div>
            </div>

            {/* --- DIVISION SECTION START  --- */}
            <section
                id="divisi"
                className="py-32 bg-[#050A1F] relative overflow-hidden -mt-10 rounded-t-[3rem] z-30 shadow-[0_-20px_60px_rgba(0,0,0,0.5)] "
            >
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#323EDD]/20 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#EE99C2]/10 rounded-full blur-[100px]"></div>

                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-5"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* HEADER SECTION */}
                    <div className="text-center mb-20">
                        <span className="text-blue-400 font-bold tracking-[0.3em] text-sm uppercase mb-3 block animate-bounce">
                            Departments
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                            OUR{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                DIVISIONS
                            </span>
                        </h2>
                        <div className="w-24 h-1.5 bg-[#FBDF07] rounded-full mx-auto shadow-[0_0_10px_#FBDF07]"></div>
                    </div>

                    {/* GRID CARDS */}
                    <div className="w-full max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {dataDivisi.map((item, index) => (
                                <div
                                    key={index}
                                    className="group relative h-full bg-gray-900/40 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)] overflow-hidden cursor-pointer flex flex-col"
                                >
                                    {/* Decorative Gradient Blob (Background Effect) */}
                                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-blue-600/20 blur-3xl group-hover:bg-purple-600/30 transition-colors duration-500"></div>
                                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 rounded-full bg-purple-600/10 blur-3xl group-hover:bg-blue-600/20 transition-colors duration-500"></div>

                                    {/* Inner Highlight Border */}
                                    <div className="absolute inset-0 rounded-[2.5rem] border border-white/0 group-hover:border-white/10 transition-all duration-500 pointer-events-none"></div>

                                    {/* Content Container */}
                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Header: Icon & Number/Badge (Optional) */}
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="relative">
                                                {/* Icon Background Glow */}
                                                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                                {/* Icon Container */}
                                                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                                                    {React.cloneElement(
                                                        item.icon,
                                                        {
                                                            className:
                                                                "w-7 h-7 stroke-[1.5]",
                                                        },
                                                    )}
                                                </div>
                                            </div>

                                            {/* Index Number Decorative */}
                                            <span className="text-4xl font-bold text-white/5 font-mono group-hover:text-white/10 transition-colors">
                                                0{index + 1}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-gray-300 transition-colors">
                                            {item.desc}
                                        </p>

                                        {/* Bottom Action Area (Arrow Slide) */}
                                        <div className="mt-auto flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                                            <span className="relative overflow-hidden">
                                                <span className="inline-block translate-y-0 group-hover:-translate-y-full transition-transform duration-300">
                                                    Lihat Program
                                                </span>
                                                <span className="absolute top-full left-0 inline-block group-hover:-translate-y-full transition-transform duration-300 text-purple-400">
                                                    Explore Divisi
                                                </span>
                                            </span>
                                            <svg
                                                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="container mx-auto">
                        <DivisiCarousel />
                    </div>
                </div>
            </section>
            {/* --- DIVISION SECTION END --- */}
            <ParallaxSeparator />
            {/* --- PROGRAM KERJA SECTION START --- */}
            <section
                id="event"
                className="pb-24 pt-24 bg-white relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="container mx-auto px-6 md:px-12 z-10">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-blue-950 uppercase tracking-tighter mb-2">
                                Featured <br />{" "}
                                <span className="text-blue-600">Programs</span>
                            </h2>
                            <p className="text-slate-500 font-medium text-lg max-w-md">
                                Agenda unggulan yang kami rancang untuk
                                mahasiswa.
                            </p>
                        </div>
                        <div className="hidden md:block">
                            <button className="px-6 py-3 rounded-full border-2 border-blue-900 text-blue-900 font-bold hover:bg-blue-900 hover:text-white transition-all duration-300">
                                Lihat Semua Proker
                            </button>
                        </div>
                    </div>

                    {/* Grid Poster */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {dataProker.map((item, index) => (
                            <div key={index} className="group relative h-full">
                                <div className="absolute -top-10 -right-4 text-[120px] font-black text-gray-200/50 z-0 select-none group-hover:text-blue-100 transition-colors">
                                    0{index + 1}
                                </div>

                                {/* CARD CONTENT - BERSIH TANPA EFEK BIRU SAAT HOVER */}
                                <div className="group relative flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100">
                                    {/* --- ZONA GAMBAR --- */}
                                    <div className="relative w-full aspect-[3/4] overflow-hidden">
                                        {/* SAYA HAPUS DIV OVERLAY GRADIENT DISINI AGAR GAMBAR TETAP JERNIH */}

                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            onError={(e) => {
                                                e.target.src =
                                                    "https://via.placeholder.com/400x600?text=No+Image";
                                            }}
                                            className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                                        />

                                        {/* Badge Tahunan */}
                                        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold text-blue-900 shadow-sm border border-white/50">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                                            Tahunan
                                        </div>
                                    </div>

                                    {/* --- ZONA KONTEN --- */}
                                    <div className="flex flex-col flex-grow px-6 pt-6 pb-6 relative bg-white">
                                        <div className="mb-4">
                                            <h3 className="text-2xl font-black text-blue-950 leading-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-purple-600 transition-all duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs font-bold text-blue-500/80 uppercase tracking-wider flex items-center gap-2">
                                                <span className="w-4 h-0.5 bg-blue-300 rounded-full"></span>
                                                {item.subtitle}
                                            </p>
                                        </div>

                                        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                            {item.desc}
                                        </p>

                                        <div className="mt-auto pt-2">
                                            <button className="w-full py-3 px-4 rounded-2xl bg-slate-50 text-blue-700 font-bold text-sm flex items-center justify-between group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 overflow-hidden relative border border-blue-100">
                                                <span className="relative z-10">
                                                    Detail Kegiatan
                                                </span>
                                                <div className="relative z-10 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
                                                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* --- PROGRAM KERJA SECTION END --- */}

            {/* === VIDEO PROFILE === */}
            <VideoProfileSection />
            {/* ================================= */}

            {/* --- CONTACT BEM FIK SECTION --- */}
            <div id="kontak" className="relative z-20">
                <ContactBemFik />
            </div>
            {/* --- FOOTER BEM FIK SECTION --- */}
            <Footer />
        </div>
    );
}
