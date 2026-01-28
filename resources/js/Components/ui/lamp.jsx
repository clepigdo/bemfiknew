"use client";
import React from "react";
import { motion } from "motion/react";
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
                // Warna teks gelap tebal agar kontras
                className="mt-8 bg-gradient-to-br from-slate-700 to-slate-900 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
            >
                Visi & Misi
            </motion.h1>

            {/* --- Konten Visi & Misi --- */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full px-4 mb-20 relative z-50"
            >
                {/* === Kartu Visi === */}
                <div className="group p-8 bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(8,145,178,0.15)] transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Sparkles className="w-32 h-32 text-cyan-600" />
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-cyan-50  text-cyan-600">
                            <Sparkles size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">
                            Visi
                        </h3>
                    </div>

                    <p className="text-slate-600 leading-relaxed text-lg">
                        "Mewujudkan BEM FIK sebagai organisasi mahasiswa
                        proaktif dan kolaboratif yang berdampak positif dalam
                        mendukung pengembangan diri mahasiswa Fakultas Ilmu
                        Komputer dan pengabdian masyarakat berlandaskan
                        sinergitas dengan mengedepankan loyalitas,
                        profesionalitas kerja dan tanggung jawab."
                    </p>
                </div>

                {/* === Kartu Misi === */}
                <div className="group p-8 rounded-3xl bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(8,145,178,0.15)] transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Target className="w-32 h-32 text-cyan-600" />
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-cyan-50 rounded-2xl text-cyan-600">
                            <Target size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">
                            Misi
                        </h3>
                    </div>

                    <ul className="space-y-4 text-slate-600">
                        <ListItem text="Membangun BEM FIK berdasarkan ketuhanan, kekeluargaan dan keharmonisan." />
                        <ListItem text="Meningkatkan peran aktif Sumber Daya Manusia Internal Organisasi yang inovatif dan komunikatif melalui diskusi terbuka dan evaluasi serta pengawasan terhadap akademik dan non akademik SDM Internal." />
                        <ListItem text="Menjalin hubungan baik dengan seluruh civitas akademika dan aktivis organisasi mahasiswa di tingkat universitas dan fakultas serta lembaga eksternal terkait untuk mendukung keberhasilan program kerja organisasi." />
                        <ListItem
                            text="Mengoptimalkan fungsi media digital sebagai sarana komunikasi untuk memperluas jaringan organisasi dan penyebaran informasi yang kredibel bagi seluruh mahasiswa Fakultas Ilmu Komputer. 
"
                        />
                        <ListItem
                            text="Menjadi fasilitator bagi mahasiswa Fakultas Ilmu Komputer dalam mengembangkan kreativitas, minat dan bakat baik di dalam maupun di luar lingkup universitas.
"
                        />
                    </ul>
                </div>
            </motion.div>
        </LampContainer>
    );
}

const ListItem = ({ text }) => (
    <li className="flex items-start gap-3">
        <span className="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
        <span className="text-base">{text}</span>
    </li>
);

// --- LAMP CONTAINER (DIPERBAIKI TOTAL UNTUK LIGHT MODE) ---
export const LampContainer = ({ children, className }) => {
    return (
        <div
            className={cn(
                "relative flex min-h-screen flex-col items-center justify-start bg-white w-full z-0 pt-40",
                className,
            )}
        >
            <div className="absolute -top-20 left-0 flex w-full h-[600px] items-center justify-center isolate z-0 pointer-events-none ">
                {/* Lampu Kanan - Warna diganti jadi CYAN-600 (Lebih Gelap) */}
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
                    className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-600 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                >
                    <div className="absolute w-[100%] left-0 bg-white h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className="absolute w-40 h-[100%] left-0 bg-white bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </motion.div>

                {/* Lampu Kiri - Warna diganti jadi CYAN-600 (Lebih Gelap) */}
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
                    className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-600 text-white [--conic-position:from_290deg_at_center_top]"
                >
                    <div className="absolute w-40 h-[100%] right-0 bg-white bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div className="absolute w-[100%] right-0 bg-white h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </motion.div>

                {/* Efek Blur/Glow Tengah - PERBAIKAN 3: Opacity dinaikkan jadi 0.6 */}
                <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-white blur-2xl"></div>
                <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>

                {/* BOLA CAHAYA UTAMA - Ganti Cyan-600 dan Opacity tinggi */}
                <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-600 opacity-40 blur-3xl"></div>

                {/* Garis Neon Kecil */}
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "16rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
                ></motion.div>

                {/* Garis Horizontal Tegas */}
                <motion.div
                    initial={{ width: "15rem" }}
                    whileInView={{ width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-600 "
                ></motion.div>

                {/* Penutup Atas */}
                <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-white "></div>
            </div>

            <div className="relative z-50 flex flex-col items-center px-5 w-full">
                {children}
            </div>
        </div>
    );
};
