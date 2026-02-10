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
    MessageCircle,
} from "lucide-react";
import { Head, Link } from "@inertiajs/react";
import { DivisiCarousel } from "@/Components/Divisi";
import LeadersCarousel from "@/Components/Leader";
import ContactBemFik from "@/Components/ContactBemFik";
import { ParallaxSeparator } from "@/Components/ParallaxSeparator";
import { LampDemo } from "@/Components/ui/lamp";
import { VideoProfileSection } from "@/Components/VideoProfileSection";
import Footer from "@/Components/Footer";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Welcome({ auth, programs }) {
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
            img: "/images/prokerrkt/lkm.webp",
        },
        {
            title: "FIX CUP",
            subtitle: "Fakultas Ilmu Komputer Competition",
            desc: "Ajang kompetisi olahraga dan seni tahunan yang mempertemukan bakat-bakat terbaik mahasiswa FIK.",
            img: "/images/prokerrkt/fixcup.webp",
        },
        {
            title: "PCP FIK",
            subtitle: "Pembekalan Calon Pengurus",
            desc: "Kegiatan untuk mencetak kader pengurus BEM yang berkualitas dan berintegritas tinggi.",
            img: "/images/prokerrkt/pcp.webp",
        },
    ];

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isMounted, setIsMounted] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navLinks = [
        { name: "Beranda", href: "/" },
        { name: "Tentang", href: "/#tentang" },
        { name: "Periode", href: "/#periode" },
        { name: "Divisi", href: "/#divisi" },
        { name: "Event", href: "/#event" },
        { name: "Kontak", href: "/#kontak" },
        { name: "Artikel", href: "/artikel" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMounted(true); // Trigger animasi masuk

        const handleMouseMove = (e) => {
            // Menghitung posisi mouse relatif dari tengah layar (-1 sampai 1)
            setMousePos({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="font-poppins text-white relative bg-[#050A1F] w-full overflow-x-hidden">
            <Head title="Beranda - BEM FIK UDINUS" />
            {/* --- NAVBAR --- */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    scrolled || isMobileMenuOpen // Tambah isMobileMenuOpen biar background gelap pas menu dibuka
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

                    {/* DESKTOP MENU LINKS (Hidden di Mobile) */}
                    <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-wide text-white/90">
                        {navLinks.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="relative group hover:text-[#FBDF07] transition-colors duration-300"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FBDF07] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* MOBILE MENU BUTTON (Visible di Mobile) */}
                    <button
                        // 3. Tambahkan onClick untuk mengubah state
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-2xl focus:outline-none text-white hover:text-[#FBDF07] transition-colors"
                    >
                        {/* Ubah ikon jadi X kalau menu terbuka */}
                        {isMobileMenuOpen ? "✕" : "☰"}
                    </button>
                </div>

                {/* 4. TAMPILAN MENU MOBILE (DROPDOWN) */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0f2c] border-b border-[#323EDD]/30 shadow-xl flex flex-col items-center py-6 space-y-4 animate-in slide-in-from-top-5 duration-300">
                        {navLinks.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                // Tutup menu saat link diklik
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white font-bold uppercase tracking-wider hover:text-[#FBDF07] transition-colors duration-300 text-sm"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>

            {/* --- HERO SECTION START --- */}
            <div className="relative w-full min-h-screen flex items-center bg-[#0a0f2c] overflow-hidden perspective-1000">
                {/* 1. BACKGROUND LAYER */}
                <div className="absolute inset-0 z-0">
                    {/* Gambar Utama dengan Efek Parallax Halus */}
                    <img
                        src="/images/bemfikku.webp"
                        alt="Background BEM FIK Team"
                        style={{
                            transform: `translateY(${scrollY * 0.5}px) translate(${mousePos.x * -20}px, ${mousePos.y * -20}px) scale(1.1)`,
                        }}
                        className="w-full h-full object-cover opacity-30 will-change-transform transition-transform duration-100 ease-out"
                    />

                    {/* Tech Grid Overlay (CSS Murni - Sangat Ringan) */}
                    <div
                        className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                            backgroundImage:
                                "radial-gradient(#323EDD 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                            transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
                        }}
                    ></div>

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f2c] via-[#0a0f2c]/90 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2c] via-transparent to-transparent"></div>
                </div>

                {/* 2. DECORATION BLOBS (Interactive) */}
                <div
                    style={{
                        transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)`,
                    }}
                    className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#323EDD]/30 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[4000ms] transition-transform ease-out will-change-transform"
                ></div>
                <div
                    style={{
                        transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)`,
                    }}
                    className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#EE99C2]/20 rounded-full blur-[100px] mix-blend-screen transition-transform ease-out will-change-transform"
                ></div>

                {/* 3. CONTENT LAYER */}
                <div
                    style={{ transform: `translateY(${scrollY * 0.2}px)` }}
                    className="relative z-10 container mx-auto px-6 md:px-12 pt-20"
                >
                    <div
                        className={`max-w-4xl transition-all duration-1000 ease-out transform ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    >
                        {/* Badge Status */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#323EDD]/10 border border-[#323EDD]/30 mb-6 backdrop-blur-sm hover:bg-[#323EDD]/20 transition-colors cursor-default">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FBDF07] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FBDF07]"></span>
                            </span>
                            <span className="text-[#EE99C2] text-xs font-semibold tracking-wider uppercase">
                                Official Portal Gen. 2025/2026
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-6 tracking-tight drop-shadow-2xl">
                            BEM FIK <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE99C2] via-[#FBDF07] to-[#EE99C2] bg-[length:200%_auto] animate-gradient">
                                UDINUS
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light border-l-4 border-[#323EDD] pl-6 bg-gradient-to-r from-[#323EDD]/10 to-transparent py-2 rounded-r-lg">
                            Menggerakkan inovasi teknologi dan kolaborasi nyata
                            untuk masa depan Fakultas Ilmu Komputer yang lebih
                            progresif.
                        </p>

                        {/* Buttons (Updated Version) */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Link
                                href="#periode"
                                className="group relative px-8 py-4 bg-[#323EDD] text-white rounded-xl font-bold text-lg 
                                    flex items-center justify-center gap-2 overflow-hidden
                                    transition-all duration-300 ease-out
                                    hover:bg-[#2832b3] hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(50,62,221,0.7)]
                                    active:scale-95 active:shadow-inner"
                            >
                                {/* Shine Effect */}
                                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                                    <div className="relative h-full w-8 bg-white/20"></div>
                                </div>
                                <span className="relative">
                                    Jelajahi Profil
                                </span>
                                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <a
                                href="#kontak"
                                className="group px-8 py-4 bg-transparent border border-gray-600 text-gray-300 rounded-xl font-medium text-lg 
                                        flex items-center justify-center gap-2
                                        transition-all duration-300 
                                        hover:border-[#FBDF07] hover:text-[#FBDF07] hover:bg-[#FBDF07]/10
                                        active:scale-95"
                            >
                                <span>Hubungi Kami</span>
                                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator (Tetap sama) */}
                <div
                    style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
                >
                    <span className="text-xs text-[#FBDF07] tracking-widest uppercase opacity-80 font-bold">
                        Scroll
                    </span>
                    <div className="w-[2px] h-12 bg-gradient-to-b from-[#FBDF07] to-transparent opacity-80"></div>
                </div>
            </div>
            {/* --- HERO SECTION END --- */}

            {/* --- ABOUT SECTION START --- */}
            <section
                className="relative z-20 py-24 bg-white -mt-16 rounded-t-[3rem] shadow-[0_-20px_60px_rgba(0,0,0,0.5)] overflow-hidden"
                style={{
                    backgroundImage: "url('/images/pattern.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-white/85 z-0"></div>

                {/* === CONTAINER KONTEN === */}
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
                    {/* Header Section - RKT EDITION */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100/80 pb-8 gap-6">
                        {/* Kiri: Judul & Deskripsi */}
                        <div className="max-w-2xl">
                            {/* Label Kecil (Eyebrow) */}
                            <div className="flex items-center gap-3 mb-3">
                                <span className="h-px w-10 bg-blue-600"></span>
                                <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs">
                                    Rangkaian Kerja Tahunan
                                </span>
                            </div>

                            {/* Judul Besar dengan Gradasi */}
                            <h2 className="text-4xl md:text-6xl font-black text-blue-950 uppercase tracking-tighter mb-4 leading-[0.9]">
                                Signature <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                    Programs
                                </span>
                            </h2>

                            {/* Deskripsi yang disesuaikan dengan 3 Proker tadi */}
                            <p className="text-slate-500 font-medium text-lg leading-relaxed border-l-4 border-gray-200 pl-6 mt-6">
                                Tiga pilar utama dalam satu periode: Membentuk
                                pemimpin masa depan lewat{" "}
                                <strong className="text-blue-700">
                                    LKMM-TD
                                </strong>
                                , mewadahi kreativitas Minat dan Bakat Melalui{" "}
                                <strong className="text-blue-700">
                                    FIXCUP
                                </strong>
                                , dan mencetak regenerasi unggul melalui{" "}
                                <strong className="text-blue-700">PCP</strong>.
                            </p>
                        </div>

                        {/* Kanan: Statistik Visual (Pemanis) */}
                        <div className="hidden md:flex items-center gap-8 group/parent">
                            {/* Statistik 03 dengan Efek Glassmorphism */}
                            <div className="relative text-right group/stat cursor-default">
                                {/* Lingkaran Cahaya di Belakang (Hanya muncul saat hover) */}
                                <div className="absolute -inset-4 bg-blue-500/5 rounded-full scale-0 group-hover/stat:scale-100 transition-transform duration-500 blur-xl"></div>

                                <div className="relative">
                                    <div className="text-6xl font-black text-slate-100 group-hover/stat:text-blue-600 transition-colors duration-500 leading-none tracking-tighter">
                                        03
                                    </div>
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2 transition-colors duration-500 group-hover/stat:text-slate-600">
                                        Program <br />
                                        <span className="text-blue-500/0 group-hover/stat:text-blue-500 transition-colors duration-500">
                                            Prioritas
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Tombol Interaktif dengan Efek Magnetic */}
                            <button
                                className="relative h-16 w-16 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 
                       shadow-sm transition-all duration-500
                       hover:border-blue-600 hover:text-blue-600 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1
                       active:scale-90 group/btn overflow-hidden"
                            >
                                {/* Efek Gelombang saat Hover (Ripple Effect) */}
                                <div className="absolute inset-0 bg-blue-50 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="26"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="relative z-10 lucide lucide-arrow-down-right transform transition-transform duration-500 group-hover/btn:rotate-45 group-hover/btn:scale-110"
                                >
                                    <path d="m7 7 10 10" />
                                    <path d="M17 7v10H7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Grid Poster */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Cek apakah ada data programs dari database */}
                        {programs && programs.length > 0 ? (
                            programs.map((program, index) => (
                                <div
                                    key={program.id}
                                    className="group relative h-full"
                                >
                                    {/* Nomor Urut */}
                                    <div className="absolute -top-10 -right-4 text-[120px] font-black text-gray-200/50 z-0 select-none group-hover:text-blue-100 transition-colors">
                                        0{index + 1}
                                    </div>

                                    {/* KARTU PROKER */}
                                    <div className="group relative flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 transition-transform duration-500 hover:-translate-y-2">
                                        {/* GAMBAR */}
                                        <div className="relative w-full aspect-[3/4] overflow-hidden bg-slate-100">
                                            {program.image ? (
                                                <img
                                                    src={`/storage/${program.image}`} // Ambil dari Storage
                                                    alt={program.title}
                                                    onError={(e) => {
                                                        e.target.src =
                                                            "https://via.placeholder.com/400x600?text=No+Image";
                                                    }}
                                                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-300 font-black text-4xl">
                                                    BEM
                                                </div>
                                            )}

                                            {/* Badge Status */}
                                            <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold text-blue-900 shadow-sm border border-white/50 uppercase tracking-wider">
                                                <div
                                                    className={`w-1.5 h-1.5 rounded-full animate-pulse ${program.status === "terlaksana" ? "bg-emerald-500" : "bg-blue-500"}`}
                                                ></div>
                                                {program.status}
                                            </div>
                                        </div>

                                        {/* KONTEN */}
                                        <div className="flex flex-col flex-grow px-6 pt-6 pb-6 relative bg-white">
                                            <div className="mb-4">
                                                <h3 className="text-2xl font-black text-blue-950 leading-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-purple-600 transition-all duration-300 line-clamp-2">
                                                    {program.title}
                                                </h3>
                                                {/* Tampilkan Tanggal */}
                                                <p className="text-xs font-bold text-blue-500/80 uppercase tracking-wider flex items-center gap-2">
                                                    <span className="w-4 h-0.5 bg-blue-300 rounded-full"></span>
                                                    {new Date(
                                                        program.date,
                                                    ).toLocaleDateString(
                                                        "id-ID",
                                                        {
                                                            day: "numeric",
                                                            month: "long",
                                                            year: "numeric",
                                                        },
                                                    )}
                                                </p>
                                            </div>

                                            <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                                {program.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            // Tampilan Jika Data Kosong
                            <div className="col-span-3 py-20 text-center text-slate-400">
                                <p>Belum ada program kerja yang ditampilkan.</p>
                            </div>
                        )}
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
