import React from "react";
import { Link, usePage } from "@inertiajs/react";
import {
    Instagram,
    Youtube,
    Linkedin,
    Send,
    MapPin,
    Mail,
    Phone,
    Heart,
    Lock,
    LayoutDashboard,
    ArrowUp,
} from "lucide-react";

export default function Footer() {
    // Ambil data user dari Inertia untuk cek status login
    const { auth } = usePage().props;

    // Fungsi Scroll to Top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-[#020510] text-white pt-20 pb-10 overflow-hidden border-t border-white/5 font-sans">
            {/* --- DECORATIVE GLOW --- */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* KOLOM 1: BRANDING & NEWSLETTER */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <img
                                src="/images/logo.png"
                                alt="Logo BEM FIK"
                                className="h-12 w-auto"
                                onError={(e) =>
                                    (e.target.style.display = "none")
                                }
                            />
                            <div className="flex flex-col">
                                <span className="font-bold text-xl tracking-wider text-white">
                                    BEM FIK
                                </span>
                                <span className="text-xs text-blue-400 font-medium tracking-widest">
                                    UDINUS
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Bergerak progresif untuk masa depan yang inovatif.
                            Harmoni dalam aksi nyata.
                        </p>

                        {/* Social Media Links */}
                        <div className="flex gap-4 pt-2">
                            <SocialButton
                                icon={<Instagram size={18} />}
                                href="https://instagram.com/bemfikudinus"
                            />
                            <SocialButton
                                icon={<Youtube size={18} />}
                                href="https://youtube.com"
                            />
                            <SocialButton
                                icon={<Linkedin size={18} />}
                                href="https://linkedin.com"
                            />
                        </div>
                    </div>

                    {/* KOLOM 2: QUICK LINKS */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                            Akses Cepat
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <FooterLink href="/" text="Beranda" />
                            {/* Link ke section ID di halaman depan */}
                            <FooterLink href="/#about" text="Tentang Kami" />
                            <FooterLink
                                href="/#periode"
                                text="Periode Organisasi"
                            />
                            <FooterLink href="/#event" text="Program Kerja" />
                            {/* Link ke Halaman Artikel Publik (Sesuai Routes) */}
                            <FooterLink
                                href={route("public.articles")}
                                text="Berita & Artikel"
                            />
                        </ul>
                    </div>

                    {/* KOLOM 3: DEPARTEMEN (SUDAH DIAKTIFKAN) */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
                            Departemen
                        </h4>
                        <ul className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm text-gray-400">
                            {/* Menggunakan route() sesuai web.php */}
                            <DepartmentLink href={route("p3")} text="P3" />
                            <DepartmentLink
                                href={route("ekokraf")}
                                text="EKOKRAF"
                            />
                            <DepartmentLink
                                href={route("mikat")}
                                text="MIKAT"
                            />
                            <DepartmentLink href={route("pr")} text="PR" />
                            <DepartmentLink
                                href={route("medkref")}
                                text="MEDKREF"
                            />
                            <DepartmentLink href={route("psdm")} text="PSDM" />
                        </ul>
                    </div>

                    {/* KOLOM 4: KONTAK */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-pink-500 rounded-full"></span>
                            Hubungi Kami
                        </h4>
                        <ul className="space-y-5 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                <a
                                    href="https://maps.app.goo.gl/QocAcHBcMGziRaBh8"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-white transition-colors leading-relaxed"
                                >
                                    Gedung D, Universitas Dian Nuswantoro.
                                    <br />
                                    Jl. Nakula I No. 5-11, Semarang.
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                                <a
                                    href="mailto:bemfik@dinus.ac.id"
                                    className="hover:text-white transition-colors"
                                >
                                    bemfikudinus1@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>+6282-0063-25524(BEMO)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* --- FOOTER BOTTOM --- */}
                <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <p>© 2025 BEM FIK UDINUS.</p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-gray-300">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                Terms of Service
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1">
                            Made with
                            <Heart
                                size={12}
                                className="text-red-500 fill-red-500 animate-pulse"
                            />
                            by
                            <span className="text-gray-300 font-medium ml-1">
                                P3 BEM FIK
                            </span>
                        </div>

                        {/* --- ADMIN LOGIN / DASHBOARD BUTTON --- */}
                        {auth?.user ? (
                            <Link
                                href={route("dashboard")} // Menggunakan route dashboard
                                className="text-emerald-500 hover:text-emerald-400 flex items-center gap-1 font-bold bg-emerald-500/10 px-3 py-1.5 rounded border border-emerald-500/20 transition-all hover:bg-emerald-500/20"
                            >
                                <LayoutDashboard size={14} /> Dashboard
                            </Link>
                        ) : (
                            <Link
                                href={route("login")} // Menggunakan route login
                                className="text-gray-600 hover:text-blue-500 transition-colors flex items-center gap-1 hover:bg-white/5 px-2 py-1 rounded"
                                title="Admin Login"
                            >
                                <Lock size={14} /> Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* --- BACK TO TOP --- */}
            <button
                onClick={scrollToTop}
                className="absolute bottom-10 right-6 md:right-12 w-10 h-10 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:-translate-y-1 transition-all duration-300 z-20 group"
                title="Kembali ke atas"
            >
                <ArrowUp size={20} className="group-hover:animate-bounce" />
            </button>
        </footer>
    );
}

// Komponen Helper untuk Link Biasa
function FooterLink({ href, text }) {
    return (
        <li>
            <Link
                href={href}
                className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300 inline-block"
            >
                {text}
            </Link>
        </li>
    );
}

// Komponen Helper untuk Link Departemen (Agar rapi)
function DepartmentLink({ href, text }) {
    return (
        <li>
            <Link
                href={href}
                className="hover:text-blue-400 hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1"
            >
                <span className="text-blue-500/50">•</span> {text}
            </Link>
        </li>
    );
}

function SocialButton({ icon, href }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
        >
            {icon}
        </a>
    );
}
