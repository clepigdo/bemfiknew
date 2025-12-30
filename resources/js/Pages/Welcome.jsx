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
} from "lucide-react";
import { Head, Link } from "@inertiajs/react";
import { DivisiCarousel } from "@/components/Divisi";
import LeadersCarousel from "@/Components/Leader";
import ContactBemFik from "@/Components/ContactBemFik";

export default function Welcome() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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

    // DATA PROGRAM KERJA
    const dataProker = [
        {
            title: "LKMM-TD",
            subtitle: "Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar",
            desc: "Program rutin tahunan untuk memberikan pengetahuan manajerial organisasi ke mahasiswa baru.",
            img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop", // Ganti dengan poster LKMM-TD asli
        },
        {
            title: "FIX CUP",
            subtitle: "Fakultas Ilmu Komputer Competition",
            desc: "Ajang kompetisi olahraga dan seni tahunan yang mempertemukan bakat-bakat terbaik mahasiswa FIK.",
            img: "https://images.unsplash.com/photo-1579952363873-27f3bde9be51?q=80&w=1000&auto=format&fit=crop", // Ganti dengan poster FIX CUP asli
        },
        {
            title: "PCP FIK",
            subtitle: "Pembekalan Calon Pengurus",
            desc: "Kegiatan untuk mencetak kader pengurus BEM yang berkualitas dan berintegritas tinggi.",
            img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop", // Ganti dengan poster PCP asli
        },
    ];

    return (
        // Gunakan font Poppins sebagai default
        <div className="font-poppins text-white relative">
            <Head title="Home - BEM FIK UDINUS" />
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    scrolled
                        ? "bg-blue-900/95 shadow-lg py-2"
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
                        <span className="font-semibold text-lg tracking-wider hidden md:block">
                            BEM FIK UDINUS
                        </span>
                    </Link>

                    {/* Menu Links (Desktop) */}
                    <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wide">
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

                    {/* Hamburger Menu (Mobile) - Ikon sementara */}
                    <button className="md:hidden text-2xl focus:outline-none">
                        ☰
                    </button>
                </div>
            </nav>
            {/* --- HERO SECTION START --- */}
            <div className="relative h-[110vh] w-full flex items-center overflow-hidden bg-[#0a0e35]">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/bemfikku.jpg"
                        alt="Background BEM FIK Team"
                        className="w-full h-full object-cover animate-cinematic opacity-60"
                    />
                    <div className="absolute inset-0 bg-[#323EDD]/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e35] via-[#0a0e35]/60 to-transparent"></div>
                </div>

                <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
                        <div className="lg:col-span-8 relative">
                            <div className="relative p-8 md:p-12 rounded-[3rem] overflow-hidden group">
                                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10 shadow-2xl"></div>
                                <div className="relative z-20 flex flex-col items-start text-left">
                                    <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-[#323EDD]/20 border border-[#323EDD]/30 backdrop-blur-md mb-8">
                                        <Sparkles className="w-4 h-4 text-[#FBDF07]" />
                                        <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">
                                            Official Portal
                                        </span>
                                    </div>

                                    <h1 className="font-black text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-6 drop-shadow-xl">
                                        BEM FIK <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#EE99C2] to-[#FBDF07]">
                                            UDINUS
                                        </span>
                                    </h1>

                                    <p className="text-blue-100/90 text-lg md:text-2xl max-w-2xl mb-10 leading-relaxed font-light drop-shadow-md">
                                        Badan Eksekutif Mahasiswa Fakultas Ilmu
                                        Komputer.
                                        <span className="block mt-2 font-medium text-white">
                                            Bergerak bersama mewujudkan inovasi
                                            dan kontribusi nyata.
                                        </span>
                                    </p>

                                    <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                                        <Link
                                            href="/tentang"
                                            className="group relative px-8 py-4 bg-[#323EDD] text-white rounded-full font-black text-lg shadow-[0_10px_30px_-10px_rgba(50,62,221,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(50,62,221,0.7)] hover:scale-105 transition-all duration-300 flex items-center gap-3"
                                        >
                                            Jelajahi Sekarang
                                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform text-[#FBDF07]" />
                                        </Link>

                                        <Link
                                            href="#contact"
                                            className="px-8 py-4 bg-white/5 border-2 border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-[#EE99C2]/50 hover:text-[#EE99C2] backdrop-blur-sm transition-all duration-300"
                                        >
                                            Hubungi Kami
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:block lg:col-span-4 relative h-full"></div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-30">
                    <svg
                        className="relative block w-[calc(100%+1.6px)] h-[60px] md:h-[100px] translate-y-[1px]"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32V120H1392C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0Z"
                            fill="#F8F9FF"
                        ></path>
                    </svg>
                </div>
            </div>

            {/* --- HERO SECTION END --- */}

            {/* --- ABOUT SECTION START --- */}
            <section className="py-20 bg-white">
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
            <LeadersCarousel />
            {/* --- DIVISION SECTION START (MODIFIED: VISIBLE & SUBTLE HOVER) --- */}
            {/* Background section dibuat sedikit lebih gelap (slate-100) agar card lebih pop-up */}
            <section className="py-24 bg-slate-100 relative overflow-hidden">
                {/* Background Decoration (Tetap ada tapi subtle) */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#323EDD]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-[#EE99C2]/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* HEADER SECTION */}
                    <div className="text-center mb-20">
                        <span className="text-[#323EDD] font-bold tracking-widest text-sm uppercase mb-3 block">
                            Departments
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                            OUR DIVISION
                        </h2>
                        {/* Garis Bawah Judul pake warna KUNING (#FBDF07) */}
                        <div className="w-24 h-1.5 bg-[#FBDF07] rounded-full mx-auto"></div>
                    </div>

                    {/* GRID CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {dataDivisi.map((item, index) => (
                            <div
                                key={index}
                                // PERUBAHAN CARD STYLE:
                                // 1. bg-gradient-to-b from-white to-slate-50: Card ada gradasi halus, ga putih polos.
                                // 2. border-slate-200: Border lebih terlihat.
                                // 3. shadow-xl shadow-slate-200/50: Bayangan lebih besar & tegas tapi netral (abu-abu).
                                // 4. hover:shadow-2xl: Hover shadow lebih besar lagi, tetap netral.
                                className="group relative bg-gradient-to-b from-white to-slate-50 rounded-[2.5rem] p-8 border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer"
                            >
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    {/* ICON CONTAINER (PERUBAHAN HOVER) */}
                                    {/* - Hapus group-hover:bg-[#323EDD] (ga jadi blok biru) */}
                                    {/* - Hapus group-hover:text-white */}
                                    {/* - Tambah text-[#323EDD]/70: Awalnya biru agak transparan */}
                                    {/* - Tambah group-hover:text-[#323EDD]: Pas hover jadi biru solid */}
                                    <div className="w-20 h-20 mb-6 rounded-2xl bg-[#323EDD]/10 text-[#323EDD]/70 flex items-center justify-center transition-all duration-500 group-hover:text-[#323EDD] group-hover:scale-110 shadow-sm">
                                        {item.icon}
                                    </div>

                                    {/* JUDUL */}
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#323EDD] transition-colors">
                                        {item.title}
                                    </h3>

                                    {/* DESKRIPSI */}
                                    <p className="text-slate-500 text-sm leading-relaxed mb-8">
                                        {item.desc}
                                    </p>

                                    {/* TOMBOL LINK */}
                                    <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-[#323EDD] transition-colors uppercase tracking-wider">
                                        Selengkapnya
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>

                                {/* GARIS BAWAH AKSEN (Tetap ada biar manis) */}
                                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#323EDD] to-[#EE99C2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* --- DIVISION SECTION END --- */}

            <DivisiCarousel />

            {/* --- PROGRAM KERJA SECTION START --- */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 md:px-12">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 uppercase tracking-widest mb-4">
                            Program Kerja
                        </h2>
                        <p className="text-slate-500 font-light text-lg">
                            Dibawah ini adalah kegiatan tahunan yang kami adakan
                        </p>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
                    </div>

                    {/* Grid Poster */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {dataProker.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center group"
                            >
                                {/* CARD POSTER */}
                                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 mb-6 bg-blue-900 group-hover:-translate-y-2 cursor-pointer">
                                    {/* Gambar Background */}
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                                    />

                                    {/* Overlay Gradient (Biar teks terbaca) */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-90"></div>

                                    {/* Konten Teks di Dalam Poster (Mirip Referensi) */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-center">
                                        <h3 className="text-4xl font-extrabold text-yellow-400 mb-2 drop-shadow-md font-serif tracking-tighter">
                                            {item.title}
                                        </h3>
                                        <p className="text-white text-xs font-bold uppercase tracking-widest mb-4 border-b border-white/30 pb-4">
                                            {item.subtitle}
                                        </p>
                                        <p className="text-blue-100 text-sm leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* JUDUL LUAR & TOMBOL */}
                                <h4 className="text-xl font-bold text-blue-900 mb-4">
                                    {item.title}
                                </h4>

                                <button className="px-8 py-2 rounded-full border border-blue-900 text-blue-900 font-medium text-sm hover:bg-blue-900 hover:text-white transition-colors duration-300">
                                    Baca selengkapnya
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* --- PROGRAM KERJA SECTION END --- */}

            {/* --- CONTACT BEM FIK SECTION START --- */}
            <ContactBemFik />
            {/* --- CONTACT BEM FIK SECTION END --- */}
        </div>
    );
}
