import React from "react";

export function SpotlightCard({ title, description, icon }) {
    return (
        <div className="relative w-full h-full min-h-[300px] rounded-3xl border border-white/10 bg-slate-950 overflow-hidden group">
            {/* --- EFEK LAMPU / SPOTLIGHT --- */}
            {/* Lapisan cahaya utama (Conic Gradient) */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] opacity-100 transition-all duration-500 group-hover:opacity-100">
                <div
                    className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,cyan_180deg,transparent_360deg)] opacity-20 blur-3xl"
                    style={{ transform: "rotate(180deg)" }}
                />
            </div>

            {/* Garis cahaya tajam di tengah (Beam) */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-64 bg-cyan-400/20 blur-[60px] rounded-full pointer-events-none"></div>

            {/* Garis horizontal cyan di bibir kartu */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-cyan-400 blur-[1px] group-hover:w-48 transition-all duration-500"></div>

            {/* --- CONTENT --- */}
            <div className="relative z-10 p-8 flex flex-col items-center text-center h-full mt-10">
                {/* Icon Wrapper */}
                {icon && (
                    <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                        {icon}
                    </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
                    {title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                    {description}
                </p>

                {/* Tombol kecil di bawah */}
                <div className="mt-auto pt-8">
                    <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest group-hover:text-cyan-300 transition-colors cursor-pointer">
                        Learn More &rarr;
                    </span>
                </div>
            </div>

            {/* Noise Texture (Agar lebih aesthetic) */}
            <div className="absolute inset-0 opacity-[0.03] bg-white pointer-events-none"></div>
        </div>
    );
}
