import React, { useState, useEffect } from "react";
import {
    BookOpen,
    Lightbulb,
    Trophy,
    Handshake,
    MonitorPlay,
    Users,
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
            {/* --- NAVBAR END --- */}

            {/* --- HERO SECTION START --- */}
            <div className="relative h-screen flex items-center justify-center text-center px-6">
                {/* Background Image & Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/bemfikku.jpg"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient biru-ungu seperti di desain */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-blue-800/80 mix-blend-multiply"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                    {/* Judul Besar dengan Font Cinzel & Animasi Fade-In */}
                    <h1 className="font-cinzel text-5xl md:text-7xl font-bold mb-4 tracking-wider animate-fade-in-up">
                        BEM FIK UDINUS
                    </h1>

                    <p className="text-xl md:text-2xl font-light mb-2 tracking-wide animate-fade-in-up animation-delay-200">
                        Official Site
                    </p>
                    <p className="text-base md:text-lg mb-8 font-light max-w-2xl animate-fade-in-up animation-delay-400">
                        Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer
                        <br />
                        Udinus Semarang.
                    </p>

                    {/* Tombol dengan Efek Hover Keren */}
                    <Link
                        href="/tentang"
                        className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium tracking-tighter text-white bg-transparent border-2 border-white rounded-full group animate-fade-in-up animation-delay-600"
                    >
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                        <span className="relative group-hover:text-blue-900 transition-colors duration-300">
                            FIND MORE ABOUT US
                        </span>
                    </Link>
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
            {/* --- DIVISION SECTION START --- */}
            <section className="py-10 bg-slate-100">
                <div className="container mx-auto px-4 md:px-36">
                    {/* Judul Section */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 uppercase tracking-wider">
                            Our Division
                        </h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                    </div>

                    {/* Grid Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {dataDivisi.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-[35px] border-2 border-transparent shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:border-blue-300 hover:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.4)] hover:-translate-y-3 transition-all duration-300 ease-out flex flex-col items-center text-center group"
                            >
                                {/* Icon Container */}
                                <div className="mb-6 p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>

                                {/* Judul Divisi */}
                                <h3 className="text-xl font-bold text-blue-900 mb-4 tracking-wide">
                                    {item.title}
                                </h3>

                                {/* Deskripsi */}
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
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
