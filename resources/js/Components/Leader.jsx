import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Mail, Phone, Linkedin } from "lucide-react";

export default function BEMFIKLeadershipCarousel() {
    const [activeCategory, setActiveCategory] = useState("bph");

    // DATA BPH
    const dataBPH = [
        {
            name: "Alfino Kautsar Bahri",
            role: "Gubernur BEM",
            img: "/images/periode/Sacakarsa/caca.png",
            quote: "Memimpin dengan integritas dan dedikasi",
            contact: {
                email: "ketua@bemfik.udinus.ac.id",
                phone: "0812-3456-7890",
            },
        },
        {
            name: "Siti Nurhaliza",
            role: "Wakil Ketua",
            img: "https://i.pravatar.cc/400?img=5",
            quote: "Berinovasi untuk kemajuan bersama",
            contact: {
                email: "wakil@bemfik.udinus.ac.id",
                phone: "0813-4567-8901",
            },
        },
        {
            name: "Budi Santoso",
            role: "Sekretaris Umum",
            img: "https://i.pravatar.cc/400?img=12",
            quote: "Mengorganisir dengan presisi",
            contact: {
                email: "sekretaris@bemfik.udinus.ac.id",
                phone: "0814-5678-9012",
            },
        },
        {
            name: "Diana Putri",
            role: "Bendahara Umum",
            img: "https://i.pravatar.cc/400?img=9",
            quote: "Mengelola dengan transparansi",
            contact: {
                email: "bendahara@bemfik.udinus.ac.id",
                phone: "0815-6789-0123",
            },
        },
        {
            name: "Diana Putri",
            role: "Bendahara Umum",
            img: "https://i.pravatar.cc/400?img=9",
            quote: "Mengelola dengan transparansi",
            contact: {
                email: "bendahara@bemfik.udinus.ac.id",
                phone: "0815-6789-0123",
            },
        },
    ];

    // DATA KADIV
    const dataKadiv = [
        {
            name: "Farhan Maulana",
            role: "Kepala Divisi P3",
            img: "https://i.pravatar.cc/400?img=8",
            quote: "Mengembangkan potensi mahasiswa",
            contact: {
                email: "p3@bemfik.udinus.ac.id",
                phone: "0816-7890-1234",
            },
        },
        {
            name: "Ayu Lestari",
            role: "Kepala Divisi Ekokraf",
            img: "https://i.pravatar.cc/400?img=3",
            quote: "Kreativitas untuk kesejahteraan",
            contact: {
                email: "ekokraf@bemfik.udinus.ac.id",
                phone: "0817-8901-2345",
            },
        },
        {
            name: "Rendra Wijaya",
            role: "Kepala Divisi Mikat",
            img: "https://i.pravatar.cc/400?img=59",
            quote: "Komunikasi yang efektif",
            contact: {
                email: "mikat@bemfik.udinus.ac.id",
                phone: "0818-9012-3456",
            },
        },
        {
            name: "Indah Permata",
            role: "Kepala Divisi Humas",
            img: "https://i.pravatar.cc/400?img=15",
            quote: "Membangun relasi strategis",
            contact: {
                email: "humas@bemfik.udinus.ac.id",
                phone: "0819-0123-4567",
            },
        },
        {
            name: "Dicky Firmansyah",
            role: "Kepala Divisi Olahraga",
            img: "https://i.pravatar.cc/400?img=33",
            quote: "Semangat juang dalam prestasi",
            contact: {
                email: "olahraga@bemfik.udinus.ac.id",
                phone: "0820-1234-5678",
            },
        },
        {
            name: "Rina Kusuma",
            role: "Kepala Divisi Seni",
            img: "https://i.pravatar.cc/400?img=25",
            quote: "Seni sebagai ekspresi jiwa",
            contact: {
                email: "seni@bemfik.udinus.ac.id",
                phone: "0821-2345-6789",
            },
        },
    ];

    const currentData = activeCategory === "bph" ? dataBPH : dataKadiv;

    const scrollCarousel = (direction) => {
        const container = document.getElementById("carousel-container");
        const scrollAmount = 360;
        container.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        const container = document.getElementById("carousel-container");

        if (container) {
            const centerPosition =
                (container.scrollWidth - container.clientWidth) / 2;

            container.scrollTo({
                left: centerPosition,
                behavior: "smooth",
            });
        }
    }, [activeCategory]);

    return (
        <div className="min-h-screen bg-white py-24">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                {/* Header Section - Premium Typography */}
                <div className="text-center mb-20">
                    {/* BAGIAN ATAS: KABINET & PERIODE */}
                    <div className="flex flex-col items-center justify-center mb-5">
                        {/* 1. Nama Kabinet dengan Garis */}
                        <div className="flex items-center gap-3 mb-2">
                            {/* Garis lebih soft (blue-300) agar tidak terlalu tajam */}
                            <div className="w-10 md:w-14 h-[1px] bg-blue-300"></div>

                            <span className="text-blue-800 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
                                Kabinet Sacakarsa
                            </span>

                            <div className="w-10 md:w-14 h-[1px] bg-blue-300"></div>
                        </div>

                        {/* 2. Periode (Model Capsule/Pill) - Biar terlihat modern */}
                        <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase border border-blue-100">
                            Periode 2025 - 2026
                        </span>
                    </div>

                    {/* BAGIAN TENGAH: JUDUL UTAMA */}
                    <h2 className="text-5xl md:text-6xl font-extrabold text-blue-950 mb-6 tracking-tight drop-shadow-sm">
                        Our Leaders
                    </h2>

                    {/* BAGIAN BAWAH: DESKRIPSI */}
                    <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Badan Pengurus Harian dan Kepala Divisi
                        <br className="hidden md:block" />{" "}
                        {/* Break line hanya di layar besar */}
                        BEM Fakultas Ilmu Komputer Universitas Dian Nuswantoro
                    </p>
                </div>

                {/* Category Toggle - Minimalist */}
                <div className="flex justify-center gap-2 mb-20">
                    <button
                        onClick={() => setActiveCategory("bph")}
                        className={`px-10 py-3 font-light text-sm tracking-wide transition-all duration-500 ${
                            activeCategory === "bph"
                                ? "text-blue-950 border-b-2 border-blue-900"
                                : "text-gray-400 hover:text-gray-600"
                        }`}
                    >
                        Badan Pengurus Harian
                    </button>
                    <div className="w-px bg-gray-200"></div>
                    <button
                        onClick={() => setActiveCategory("kadiv")}
                        className={`px-10 py-3 font-light text-sm tracking-wide transition-all duration-500 ${
                            activeCategory === "kadiv"
                                ? "text-blue-950 border-b-2 border-blue-900"
                                : "text-gray-400 hover:text-gray-600"
                        }`}
                    >
                        Kepala Divisi
                    </button>
                </div>

                {/* Carousel Container */}
                <div className="relative group">
                    {/* Left Arrow - Subtle */}
                    <button
                        onClick={() => scrollCarousel("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm text-blue-900 p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-6 hover:bg-blue-900 hover:text-white"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Cards Container */}
                    <div
                        id="carousel-container"
                        className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth px-4"
                    >
                        {currentData.map((leader, index) => (
                            <div
                                key={index}
                                className="snap-center shrink-0 w-[85vw] md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)]
      bg-white p-6 rounded-[35px] 
      border-2 border-blue-50 
      shadow-[0_10px_30px_-15px_rgba(37,99,235,0.2)] 
      hover:border-blue-300 
      hover:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.5)] 
      transition-all duration-300 ease-out"
                            >
                                {/* Tambahkan div pembungkus baru untuk konten yang akan bergerak */}
                                <div className="transition-transform duration-300 ease-out group-hover:-translate-y-3 flex flex-col items-center text-center">
                                    {/* 1. FOTO PROFILE */}
                                    <div className="w-full h-[320px] mb-6 rounded-[25px] overflow-hidden relative shadow-inner">
                                        {/* ... (Isi foto profile tetap sama) ... */}
                                        <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-all duration-300 z-10"></div>
                                        <img
                                            src={leader.img}
                                            alt={leader.name}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20">
                                            <a
                                                href={`mailto:${leader.contact.email}`}
                                                className="bg-white p-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg transition-colors"
                                            >
                                                <Mail size={18} />
                                            </a>
                                            <a
                                                href={`tel:${leader.contact.phone}`}
                                                className="bg-white p-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg transition-colors"
                                            >
                                                <Phone size={18} />
                                            </a>
                                        </div>
                                    </div>

                                    {/* 2. JABATAN (Role) */}
                                    <div className="mb-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                        {leader.role}
                                    </div>

                                    {/* 3. NAMA */}
                                    <h3 className="text-xl font-extrabold text-blue-900 mb-2 uppercase tracking-wide">
                                        {leader.name}
                                    </h3>

                                    {/* 4. QUOTE */}
                                    <p className="text-slate-500 text-xs italic font-medium px-2 line-clamp-2">
                                        "{leader.quote}"
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow - Subtle */}
                    <button
                        onClick={() => scrollCarousel("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm text-blue-900 p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-6 hover:bg-blue-900 hover:text-white"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Bottom Decorative Line */}
                <div className="flex items-center justify-center gap-4 mt-16">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-900"></div>
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                </div>
            </div>
        </div>
    );
}
