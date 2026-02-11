"use client";
import React from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles, Target, CheckCircle2 } from "lucide-react";

// --- 1. KOMPONEN UTAMA (MODIFIED) ---
export function LampDemo() {
    return (
        <LampContainer>
            {/* --- Judul Utama --- */}
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-4 mb-20 relative z-50"
            >
                {/* === KARTU VISI (BLUE THEME) === */}
                <SpotlightCard color="blue" className="h-full">
                    {/* Floating Icon Animation */}
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-all duration-700 rotate-12 group-hover:rotate-45 group-hover:scale-110">
                        <Sparkles className="w-32 h-32 text-[#323EDD]" />
                    </div>

                    {/* Header: Ikon & Judul */}
                    <div className="relative z-10 flex items-center gap-5 mb-8">
                        <div className="p-4 bg-[#323EDD]/10 text-[#323EDD] rounded-2xl border border-[#323EDD]/20 shadow-[0_0_20px_rgba(50,62,221,0.2)] group-hover:bg-[#323EDD] group-hover:text-white transition-all duration-500">
                            <Sparkles size={32} />
                        </div>
                        <div>
                            <h3 className="text-4xl font-black text-white tracking-tight">
                                VISI
                            </h3>
                            {/* Garis Memanjang */}
                            <div className="h-1.5 w-12 bg-[#323EDD] rounded-full mt-2 group-hover:w-full transition-all duration-700 shadow-[0_0_10px_#323EDD]"></div>
                        </div>
                    </div>

                    {/* Konten Text */}
                    <p className="relative z-10 text-slate-300 text-lg leading-loose text-justify font-light group-hover:text-white transition-colors duration-300">
                        "Mewujudkan BEM FIK sebagai organisasi mahasiswa{" "}
                        <span className="text-[#323EDD] font-bold">
                            proaktif
                        </span>{" "}
                        dan{" "}
                        <span className="text-[#323EDD] font-bold">
                            kolaboratif
                        </span>{" "}
                        yang berdampak positif dalam mendukung pengembangan diri
                        mahasiswa Fakultas Ilmu Komputer dan pengabdian
                        masyarakat berlandaskan sinergitas dengan mengedepankan
                        loyalitas, profesionalitas kerja dan tanggung jawab."
                    </p>
                </SpotlightCard>

                {/* === KARTU MISI (PINK THEME) === */}
                <SpotlightCard color="pink" className="h-full">
                    {/* Floating Icon Animation */}
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-all duration-700 -rotate-12 group-hover:-rotate-45 group-hover:scale-110">
                        <Target className="w-32 h-32 text-[#EE99C2]" />
                    </div>

                    {/* Header: Ikon & Judul */}
                    <div className="relative z-10 flex items-center gap-5 mb-8">
                        <div className="p-4 bg-[#EE99C2]/10 text-[#EE99C2] rounded-2xl border border-[#EE99C2]/20 shadow-[0_0_20px_rgba(238,153,194,0.2)] group-hover:bg-[#EE99C2] group-hover:text-white transition-all duration-500">
                            <Target size={32} />
                        </div>
                        <div>
                            <h3 className="text-4xl font-black text-white tracking-tight">
                                MISI
                            </h3>
                            {/* Garis Memanjang */}
                            <div className="h-1.5 w-12 bg-[#EE99C2] rounded-full mt-2 group-hover:w-full transition-all duration-700 shadow-[0_0_10px_#EE99C2]"></div>
                        </div>
                    </div>

                    {/* Konten List Interaktif */}
                    <ul className="relative z-10 space-y-4">
                        <InteractiveList
                            color="pink"
                            text="Membangun BEM FIK berdasarkan ketuhanan, kekeluargaan dan keharmonisan."
                        />
                        <InteractiveList
                            color="pink"
                            text="Meningkatkan peran aktif Sumber Daya Manusia Internal Organisasi yang inovatif dan komunikatif."
                        />
                        <InteractiveList
                            color="pink"
                            text="Menjalin hubungan baik dengan seluruh civitas akademika dan aktivis organisasi mahasiswa."
                        />
                        <InteractiveList
                            color="pink"
                            text="Mengoptimalkan fungsi media digital sebagai sarana komunikasi untuk memperluas jaringan organisasi."
                        />
                        <InteractiveList
                            color="pink"
                            text="Menjadi fasilitator bagi mahasiswa dalam mengembangkan kreativitas, minat dan bakat."
                        />
                    </ul>
                </SpotlightCard>
            </motion.div>
        </LampContainer>
    );
}

// --- 2. KOMPONEN SPOTLIGHT CARD (NEW) ---
const SpotlightCard = ({ children, className = "", color = "blue" }) => {
    const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
    const style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div
            onMouseMove={onMouseMove}
            className={cn(
                "relative group rounded-[2.5rem] border border-white/10 bg-slate-900/40 overflow-hidden",
                className,
            )}
        >
            {/* 1. Efek Glow Mengikuti Mouse (Border Highlight) */}
            <motion.div
                className={`pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 ${
                    color === "pink" ? "bg-[#EE99C2]/40" : "bg-[#323EDD]/40"
                }`}
                style={style}
            />

            {/* 2. Konten Utama */}
            <div className="relative h-full p-8 md:p-10 z-10">{children}</div>

            {/* 3. Dekorasi Background Statis (Gradient Halus) */}
            <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                    color === "pink"
                        ? "bg-gradient-to-br from-[#EE99C2] via-transparent to-transparent"
                        : "bg-gradient-to-br from-[#323EDD] via-transparent to-transparent"
                }`}
            ></div>
        </div>
    );
};

// --- 3. KOMPONEN LIST INTERAKTIF (NEW) ---
const InteractiveList = ({ text, color }) => {
    return (
        <motion.li
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
            className="flex gap-4 items-start group/item cursor-default"
        >
            <div
                className={`mt-1 p-1 rounded-full border border-white/10 bg-white/5 group-hover/item:scale-110 transition-all duration-300 ${
                    color === "pink"
                        ? "group-hover/item:bg-[#EE99C2] group-hover/item:text-white text-[#EE99C2]"
                        : "text-[#323EDD]"
                }`}
            >
                <CheckCircle2 size={14} />
            </div>
            <p className="flex-1 text-slate-300 group-hover/item:text-white transition-colors duration-300 font-light leading-relaxed">
                {text}
            </p>
        </motion.li>
    );
};

// --- 4. LAMP CONTAINER (TIDAK DIUBAH SAMA SEKALI) ---
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
