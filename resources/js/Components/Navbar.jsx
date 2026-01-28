import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

export default function Navbar() {
    // 1. Definisikan state 'scrolled' agar tidak error
    const [scrolled, setScrolled] = useState(false);

    // 2. Tambahkan logika untuk mendeteksi scroll mouse
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
                    ? "bg-blue-900/95 shadow-lg py-2"
                    : "bg-transparent py-4"
            }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <img
                        src="/images/logo.png"
                        alt="BEM FIK Logo"
                        className="h-10 md:h-12 mr-3"
                    />
                    <span className="font-semibold text-lg text-white tracking-wider hidden md:block">
                        BEM FIK UDINUS
                    </span>
                </Link>

                {/* Menu Links (Desktop) */}
                {/* Menu Links (Desktop) */}
                <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wide text-white">
                    <Link
                        href="/"
                        className="hover:text-blue-300 transition-colors"
                    >
                        Beranda
                    </Link>
                    <Link
                        href="/#tentang"
                        className="hover:text-blue-300 transition-colors"
                    >
                        Tentang
                    </Link>
                    <Link
                        href="/#periode"
                        className="hover:text-blue-300 transition-colors"
                    >
                        Periode
                    </Link>
                    <Link
                        href="/#divisi"
                        className="hover:text-blue-300 transition-colors"
                    >
                        Divisi
                    </Link>
                    <Link
                        href="/#event"
                        className="hover:text-blue-300 transition-colors"
                    >
                        Event
                    </Link>
                    <Link
                        href="/#kontak"
                        className="hover:text-blue-300 transition-colors"
                    >
                        Kontak
                    </Link>
                    <Link
                        href="/artikel"
                        className="hover:text-blue-300 transition-colors"
                    >
                        Artikel
                    </Link>
                </div>

                {/* Hamburger Menu (Mobile) - Ikon sementara */}
                <button className="md:hidden text-2xl focus:outline-none">
                    ☰
                </button>
            </div>
        </nav>
    );
}
