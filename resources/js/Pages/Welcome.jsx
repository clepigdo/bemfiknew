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
import { LampDemo } from "@/Components/ui/lamp"

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
        },
        {
            title: "EKOKRAF",
            icon: <img src="/images/icons/ekokraf.png" className="w-16 h-16" />,
            desc: "Divisi Ekonomi Kreatif bertanggung jawab merancang, mengembangkan, dan mempelopori kewirausahaan dengan basis ekonomi kreatif.",
        },
        {
            title: "MIKAT",
            icon: <img src="/images/icons/mikat.png" className="w-16 h-16" />,
            desc: "Divisi Minat dan Bakat berperan mewadahi potensi minat Mahasiswa Fakultas Ilmu Komputer UDINUS khususnya bidang Seni dan Olahraga.",
        },
        {
            title: "PR",
            icon: <img src="/images/icons/pr.png" className="w-16 h-16" />,
            desc: "Divisi Public Relation berperan menjalin hubungan kerjasama kolaboratif dengan pihak eksternal maupun internal Fakultas Ilmu Komputer UDINUS.",
        },
        {
            title: "MEDKREF",
            icon: <img src="/images/icons/medkref.png" className="w-16 h-16" />,
            desc: "Divisi Media Kreatif, Komunikasi dan Informasi berperan mengelola media informasi dan komunikasi BEM FIK secara tulisan maupun visual.",
        },
        {
            title: "PSDM",
            icon: <img src="/images/icons/psdm.png" className="w-16 h-16" />,
            desc: "Divisi Pengembangan Sumber Daya Mahasiswa bertanggung jawab dalam penyelesaian konflik internal dan pemeliharaan aspek kekeluargaan.",
        },
    ];

    const dataProker = [
        {
            title: "LKMM-TD",
            subtitle: "Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar",
            desc: "Program rutin tahunan untuk memberikan pengetahuan manajerial organisasi ke mahasiswa baru.",
            img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop",
        },
        {
            title: "FIX CUP",
            subtitle: "Fakultas Ilmu Komputer Competition",
            desc: "Ajang kompetisi olahraga dan seni tahunan yang mempertemukan bakat-bakat terbaik mahasiswa FIK.",
            img: "https://images.unsplash.com/photo-1579952363873-27f3bde9be51?q=80&w=1000&auto=format&fit=crop",
        },
        {
            title: "PCP FIK",
            subtitle: "Pembekalan Calon Pengurus",
            desc: "Kegiatan untuk mencetak kader pengurus BEM yang berkualitas dan berintegritas tinggi.",
            img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
        },
    ];

    return (
        <div className="font-poppins text-white relative bg-[#050A1F]">
            <Head title="Home - BEM FIK UDINUS" />

            {/* --- NAVBAR --- */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    scrolled
                        ? "bg-blue-900/95 shadow-lg py-2 backdrop-blur-md"
                        : "bg-transparent py-4"
                }`}
            >
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <img
                            src="/images/logo.png"
                            alt="BEM FIK Logo"
                            className="h-10 md:h-12 mr-3"
                        />
                        <span className="font-semibold text-lg tracking-wider hidden md:block text-white">
                            BEM FIK UDINUS
                        </span>
                    </Link>

                    {/* Menu Links (Desktop) */}
                    <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wide text-white">
                        <Link
                            href="/"
                            className="hover:text-blue-300 transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/tentang"
                            className="hover:text-blue-300 transition-colors"
                        >
                            Tentang
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-blue-300 transition-colors"
                        >
                            Periode
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-blue-300 transition-colors"
                        >
                            Divisi
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-blue-300 transition-colors"
                        >
                            Event
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-blue-300 transition-colors"
                        >
                            Kontak
                        </Link>
                    </div>

                    {/* Hamburger Menu (Mobile) */}
                    <button className="md:hidden text-2xl focus:outline-none text-white">
                        ☰
                    </button>
                </div>
            </nav>

            {/* --- HERO SECTION START --- */}
            <div className="relative w-full min-h-screen flex items-center bg-[#050A1F] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/bemfikku.jpg"
                        alt="Background BEM FIK Team"
                        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                        className="w-full h-full object-cover opacity-40 scale-110 will-change-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050A1F] via-[#050A1F]/90 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050A1F] via-transparent to-transparent"></div>
                </div>

                {/* --- DECORATIVE GLOW --- */}
                <div
                    style={{ transform: `translateY(${scrollY * 0.3}px)` }}
                    className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] mix-blend-screen animate-pulse"
                ></div>
                <div
                    style={{ transform: `translateY(${scrollY * 0.4}px)` }}
                    className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen"
                ></div>

                {/* --- CONTENT LAYER --- */}

                <div
                    style={{ transform: `translateY(${scrollY * 0.2}px)` }}
                    className="relative z-10 container mx-auto px-6 md:px-12 pt-20"
                >
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span className="text-blue-300 text-xs font-semibold tracking-wider uppercase">
                                Official Portal Gen. 2024/2025
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-6 tracking-tight drop-shadow-lg">
                            BEM FIK <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                UDINUS
                            </span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light border-l-4 border-blue-500 pl-6">
                            Menggerakkan inovasi teknologi dan kolaborasi nyata
                            untuk masa depan Fakultas Ilmu Komputer yang lebih
                            progresif.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/tentang"
                                className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-900/50"
                            >
                                Jelajahi Profil
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <a
                                href="#contact"
                                className="px-8 py-4 bg-transparent border border-gray-600 hover:border-white text-gray-300 hover:text-white rounded-lg font-medium text-lg transition-all duration-300 flex items-center justify-center"
                            >
                                Hubungi Kami
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- SCROLL INDICATOR --- */}
                <div
                    style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-white tracking-widest uppercase opacity-60">
                        Scroll
                    </span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent opacity-60"></div>
                </div>
            </div>
            {/* --- HERO SECTION END --- */}

            <div className="relative z-30 overflow-hidden pointer-events-none">
                <div className="absolute -top-10 left-0 w-[110%] -translate-x-[5%] rotate-[-2deg] bg-[#FBDF07] text-[#050A1F] py-3 border-y-4 border-black shadow-xl transform scale-110 origin-left">
                    <div className="flex animate-marquee whitespace-nowrap font-black text-xl md:text-2xl uppercase tracking-widest gap-8">
                        {[...Array(15)].map((_, i) => (
                            <span key={i} className="flex items-center gap-8">
                                INNOVATION{" "}
                                <span className="text-blue-600">★</span>
                                COLLABORATION{" "}
                                <span className="text-blue-600">★</span>
                                INTEGRITY{" "}
                                <span className="text-blue-600">★</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- ABOUT SECTION START --- */}
            <section className="relative z-20 py-24 bg-white -mt-16 rounded-t-[3rem] shadow-[0_-20px_60px_rgba(0,0,0,0.5)]">
                <div className="container mx-auto px-6 md:px-40">
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
                                About BEM FIK
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

            <LampDemo/>

            {/* --- LEADERS SECTION --- */}
            <div className="bg-white pb-20 pt-10 relative z-20">
                <div className="container mx-auto">
                    <LeadersCarousel />
                </div>
            </div>

            {/* --- DIVISION SECTION START  --- */}
            <section className="py-32 bg-[#050A1F] relative overflow-hidden -mt-10 rounded-t-[3rem] z-30 shadow-[0_-20px_60px_rgba(0,0,0,0.5)] ">
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
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {dataDivisi.map((item, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white/5 backdrop-blur-md rounded-[2rem] p-8 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-500 overflow-hidden cursor-pointer"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10  flex flex-col items-center text-center">
                                        <div className="w-12 h-12 mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-300 transition-all duration-500 group-hover:scale-110 group-hover:text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                            {React.cloneElement(item.icon, {
                                                className: "w-10 h-10",
                                            })}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-8 group-hover:text-gray-200 transition-colors">
                                            {item.desc}
                                        </p>
                                        <div className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:text-[#FBDF07] transition-colors uppercase tracking-wider">
                                            Selengkapnya
                                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
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
            <section className="pb-24 pt-24 bg-slate-50 relative">
                <div className="container mx-auto px-6 md:px-12">
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

                                {/* CARD CONTENT */}
                                <div className="relative z-10 bg-white rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100 flex flex-col h-full">
                                    <div className="flex-grow">
                                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-gray-100">
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                onError={(e) => {
                                                    e.target.src =
                                                        "https://via.placeholder.com/400x300?text=No+Image";
                                                    e.target.style.opacity =
                                                        "0.3";
                                                }}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-blue-900 shadow-lg">
                                                Tahunan
                                            </div>
                                        </div>

                                        <div className="px-2 pb-4">
                                            <h3 className="text-2xl font-extrabold text-blue-950 mb-1 group-hover:text-blue-600 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 min-h-[1.5rem] flex items-center">
                                                {item.subtitle}
                                            </p>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="px-2 pb-2 pt-4 mt-auto border-t border-gray-100">
                                        <button className="flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-4 transition-all">
                                            Detail Kegiatan{" "}
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* --- PROGRAM KERJA SECTION END --- */}

            {/* --- CONTACT BEM FIK SECTION --- */}
            <div className="relative z-20">
                <ContactBemFik />
            </div>
        </div>
    );
}
