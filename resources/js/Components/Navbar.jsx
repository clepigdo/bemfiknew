import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-[#0a0f2c]/95 shadow-lg shadow-[#323EDD]/10 py-3 backdrop-blur-md border-b border-[#323EDD]/30"
                    : "bg-transparent py-5"
            }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* --- LOGO --- */}
                <Link href="/" className="flex items-center group">
                    <img
                        src="/images/logo.png"
                        alt="BEM FIK Logo"
                        className="h-10 md:h-12 mr-3 transition-transform group-hover:scale-105"
                    />
                    <div className="hidden md:flex flex-col leading-none">
                        <span className="font-bold text-lg tracking-wider text-white">
                            BEM FIK
                        </span>
                        {/* GANTI: Gradasi Pink ke Kuning pada teks UDINUS */}
                        <span className="font-bold text-sm tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#EE99C2] to-[#FBDF07]">
                            UDINUS
                        </span>
                    </div>
                </Link>

                {/* --- MENU LINKS (DESKTOP) --- */}
                <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-wide text-white/90">
                    {[
                        { name: "Beranda", href: "/" },
                        { name: "Tentang", href: "/#tentang" },
                        { name: "Periode", href: "/#periode" },
                        { name: "Divisi", href: "/#divisi" },
                        { name: "Event", href: "/#event" },
                        { name: "Kontak", href: "/#kontak" },
                        { name: "Artikel", href: "/artikel" },
                    ].map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            // GANTI: Hover menjadi Kuning (#FBDF07)
                            className="relative group hover:text-[#FBDF07] transition-colors duration-300"
                        >
                            {item.name}
                            {/* Tambahan: Efek Garis Bawah (Underline) Animasi Warna Kuning */}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FBDF07] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* --- HAMBURGER MENU (MOBILE) --- */}
                <button className="md:hidden text-2xl focus:outline-none text-white hover:text-[#FBDF07] transition-colors">
                    ☰
                </button>
            </div>
        </nav>
    );
}
