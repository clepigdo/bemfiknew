"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles, Target } from "lucide-react";

export function LampDemo() {
    return (
        <LampContainer>
            {/* --- Judul Utama --- */}
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-8 bg-gradient-to-br from-[#EE99C2] via-white to-[#323EDD] py-4 bg-clip-text text-center text-4xl font-black tracking-tight text-transparent md:text-7xl"
            >
                VISI & MISI
            </motion.h1>

            {/* --- Container Grid --- */}
            {/* Added perspective here to ensure 3D depth works */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{ perspective: "1000px" }}
                className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-4 mb-20 relative z-50"
            >
                {/* === KARTU VISI === */}
                <Card3D className="bg-slate-900/40 border-white/10 hover:border-[#323EDD]/50 hover:shadow-[0_0_50px_rgba(50,62,221,0.2)]">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#323EDD]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Floating Icon Background */}
                    <div
                        className="absolute top-6 right-6 p-4 opacity-10 group-hover:opacity-20 transition-all duration-500 rotate-12"
                        style={{ transform: "translateZ(40px)" }}
                    >
                        <Sparkles className="w-24 h-24 text-[#323EDD]" />
                    </div>

                    {/* Header: Ikon & Judul */}
                    <div
                        className="relative z-10 flex items-center gap-5 mb-6"
                        style={{ transform: "translateZ(50px)" }}
                    >
                        <div className="p-4 bg-[#323EDD]/20 text-[#323EDD] rounded-2xl border border-[#323EDD]/20 shadow-[0_0_20px_rgba(50,62,221,0.3)]">
                            <Sparkles size={32} />
                        </div>
                        <div>
                            <h3 className="text-3xl font-black text-white tracking-tight">
                                VISI
                            </h3>
                            <div className="h-1 w-12 bg-[#323EDD] rounded-full mt-1 shadow-[0_0_10px_#323EDD]"></div>
                        </div>
                    </div>

                    {/* Konten */}
                    <p
                        className="relative z-10 text-slate-300 leading-loose text-lg text-justify font-light"
                        style={{ transform: "translateZ(30px)" }}
                    >
                        "Mewujudkan BEM FIK sebagai organisasi mahasiswa
                        proaktif dan kolaboratif yang berdampak positif dalam
                        mendukung pengembangan diri mahasiswa Fakultas Ilmu
                        Komputer dan pengabdian masyarakat berlandaskan
                        sinergitas dengan mengedepankan loyalitas,
                        profesionalitas kerja dan tanggung jawab."
                    </p>
                </Card3D>

                {/* === KARTU MISI === */}
                <Card3D className="bg-slate-900/40 border-white/10 hover:border-[#EE99C2]/50 hover:shadow-[0_0_50px_rgba(238,153,194,0.2)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EE99C2]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div
                        className="absolute top-6 right-6 p-4 opacity-10 group-hover:opacity-20 transition-all duration-500 -rotate-12"
                        style={{ transform: "translateZ(40px)" }}
                    >
                        <Target className="w-24 h-24 text-[#EE99C2]" />
                    </div>

                    <div
                        className="relative z-10 flex items-center gap-5 mb-6"
                        style={{ transform: "translateZ(50px)" }}
                    >
                        <div className="p-4 bg-[#EE99C2]/20 text-[#EE99C2] rounded-2xl border border-[#EE99C2]/20 shadow-[0_0_20px_rgba(238,153,194,0.3)]">
                            <Target size={32} />
                        </div>
                        <div>
                            <h3 className="text-3xl font-black text-white tracking-tight">
                                MISI
                            </h3>
                            <div className="h-1 w-12 bg-[#EE99C2] rounded-full mt-1 shadow-[0_0_10px_#EE99C2]"></div>
                        </div>
                    </div>

                    <ul
                        className="relative z-10 space-y-5 text-slate-300 text-justify font-light"
                        style={{ transform: "translateZ(30px)" }}
                    >
                        <ListItem text="Membangun BEM FIK berdasarkan ketuhanan, kekeluargaan dan keharmonisan." />
                        <ListItem text="Meningkatkan peran aktif Sumber Daya Manusia Internal Organisasi yang inovatif dan komunikatif." />
                        <ListItem text="Menjalin hubungan baik dengan seluruh civitas akademika dan aktivis organisasi mahasiswa." />
                        <ListItem text="Mengoptimalkan fungsi media digital sebagai sarana komunikasi untuk memperluas jaringan organisasi." />
                        <ListItem text="Menjadi fasilitator bagi mahasiswa dalam mengembangkan kreativitas, minat dan bakat." />
                    </ul>
                </Card3D>
            </motion.div>
        </LampContainer>
    );
}

// --- KOMPONEN LOGIKA 3D TILT (ANIMASI UTAMA) ---
const Card3D = ({ children, className }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        ["12deg", "-12deg"],
    );
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        ["-12deg", "12deg"],
    );

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={cn(
                // PERBAIKAN: rounded-[2.5rem] ada di sini agar shadow mengikuti bentuk
                "group relative h-full w-full rounded-[2.5rem] transition-all duration-200 ease-out",
                className,
            )}
        >
            {/* PERBAIKAN: Inner Container untuk memotong (clipping) sudut yang berlebih */}
            {/* Kita pisahkan logic tilt (parent) dan logic rounded/overflow (child ini) */}
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                {/* Border Cahaya */}
                <div className="absolute inset-0 border border-white/5 group-hover:border-white/10 transition-colors duration-500 rounded-[2.5rem]"></div>

                {/* Background Glass yang sebenarnya */}
                <div className="absolute inset-0 backdrop-blur-xl"></div>
            </div>

            {/* Content Container - z-index tinggi agar bisa pop-out secara 3D */}
            <div
                className="relative h-full w-full p-8"
                style={{ transformStyle: "preserve-3d" }}
            >
                {children}
            </div>
        </motion.div>
    );
};

// --- LIST ITEM ---
const ListItem = ({ text }) => (
    <li className="flex items-start gap-3">
        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#FBDF07] shrink-0 shadow-[0_0_10px_#FBDF07]" />
        <span className="text-base">{text}</span>
    </li>
);

// --- LAMP CONTAINER (BACKGROUND & LIGHTS) ---
export const LampContainer = ({ children, className }) => {
    return (
        <div
            className={cn(
                "relative flex min-h-screen flex-col items-center justify-start bg-[#0a0f2c] w-full z-0 pt-40 overflow-hidden",
                className,
            )}
        >
            <div className="absolute -top-20 left-0 flex w-full h-[600px] items-center justify-center isolate z-0 pointer-events-none ">
                {/* Lampu Kanan */}
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-[#323EDD] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                >
                    <div className="absolute w-[100%] left-0 bg-[#0a0f2c] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className="absolute w-40 h-[100%] left-0 bg-[#0a0f2c] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </motion.div>

                {/* Lampu Kiri */}
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#323EDD] text-white [--conic-position:from_290deg_at_center_top]"
                >
                    <div className="absolute w-40 h-[100%] right-0 bg-[#0a0f2c] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div className="absolute w-[100%] right-0 bg-[#0a0f2c] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </motion.div>

                <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#0a0f2c] blur-2xl"></div>
                <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>

                {/* GLOW UTAMA */}
                <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-[#323EDD] opacity-50 blur-3xl"></div>

                {/* AKSEN GLOW */}
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "16rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-[#EE99C2] blur-2xl opacity-60"
                ></motion.div>

                {/* GARIS HORIZONTAL */}
                <motion.div
                    initial={{ width: "15rem" }}
                    whileInView={{ width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-[#323EDD]"
                ></motion.div>

                <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-[#0a0f2c] "></div>
            </div>

            <div className="relative z-50 flex flex-col items-center px-5 w-full">
                {children}
            </div>
        </div>
    );
};
