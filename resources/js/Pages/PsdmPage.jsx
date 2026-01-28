import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import {
    ArrowRight,
    CheckCircle2,
    Users, // Ikon untuk SDM/Orang
    UserPlus, // Ikon untuk Oprec
    Heart, // Ikon untuk Bonding/Curhat
    BookOpen, // Ikon untuk Edukasi/LKMM-TD
    Coffee, // Ikon untuk Bukber/Santai
    Sparkles,
    Zap,
    Instagram,
    Linkedin,
    Target, // Ikon untuk Tujuan/PCP
    Lightbulb, // Ikon untuk Brainstorming
    Puzzle, // Ikon untuk Upgrading/Skill
} from "lucide-react";
import { motion } from "framer-motion";

export default function PsdmPage() {
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

    // Data Staff (Placeholder)
    const staffMembers = Array(10)
        .fill({
            name: "Nama Staff",
            role: "Staff Ahli",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
            instagram: "#",
            linkedin: "#",
        })
        .map((staff, i) => ({
            ...staff,
            role: i > 7 ? "Staff Magang" : i > 3 ? "Staff Muda" : "Staff Ahli",
        }));

    // --- FOKUS UTAMA DIVISI PSDM ---
    const focusPoints = [
        {
            title: "Regeneration",
            subtitle: "Cadre Formation",
            desc: "Mencetak penerus organisasi yang berkualitas melalui sistem rekrutmen dan kaderisasi yang terstruktur.",
            icon: UserPlus,
            gradient: "from-emerald-500 to-green-500",
            lightBg: "bg-emerald-50",
        },
        {
            title: "Harmonization",
            subtitle: "Internal Bonding",
            desc: "Menjaga keharmonisan dan ikatan kekeluargaan antar anggota untuk menciptakan lingkungan kerja yang kondusif.",
            icon: Heart,
            gradient: "from-teal-500 to-cyan-500",
            lightBg: "bg-teal-50",
        },
        {
            title: "Development",
            subtitle: "Skill Upgrading",
            desc: "Memfasilitasi pengembangan soft-skill dan hard-skill anggota agar kompeten dalam menjalankan tugas.",
            icon: Puzzle,
            gradient: "from-lime-500 to-green-500",
            lightBg: "bg-lime-50",
        },
    ];

    // --- PROGRAM KERJA PSDM (SESUAI REQUEST) ---
    const prokerList = [
        {
            title: "OPEN RECRUITMENT",
            desc: "Gerbang utama penjaringan sumber daya manusia berkualitas untuk BEM FIK. Meliputi seleksi administrasi, wawancara, dan penjelasan timeline tugas kepada calon pengurus.",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop", // Gambar Interview/Seleksi
            points: [
                "Seleksi Berkualitas",
                "Penjelasan Timeline",
                "Parameter Kompetensi",
            ],
            tag: "Regeneration",
            gradient: "from-emerald-600 to-green-600",
        },
        {
            title: "LKMM-TD",
            desc: "Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar. Memberikan pengetahuan manajerial organisasi bagi mahasiswa aktif maupun umum.",
            image: "https://images.unsplash.com/photo-1544531696-6d2777f9227c?q=80&w=1000&auto=format&fit=crop", // Gambar Seminar/Training
            points: [
                "Manajemen Organisasi",
                "Leadership Training",
                "Sertifikasi SKKM",
            ],
            tag: "Leadership",
            gradient: "from-teal-600 to-cyan-600",
        },
        {
            title: "PCP (PEMBEKALAN)",
            desc: "Pelatihan Calon Pengurus yang berfokus pada wawasan administrasi dan budaya organisasi FIK untuk mencetak kader ormawa yang kompeten.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop", // Gambar Diskusi Kelompok
            points: [
                "Administrasi Organisasi",
                "Pencetakan Kader",
                "Budaya Organisasi",
            ],
            tag: "Training",
            gradient: "from-green-600 to-lime-600",
        },
        {
            title: "UPGRADING",
            desc: "Sesi peningkatan wawasan (insight) anggota BEM FIK dengan mendatangkan pembicara kompeten. Dilaksanakan 3 kali dalam satu periode.",
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000&auto=format&fit=crop", // Gambar Workshop
            points: ["Insight Baru", "Pembicara Kompeten", "3x Sesi Periode"],
            tag: "Skill Dev",
            gradient: "from-lime-600 to-emerald-600",
        },
        {
            title: "INTERNAL BONDING",
            desc: "Gabungan kegiatan Temu Curhat Angkatan dan Brainstorming. Menampung aspirasi, solusi masalah, dan pengumuman divisi baru yang diakhiri dengan Makrab.",
            image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop", // Gambar Teman/Rangkulan
            points: [
                "Sharing Session",
                "Makrab Anggota Baru",
                "Solusi Masalah Internal",
            ],
            tag: "Solidarity",
            gradient: "from-cyan-600 to-sky-600",
        },
        {
            title: "BUKBER WITH ALUMNI",
            desc: "Buka puasa bersama untuk mempererat silaturahmi antara anggota aktif dan alumni BEM FIK. Menjadi wadah sharing inspirasi lintas generasi.",
            image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop", // Gambar Makan Bersama
            points: [
                "Silaturahmi Alumni",
                "Jembatan Komunikasi",
                "Sharing Lintas Generasi",
            ],
            tag: "Family",
            gradient: "from-amber-500 to-orange-500",
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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/20">
            <Head title="Profil PSDM - BEM FIK" />
            <Navbar />

            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                ></div>
            </div>
            <main className="relative w-full">
                <div className="relative w-full mb-20 overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 blur-2xl opacity-20 animate-pulse"></div>

                    {/* --- HERO BACKGROUND --- */}
                    <div className="relative bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 overflow-hidden shadow-2xl min-h-screen flex items-center">
                        <div className="absolute inset-0 opacity-30">
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-transparent to-teal-500/20"></div>
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
                                    <Users
                                        size={16}
                                        className="text-yellow-300"
                                    />
                                    <span className="text-white/90 text-sm font-semibold">
                                        Divisi Pengembangan Sumber Daya Mahasiswa
                                    </span>
                                </div>

                                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
                                    Mencetak
                                    <br />
                                    <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                                        Pemimpin Masa Depan
                                    </span>
                                </h1>

                                <p className="text-emerald-100 text-xl max-w-xl leading-relaxed mb-10">
                                    Divisi PSDM adalah jantung regenerasi BEM
                                    FIK. Kami fokus pada pengembangan kualitas
                                    anggota, menciptakan iklim kekeluargaan yang
                                    harmonis, serta membekali mahasiswa dengan
                                    keterampilan manajerial yang unggul.
                                </p>

                                <button className="group inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
                                    Gabung Bersama Kami
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
                                    className="absolute inset-0 w-full h-full bg-gradient-to-tr from-emerald-500/30 via-teal-500/30 to-cyan-500/30 rounded-full blur-[60px] -z-10"
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

                                    {/* GANTI GAMBAR DENGAN FOTO TIM PSDM */}
                                    <img
                                        src="/images/division/psdm.jpg" // Pastikan ada gambar ini
                                        alt="Tim PSDM"
                                        onError={(e) => {
                                            e.target.src =
                                                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop";
                                        }} // Fallback: Team Bonding
                                        className="relative w-80 max-w-lg rounded-[2.5rem] shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-500 z-10 object-cover border-4 border-white/20"
                                    />

                                    {/* Floating Badge 1 */}
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
                                        <div className="bg-emerald-100 p-2 rounded-full">
                                            <Heart
                                                size={20}
                                                className="text-emerald-600"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-bold uppercase">
                                                Value
                                            </p>
                                            <p className="text-sm font-bold text-slate-800">
                                                Family First
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Floating Badge 2 */}
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
                                        <div className="bg-teal-500/20 p-2 rounded-full">
                                            <Target
                                                size={20}
                                                className="text-teal-400"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 font-bold uppercase">
                                                Goal
                                            </p>
                                            <p className="text-sm font-bold text-white">
                                                Regeneration
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>

                        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl"></div>
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
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-emerald-400/20 rounded-full blur-[80px] -z-10 group-hover:bg-teal-400/20 transition-colors duration-700"></div>

                            <motion.div
                                variants={scaleIn}
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-emerald-100 shadow-sm mb-6 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default"
                            >
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                </span>
                                <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase">
                                    Meet The Guardians
                                </span>
                            </motion.div>

                            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                                PSDM Kabinet{" "}
                                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                                    Sacakarsa
                                    <svg
                                        className="absolute w-full h-3 -bottom-2 left-0 text-emerald-400 opacity-60"
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
                                Digerakkan oleh hati yang tulus, siap merangkul
                                setiap potensi dan membangun{" "}
                                <span className="font-bold text-slate-800">
                                    Kekeluargaan
                                </span>{" "}
                                serta{" "}
                                <span className="font-bold text-slate-800">
                                    Profesionalisme
                                </span>
                                .
                            </p>

                            <div className="mt-8 flex justify-center">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "6rem" }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full group-hover:w-48 transition-all duration-700 ease-out shadow-lg shadow-emerald-500/30"
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
                                    className="group relative h-[420px] w-full md:w-[320px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 hover:-translate-y-3 ring-4 ring-white border-2 border-emerald-100"
                                >
                                    <div className="absolute top-4 right-4 z-20 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                                        CORE LEADER
                                    </div>

                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-teal-900/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

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
                                                <div className="w-10 h-0.5 bg-emerald-500 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

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
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 mb-4"
                            >
                                <Sparkles
                                    size={16}
                                    className="text-emerald-600"
                                />
                                <span className="text-emerald-900 text-sm font-bold">
                                    PSDM PROGRAMS
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
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-[3rem] blur-2xl opacity-30"></div>

                        <div className="relative bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 rounded-[3rem] overflow-hidden shadow-2xl">
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
                                        JOIN THE FAMILY
                                    </span>
                                </div>

                                <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                                    Ingin Berkembang?
                                </h2>

                                <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                                    Temukan potensimu, asah kepemimpinanmu, dan
                                    jadilah bagian dari keluarga besar BEM FIK
                                    UDINUS bersama Divisi PSDM.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="group inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
                                        Daftar OPREC
                                        <ArrowRight
                                            className="group-hover:translate-x-1 transition-transform"
                                            size={20}
                                        />
                                    </button>

                                    <button className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                                        Hubungi Kami
                                    </button>
                                </div>
                            </div>

                            <div className="absolute -left-20 -top-20 w-80 h-80 bg-gradient-to-br from-emerald-500/30 to-transparent rounded-full blur-3xl"></div>
                            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-br from-teal-500/30 to-transparent rounded-full blur-3xl"></div>
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
