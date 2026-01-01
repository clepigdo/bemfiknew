import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxSeparator() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Efek Parallax untuk Background
    const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    // Efek Geser Teks Baris 1 (Datang dari Kiri ke Kanan)
    // Gunakan -30% ke 30% agar pas di tengah saat scroll 50%
    const xText = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

    // Efek Geser Teks Baris 2 (Datang dari Kanan ke Kiri)
    // Gunakan kebalikannya: 30% ke -30%
    const xTextReverse = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

    return (
        <section
            ref={ref}
            className="relative h-[50vh] overflow-hidden flex items-center justify-center -mt-10 z-20" // -mt-10 agar menyatu dengan section sebelumnya
        >
            {/* BACKGROUND IMAGE PARALLAX */}
            <motion.div
                style={{ y: yBg }}
                className="absolute inset-0 w-full h-[120%] -top-[10%]"
            >
                <div className="absolute inset-0"></div> {/* Overlay Gelap */}
                <img
                    src="/images/seruan.jpeg"
                    alt="Parallax Background"
                    className="w-full h-full object-cover grayscale opacity-70"
                />
            </motion.div>

            {/* SCROLLING TEXT CONTENT */}
            <div className="relative z-20 flex items-center flex-col gap-4 w-full mix-blend-overlay opacity-80">
                <motion.div style={{ x: xText }} className="whitespace-nowrap">
                    <h2 className="text-8xl md:text-9xl font-black text-transparent [-webkit-text-stroke:2px_white] uppercase tracking-tighter opacity-50">
                        BEM FIK
                    </h2>
                </motion.div>

                {/* Baris 2: Geser Kiri */}
                <motion.div
                    style={{ x: xTextReverse }}
                    className="whitespace-nowrap"
                >
                    <h2 className="text-8xl md:text-9xl font-black text-white uppercase tracking-tighter">
                        • SACAKARSA •
                    </h2>
                </motion.div>
            </div>

            {/* DEKORASI BORDER BAWAH UNTUK TRANSISI KE PUTIH */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent z-30"></div>
        </section>
    );
}
