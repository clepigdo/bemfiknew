import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Mail, Phone, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

export default function BEMFIKLeadershipCarousel() {
    const [activeCategory, setActiveCategory] = useState("bph");
    const [isAnimating, setIsAnimating] = useState(false);
    const dataBPH = [
        {
            name: "Alfino Kautsar Bahri",
            role: "Gubernur",
            img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
            quote: "Memimpin dengan integritas dan dedikasi",
            contact: {
                email: "ketua@bemfik.udinus.ac.id",
                phone: "0812-3456-7890",
            },
        },
        {
            name: "Putri Rossa Ananta",
            role: "Wakil Gubernur",
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
            quote: "Berinovasi untuk kemajuan bersama",
            contact: {
                email: "wakil@bemfik.udinus.ac.id",
                phone: "0813-4567-8901",
            },
        },
        {
            name: "Rico Fernandez",
            role: "Sekretaris Umum 1",
            img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
            quote: "Mengorganisir dengan presisi",
            contact: {
                email: "sekretaris@bemfik.udinus.ac.id",
                phone: "0814-5678-9012",
            },
        },
        {
            name: "Ailsa Najwa Sopo",
            role: "Sekretaris Umum 2",
            img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
            quote: "Mengelola dengan transparansi",
            contact: {
                email: "bendahara@bemfik.udinus.ac.id",
                phone: "0815-6789-0123",
            },
        },
        {
            name: "Sarah Fatimatul Sopo",
            role: "Bendahara Umum",
            img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
            quote: "Mengelola dengan transparansi",
            contact: {
                email: "bendahara@bemfik.udinus.ac.id",
                phone: "0815-6789-0123",
            },
        },
    ];

    // --- DATA KADIV ---
    const dataKadiv = [
        {
            name: "Igdo Ragil Manuel",
            role: "Kepala Divisi P3",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
            quote: "Mengembangkan potensi mahasiswa",
            contact: {
                email: "p3@bemfik.udinus.ac.id",
                phone: "0816-7890-1234",
            },
        },
        {
            name: "Mey Labubu",
            role: "Kepala Divisi Ekokraf",
            img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
            quote: "Kreativitas untuk kesejahteraan",
            contact: {
                email: "ekokraf@bemfik.udinus.ac.id",
                phone: "0817-8901-2345",
            },
        },
        {
            name: "Zilda Labubu",
            role: "Kepala Divisi Mikat",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
            quote: "Komunikasi yang efektif",
            contact: {
                email: "mikat@bemfik.udinus.ac.id",
                phone: "0818-9012-3456",
            },
        },
        {
            name: "Dela Labubu",
            role: "Kepala Divisi PR",
            img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
            quote: "Membangun relasi strategis",
            contact: {
                email: "humas@bemfik.udinus.ac.id",
                phone: "0819-0123-4567",
            },
        },
        {
            name: "Hanif Noorsafitri",
            role: "Kepala Divisi PSDM",
            img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800&auto=format&fit=crop",
            quote: "Semangat juang dalam prestasi",
            contact: {
                email: "olahraga@bemfik.udinus.ac.id",
                phone: "0820-1234-5678",
            },
        },
        {
            name: "Lala Move",
            role: "Kepala Divisi Medkref",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
            quote: "Seni sebagai ekspresi jiwa",
            contact: {
                email: "seni@bemfik.udinus.ac.id",
                phone: "0821-2345-6789",
            },
        },
    ];

    // --- LOGIKA PERPINDAHAN KATEGORI ---
    const handleCategoryChange = (category) => {
        if (activeCategory === category) return;
        setIsAnimating(true);
        setActiveCategory(category);
        setTimeout(() => setIsAnimating(false), 500); // Reset state animasi
    };

    // --- LOGIKA DUPLIKASI DATA ---
    const rawData = activeCategory === "bph" ? dataBPH : dataKadiv;

    // Duplikat data BPH agar cukup untuk looping (karena cuma 4)
    let finalData = rawData;
    if (activeCategory === "bph" && rawData.length < 6) {
        finalData = [...rawData, ...rawData, ...rawData];
    } else if (rawData.length < 6) {
        finalData = [...rawData, ...rawData];
    }

    return (
        <div className="min-h-screen bg-white py-24">
            {/* Style Animasi Fade In Up */}
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); filter: blur(5px); }
                    to { opacity: 1; transform: translateY(0); filter: blur(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>

            <div className="container mx-auto px-4 md:px-12 max-w-7xl">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-2 block">
                        Meet Our Leaders
                    </span>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-blue-950 mb-6 tracking-tight">
                        Kabinet Sacakarsa
                    </h2>
                    <div className="w-24 h-1.5 bg-blue-600 rounded-full mx-auto mb-6"></div>
                </div>

                {/* Toggle Buttons */}
                <div className="flex justify-center gap-4 mb-16">
                    <button
                        onClick={() => handleCategoryChange("bph")}
                        className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 transform active:scale-95 ${
                            activeCategory === "bph"
                                ? "bg-blue-900 text-white shadow-xl scale-105"
                                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                        }`}
                    >
                        Badan Pengurus Harian
                    </button>
                    <button
                        onClick={() => handleCategoryChange("kadiv")}
                        className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 transform active:scale-95 ${
                            activeCategory === "kadiv"
                                ? "bg-blue-900 text-white shadow-xl scale-105"
                                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                        }`}
                    >
                        Kepala Divisi
                    </button>
                </div>

                {/* --- CAROUSEL CONTAINER DENGAN ANIMASI --- */}
                {/* KEY PENTING: key={activeCategory} memaksa react merender ulang div ini saat kategori berubah */}
                <div
                    key={activeCategory}
                    className="relative px-0 md:px-4 animate-fade-in-up"
                >
                    {/* BUTTONS NAVIGATION */}
                    <div className="swiper-button-prev-custom absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-30 bg-white text-blue-900 p-3 rounded-full shadow-lg hover:bg-blue-900 hover:text-white transition-all cursor-pointer border border-blue-50">
                        <ChevronLeft className="w-6 h-6" />
                    </div>
                    <div className="swiper-button-next-custom absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-30 bg-white text-blue-900 p-3 rounded-full shadow-lg hover:bg-blue-900 hover:text-white transition-all cursor-pointer border border-blue-50">
                        <ChevronRight className="w-6 h-6" />
                    </div>

                    {/* Gradient Masking */}
                    <div className="absolute top-0 bottom-0 left-0 w-8 md:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-8 md:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

                    <Swiper
                        modules={[EffectCoverflow, Navigation, Autoplay]}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        // Konfigurasi Responsif
                        breakpoints={{
                            0: { slidesPerView: 1.25 },
                            768: { slidesPerView: 2 },
                            1024: {
                                slidesPerView: 3,
                                coverflowEffect: {
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 150,
                                    modifier: 1.5,
                                    slideShadows: false,
                                },
                            },
                        }}
                        initialSlide={0}
                        navigation={{
                            nextEl: ".swiper-button-next-custom",
                            prevEl: ".swiper-button-prev-custom",
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        className="w-full py-10"
                    >
                        {finalData.map((leader, index) => (
                            <SwiperSlide key={index}>
                                {/* CARD ITEM */}
                                <div className="relative h-[480px] w-full rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-2xl transition-all duration-500 bg-white border border-gray-100">
                                    {/* Badge */}
                                    <div className="absolute top-5 right-5 z-20 bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                                        {activeCategory === "bph"
                                            ? "CORE LEADER"
                                            : "HEAD DIVISION"}
                                    </div>

                                    {/* Gambar */}
                                    <img
                                        src={leader.img}
                                        alt={leader.name}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Gradient Gelap */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

                                    {/* Konten Teks */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-center">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1 leading-tight">
                                                {leader.name}
                                            </h3>

                                            <p className="text-yellow-400 font-bold text-xs tracking-widest uppercase mb-4">
                                                {leader.role}
                                            </p>

                                            {/* Quote */}
                                            <div className="relative mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 hidden lg:block">
                                                <Quote
                                                    size={14}
                                                    className="text-white/40 absolute -top-3 -left-2 transform -scale-x-100"
                                                />
                                                <p className="text-white/90 text-sm italic font-light px-2 line-clamp-2">
                                                    "{leader.quote}"
                                                </p>
                                            </div>

                                            {/* Sosmed */}
                                            <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150">
                                                <a
                                                    href={`mailto:${leader.contact.email}`}
                                                    className="p-2 bg-white/20 hover:bg-white hover:text-blue-600 rounded-full text-white transition-colors backdrop-blur-sm"
                                                >
                                                    <Mail size={16} />
                                                </a>
                                                <a
                                                    href={`tel:${leader.contact.phone}`}
                                                    className="p-2 bg-white/20 hover:bg-white hover:text-green-600 rounded-full text-white transition-colors backdrop-blur-sm"
                                                >
                                                    <Phone size={16} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
