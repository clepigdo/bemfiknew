"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react"; // Pastikan install: npm i lucide-react

export const VideoProfileSection = () => {
  // Ganti ID video youtube di sini (ambil kode setelah v=...)
  // Contoh: https://www.youtube.com/watch?v=M7lc1UVf-VE -> ID nya M7lc1UVf-VE
  const videoId = "M7lc1UVf-VE"; 
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Grid Pattern (Hiasan Tipis) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black text-blue-950 tracking-tight mb-4">
            Profil <span className="text-blue-600">BEM FIK</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Saksikan perjalanan kami dalam membangun ekosistem mahasiswa yang inovatif dan berintegritas di Fakultas Ilmu Komputer.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Efek Glow di belakang video */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-[2rem] blur opacity-30 transition duration-1000 group-hover:opacity-100"></div>
          <div className="absolute -inset-4 bg-blue-500/20 rounded-[2.5rem] blur-2xl -z-10"></div>

          {/* Main Card */}
          <div className="relative rounded-[2rem] overflow-hidden border border-white/50 shadow-2xl bg-slate-900 aspect-video group">
            
            {!isPlaying ? (
              // --- TAMPILAN THUMBNAIL (SEBELUM DI-KLIK) ---
              <div 
                className="absolute inset-0 w-full h-full cursor-pointer flex items-center justify-center bg-black"
                onClick={() => setIsPlaying(true)}
              >
                {/* Thumbnail Image Otomatis dari YouTube */}
                <img 
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                  alt="Video Thumbnail" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
                />
                
                {/* Play Button Animation */}
                <div className="relative z-10 flex items-center justify-center">
                  <span className="absolute inline-flex h-24 w-24 rounded-full bg-blue-400 opacity-30 animate-ping"></span>
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/30 p-6 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-12 h-12 text-white fill-white ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-8 left-0 right-0 text-center">
                  <p className="text-white font-medium tracking-widest text-sm uppercase opacity-80">Klik untuk memutar video</p>
                </div>
              </div>
            ) : (
              // --- TAMPILAN VIDEO (SETELAH DI-KLIK) ---
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-[2rem]"
              ></iframe>
            )}
          </div>
        </motion.div>

        {/* Dekorasi Tambahan (Optional) */}
        <div className="flex justify-center mt-12 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Bisa diisi logo himpunan atau partner jika mau */}
        </div>
      </div>
    </section>
  );
};