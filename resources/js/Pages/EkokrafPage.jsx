import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import {
    ArrowRight,
    CheckCircle2,
    GraduationCap,
    TrendingUp, // Ikon baru untuk bisnis
    HeartHandshake,
    Sparkles,
    Zap,
    Instagram,
    Linkedin,
    ShoppingBag, // Ikon baru untuk merch
    Briefcase, // Ikon baru untuk kerja
} from "lucide-react";
import { motion } from "framer-motion";

export default function EkokrafPage() {
    const leaders = [
        {
            name: "Nama Lengkap",
            role: "Kepala Divisi",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
            instagram: "#",
            linkedin: "#",
        },
        {
            name: "Nama Lengkap",
            role: "Sekretaris",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
            instagram: "#",
            linkedin: "#",
        },
    ];

    const staffMembers = [
        // ... (Data staff bisa dibiarkan sama atau diisi data asli nanti)
        {
            name: "Staff 1",
            role: "Staff Ahli",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
            instagram: "#",
            linkedin: "#",
        },
        {
            name: "Staff 2",
            role: "Staff Ahli",
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
            instagram: "#",
            linkedin: "#",
        },
        {
            name: "Staff 3",
            role: "Staff Ahli",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
            instagram: "#",
            linkedin: "#",
        },
        {
            name: "Staff 4",
            role: "Staff Ahli",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
            instagram: "#",
            linkedin: "#",
        },
        {
            name: "Staff 5",
            role: "Staff Muda",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
            instagram: "#",
            linkedin: "#",
        },
        {
            name: "Staff 6",
            role: "Staff Muda",
            image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
            instagram: "#",
            linkedin: "#",
        },
        {
            name: "Staff 7",
            role: "Staff Muda",
            image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800&auto=format&fit=crop",
            instagram: "#",
            linkedin: "#",
        },
        {
            name: "Staff 8",
            role: "Staff Muda",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
            instagram: "#",
            linkedin: "#",
        },
        {
            name: "Staff 9",
            role: "Staff Magang",
            image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=800&auto=format&fit=crop",
            instagram: "#",
            linkedin: "#",
        },
        {
            name: "Staff 10",
            role: "Staff Magang",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
            instagram: "#",
            linkedin: "#",
        },
    ];

    // --- UBAH FOCUS POINTS (Pilar Ekokraf) ---
    const focusPoints = [
        {
            title: "Entrepreneurship",
            subtitle: "Business Development",
            desc: "Membangun jiwa kewirausahaan mahasiswa melalui pelatihan dan inkubasi bisnis nyata.",
            icon: Briefcase,
            gradient: "from-blue-500 to-cyan-400",
            lightBg: "bg-blue-50",
        },
        {
            title: "Profit Oriented",
            subtitle: "Financial Independence",
            desc: "Menciptakan sumber pemasukan mandiri untuk mendukung keberlangsungan organisasi.",
            icon: TrendingUp,
            gradient: "from-purple-500 to-pink-400",
            lightBg: "bg-purple-50",
        },
        {
            title: "Partnership",
            subtitle: "External Relations",
            desc: "Menjalin kerjasama strategis dengan sponsor dan mitra usaha eksternal kampus.",
            icon: HeartHandshake,
            gradient: "from-emerald-500 to-teal-400",
            lightBg: "bg-emerald-50",
        },
    ];

    // --- UBAH PROKER LIST (Program Kerja Ekokraf) ---
    const prokerList = [
        {
            title: "CONTENT PLAN",
            desc: "Mengedukasi tentang bisnis digital secara ringan dan interaktif sekaligus mempromosikan produk jualan. Bekerja sama dengan PR dan MEDKREF untuk mengkaji dunia bisnis.",
            image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1000&auto=format&fit=crop", // Gambar Content Creation
            points: [
                "Edukasi Bisnis Digital",
                "Kolaborasi PR & Medkref",
                "3x Konten per Bulan",
            ],
            tag: "Digital Marketing",
            gradient: "from-blue-600 to-cyan-600",
        },
        {
            title: "MARKETING",
            desc: "Kegiatan jualan kreatif inisiatif divisi EKOKRAF untuk menuangkan ide produk unik. Pendapatan akan digunakan untuk menambah kas dan melengkapi inventaris BEM FIK.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop", // Gambar Jualan/Transaksi
            points: [
                "Kreativitas Produk",
                "Fundraising Organisasi",
                "Support Inventaris",
            ],
            tag: "Creative Sales",
            gradient: "from-purple-600 to-pink-600",
        },
        {
            title: "PENGELOLAAN INVENTARIS",
            desc: "Mengelola dan mencatat inventaris aset yang dimiliki BEM FIK UDINUS secara berkala, serta mengusahakan pemenuhan aset kebutuhan organisasi.",
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop", // Gambar Gudang/Stok
            points: [
                "Pencatatan Aset Berkala",
                "Maintenance Barang",
                "Pengadaan Kebutuhan",
            ],
            tag: "Asset Management",
            gradient: "from-emerald-600 to-green-600",
        },
        {
            title: "KELAS BISNIS",
            desc: "Membekali anggota internal maupun mahasiswa umum dengan wawasan dan keterampilan dasar bisnis serta menumbuhkan entrepreneurial mindset.",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop", // Gambar Kelas/Seminar
            points: [
                "Entrepreneurial Mindset",
                "Skill Dasar Bisnis",
                "3x Pertemuan/Periode",
            ],
            tag: "Education",
            gradient: "from-orange-500 to-red-500",
        },
        {
            title: "SAHUR ON THE ROAD",
            desc: "Kegiatan sosial membagikan makanan dan minuman untuk sahur pada saat bulan Ramadhan sebagai bentuk kepedulian sosial divisi Ekonomi Kreatif.",
            image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format&fit=crop", // Gambar Berbagi Makanan
            points: [
                "Berbagi Makanan Sahur",
                "Kegiatan Sosial Ramadhan",
                "Solidaritas Tim",
            ],
            tag: "Charity",
            gradient: "from-indigo-600 to-violet-600",
        },
        {
            title: "JUALAN TAKJIL",
            desc: "Kegiatan berjualan menu berbuka puasa pada bulan Ramadhan. Keuntungan digunakan sebagai modal untuk proker sosial Share Before Sunset.",
            image: "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=1000&auto=format&fit=crop", // Gambar Es/Takjil
            points: [
                "Fundraising Ramadhan",
                "Modal Kegiatan Sosial",
                "Menu Buka Puasa",
            ],
            tag: "Seasonal Biz",
            gradient: "from-yellow-500 to-orange-500",
        },
        {
            title: "SHARE BEFORE SUNSET",
            desc: "Puncak kegiatan sosial yang dilaksanakan pada saat bulan Ramadhan, menyalurkan bantuan dan kebahagiaan kepada yang membutuhkan menjelang berbuka.",
            image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1000&auto=format&fit=crop", // Gambar Donasi/Sunset
            points: [
                "Bakti Sosial",
                "Berbagi Kebahagiaan",
                "Agenda Rutin Ramadhan",
            ],
            tag: "Social Act",
            gradient: "from-teal-500 to-cyan-500",
        },
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
            <Head title="Profil EKOKRAF - BEM FIK" />
            <Navbar />

            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                ></div>
            </div>
            <main className="relative w-full">
                <div className="relative w-full mb-20 overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-2xl opacity-20 animate-pulse"></div>

                    {/* --- HERO BACKGROUND --- */}
                    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden shadow-2xl min-h-screen flex items-center">
                        <div className="absolute inset-0 opacity-30">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20"></div>
                        </div>

                        {/* --- KONTEN TENGAH --- */}
                        <div className="container mx-auto px-6 md:px-12 relative z-10 py-24 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                            {/* 1. BAGIAN KIRI (TEKS) */}
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="md:w-1/2 flex flex-col items-start"
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8">
                                    <ShoppingBag
                                        size={16}
                                        className="text-yellow-300"
                                    />
                                    <span className="text-white/90 text-sm font-semibold">
                                        Divisi Ekonomi Kreatif
                                    </span>
                                </div>

                                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
                                    Kemandirian Lewat
                                    <br />
                                    <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                                        Bisnis & Inovasi
                                    </span>
                                </h1>

                                <p className="text-blue-100 text-xl max-w-xl leading-relaxed mb-10">
                                    Divisi Ekonomi Kreatif (EKOKRAF) bertanggung
                                    jawab sebagai garda terdepan dalam
                                    menciptakan kemandirian finansial
                                    organisasi. Kami berfokus pada pengembangan
                                    jiwa kewirausahaan mahasiswa, pengelolaan
                                    merchandise resmi, serta menjalin kemitraan
                                    strategis yang menguntungkan dan
                                    berkelanjutan.
                                </p>

                                <button className="group inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
                                    Lihat Katalog Merch
                                    <ArrowRight
                                        className="group-hover:translate-x-1 transition-transform"
                                        size={20}
                                    />
                                </button>
                            </motion.div>

                            {/* 2. BAGIAN KANAN (GAMBAR - SUPER UPGRADED) */}
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeOut",
                                    delay: 0.2,
                                }}
                                viewport={{ once: true }}
                                className="md:w-1/2 flex justify-center relative perspective-1000"
                            >
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 180, 360],
                                    }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="absolute inset-0 w-full h-full bg-gradient-to-tr from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-[60px] -z-10"
                                ></motion.div>

                                <motion.div
                                    animate={{ y: [-15, 15, -15] }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="relative group"
                                >
                                    <div className="absolute inset-0 bg-white/10 rounded-[2.5rem] transform translate-x-4 translate-y-4 -rotate-6 group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 border border-white/20"></div>

                                    {/* GANTI GAMBAR DI SINI DENGAN FOTO TIM EKOKRAF */}
                                    <img
                                        src="/images/division/ekokraf.jpg" // Pastikan ada file ini atau ganti path
                                        alt="Tim Ekokraf"
                                        onError={(e) => {
                                            e.target.src =
                                                "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop";
                                        }} // Fallback image
                                        className="relative w-80 max-w-lg rounded-[2.5rem] shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-500 z-10 object-cover border-4 border-white/20"
                                    />

                                    <motion.div
                                        animate={{ y: [10, -10, 10] }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 1,
                                        }}
                                        className="absolute -top-6 -left-6 z-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/40 flex items-center gap-3"
                                    >
                                        <div className="bg-blue-100 p-2 rounded-full">
                                            <TrendingUp
                                                size={20}
                                                className="text-blue-600"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-bold uppercase">
                                                Target
                                            </p>
                                            <p className="text-sm font-bold text-slate-800">
                                                Profit Growth
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        animate={{ y: [-10, 10, -10] }}
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 0.5,
                                        }}
                                        className="absolute -bottom-8 -right-8 z-20 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/10 flex items-center gap-3 text-white"
                                    >
                                        <div className="bg-purple-500/20 p-2 rounded-full">
                                            <Briefcase
                                                size={20}
                                                className="text-purple-400"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 font-bold uppercase">
                                                Focus
                                            </p>
                                            <p className="text-sm font-bold text-white">
                                                Entrepreneur
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>

                        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
                    </div>
                </div>

                {/* --- KONTEN BAWAH (CONTAINER) --- */}
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    {/* --- BAGIAN MEET OUR SQUAD --- */}
                    <div className="container mx-auto px-6 md:px-12 py-24">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                            className="relative text-center mb-20 group"
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-blue-400/20 rounded-full blur-[80px] -z-10 group-hover:bg-purple-400/20 transition-colors duration-700"></div>

                            <motion.div
                                variants={scaleIn}
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-100 shadow-sm mb-6 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default"
                            >
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                </span>
                                <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">
                                    Meet The Hustlers
                                </span>
                            </motion.div>

                            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                                EKOKRAF Kabinet{" "}
                                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                    Sacakarsa
                                    <svg
                                        className="absolute w-full h-3 -bottom-2 left-0 text-blue-400 opacity-60"
                                        viewBox="0 0 100 10"
                                        preserveAspectRatio="none"
                                    >
                                        <path
                                            d="M0 5 Q 50 10 100 5"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            fill="none"
                                        />
                                    </svg>
                                </span>
                            </h2>

                            <p className="text-slate-600 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
                                Digerakkan oleh tim yang berorientasi pada
                                hasil, siap menciptakan peluang bisnis dan
                                kolaborasi demi{" "}
                                <span className="font-bold text-slate-800">
                                    Kemandirian
                                </span>{" "}
                                dan{" "}
                                <span className="font-bold text-slate-800">
                                    Kesejahteraan Organisasi
                                </span>
                                .
                            </p>

                            <div className="mt-8 flex justify-center">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "6rem" }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-48 transition-all duration-700 ease-out shadow-lg shadow-blue-500/30"
                                ></motion.div>
                            </div>
                        </motion.div>

                        {/* 2. ANIMASI LEADERS (STAGGERED) */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex flex-col md:flex-row justify-center gap-8 mb-12"
                        >
                            {leaders.map((member, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="group relative h-[420px] w-full md:w-[320px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:-translate-y-3 ring-4 ring-white border-2 border-blue-100"
                                >
                                    <div className="absolute top-4 right-4 z-20 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                                        CORE LEADER
                                    </div>

                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

                                    <div className="absolute inset-0 flex flex-col justify-end p-8 text-center">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <h3 className="text-2xl font-bold text-white mb-1">
                                                {member.name}
                                            </h3>
                                            <p className="text-yellow-300 font-bold text-sm tracking-widest uppercase mb-4">
                                                {member.role}
                                            </p>

                                            <div className="flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                <a
                                                    href={member.instagram}
                                                    className="p-2 bg-white/20 hover:bg-white hover:text-pink-600 rounded-full text-white transition-colors"
                                                >
                                                    <Instagram size={20} />
                                                </a>
                                                <a
                                                    href={member.linkedin}
                                                    className="p-2 bg-white/20 hover:bg-white hover:text-blue-700 rounded-full text-white transition-colors"
                                                >
                                                    <Linkedin size={20} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* 3. ANIMASI STAFF MEMBERS (GRID STAGGERED) */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {staffMembers.map((member, index) => {
                                const centerClass =
                                    index === 8 ? "lg:col-start-2" : "";
                                return (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className={`group relative h-[350px] w-full ${centerClass} rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}
                                    >
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                                            <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                                <h3 className="text-lg font-bold text-white mb-0.5 leading-tight">
                                                    {member.name}
                                                </h3>
                                                <p className="text-slate-300 font-medium text-xs tracking-wide uppercase mb-3">
                                                    {member.role}
                                                </p>
                                                <div className="w-10 h-0.5 bg-blue-500 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                                <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                                    <a
                                                        href={member.instagram}
                                                        className="text-white hover:text-pink-400 transition-colors"
                                                    >
                                                        <Instagram size={16} />
                                                    </a>
                                                    <a
                                                        href={member.linkedin}
                                                        className="text-white hover:text-blue-400 transition-colors"
                                                    >
                                                        <Linkedin size={16} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* --- PROGRAM UNGGULAN (ANIMATED) --- */}
                    <div className="mb-24 overflow-hidden">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={fadeInUp}
                            className="text-center mb-20"
                        >
                            <motion.div
                                variants={scaleIn}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 mb-4"
                            >
                                <Sparkles
                                    size={16}
                                    className="text-purple-600"
                                />
                                <span className="text-purple-900 text-sm font-bold">
                                    EKOKRAF PROGRAMS
                                </span>
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                                Program Kerja
                            </h2>
                        </motion.div>

                        <div className="flex flex-col gap-24">
                            {prokerList.map((item, index) => {
                                const isEven = index % 2 === 0;

                                return (
                                    <motion.div
                                        key={index}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                        className={`flex flex-col ${
                                            isEven
                                                ? "md:flex-row"
                                                : "md:flex-row-reverse"
                                        } items-center gap-10 md:gap-16`}
                                    >
                                        <motion.div
                                            variants={{
                                                hidden: {
                                                    opacity: 0,
                                                    x: isEven ? -100 : 100,
                                                    scale: 0.9,
                                                },
                                                visible: {
                                                    opacity: 1,
                                                    x: 0,
                                                    scale: 1,
                                                    transition: {
                                                        duration: 0.8,
                                                        ease: "easeOut",
                                                    },
                                                },
                                            }}
                                            className="w-full md:w-1/2 relative group"
                                        >
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-r ${item.gradient} blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full`}
                                            ></div>

                                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-[300px] md:h-[400px] object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                                <div className="absolute top-6 left-6">
                                                    <span
                                                        className={`px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold shadow-lg uppercase tracking-wider text-slate-900`}
                                                    >
                                                        {item.tag}
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            variants={staggerContainer}
                                            className="w-full md:w-1/2"
                                        >
                                            <motion.div
                                                variants={fadeInUp}
                                                className="flex items-center gap-4 mb-4"
                                            >
                                                <span
                                                    className={`text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br ${item.gradient} opacity-20`}
                                                >
                                                    0{index + 1}
                                                </span>
                                                <div
                                                    className={`h-px flex-1 bg-gradient-to-r ${item.gradient} opacity-30`}
                                                ></div>
                                            </motion.div>

                                            <motion.h3
                                                variants={fadeInUp}
                                                className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight"
                                            >
                                                {item.title}
                                            </motion.h3>

                                            <motion.p
                                                variants={fadeInUp}
                                                className="text-slate-600 text-lg leading-relaxed mb-8 text-justify"
                                            >
                                                {item.desc}
                                            </motion.p>

                                            <div className="space-y-4">
                                                {item.points.map(
                                                    (point, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            variants={fadeInUp}
                                                            className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
                                                        >
                                                            <div
                                                                className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 text-white`}
                                                            >
                                                                <CheckCircle2
                                                                    size={16}
                                                                />
                                                            </div>
                                                            <span className="text-slate-700 font-semibold text-sm md:text-base">
                                                                {point}
                                                            </span>
                                                        </motion.div>
                                                    ),
                                                )}
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-[3rem] blur-2xl opacity-30"></div>

                        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-[3rem] overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 opacity-10">
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                                        backgroundSize: "50px 50px",
                                    }}
                                ></div>
                            </div>

                            <div className="relative z-10 p-12 md:p-20 text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
                                    <Zap
                                        size={16}
                                        className="text-yellow-300"
                                    />
                                    <span className="text-white/90 text-sm font-bold">
                                        JOIN THE BUSINESS TEAM
                                    </span>
                                </div>

                                <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                                    Punya Ide Bisnis?
                                </h2>

                                <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                                    Mari wujudkan inovasi bisnis bersama Divisi
                                    EKOKRAF BEM FIK UDINUS dan ciptakan
                                    keuntungan nyata untuk kemajuan organisasi.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="group inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
                                        Ajukan Kerjasama
                                        <ArrowRight
                                            className="group-hover:translate-x-1 transition-transform"
                                            size={20}
                                        />
                                    </button>

                                    <button className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                                        Cek Lapak FIK
                                    </button>
                                </div>
                            </div>

                            <div className="absolute -left-20 -top-20 w-80 h-80 bg-gradient-to-br from-blue-500/30 to-transparent rounded-full blur-3xl"></div>
                            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="relative bg-slate-900 text-white text-center py-12 mt-20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                <div className="relative">
                    <p className="text-slate-400 font-medium">
                        &copy; 2025 BEM FIK UDINUS. Crafted with passion.
                    </p>
                </div>
            </footer>
        </div>
    );
}
