import React from "react";
import { Link } from "@inertiajs/react";
import { 
    Instagram, 
    Youtube, 
    Twitter, 
    Linkedin, 
    Mail, 
    MapPin, 
    Phone, 
    Heart 
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-[#020510] text-white pt-20 pb-10 overflow-hidden border-t border-white/5">
            {/* --- DECORATIVE GLOW --- */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* KOLOM 1: BRANDING */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <img 
                                src="/images/logo.png" 
                                alt="Logo BEM FIK" 
                                className="h-12 w-auto"
                            />
                            <div className="flex flex-col">
                                <span className="font-bold text-xl tracking-wider text-white">BEM FIK</span>
                                <span className="text-xs text-blue-400 font-medium tracking-widest">UDINUS</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Wadah aspirasi dan kreasi mahasiswa Fakultas Ilmu Komputer Universitas Dian Nuswantoro. Bergerak progresif untuk masa depan yang inovatif.
                        </p>
                        <div className="flex gap-4">
                            <SocialButton icon={<Instagram size={18} />} href="#" />
                            <SocialButton icon={<Youtube size={18} />} href="#" />
                            <SocialButton icon={<Linkedin size={18} />} href="#" />
                            <SocialButton icon={<Twitter size={18} />} href="#" />
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
                            <FooterLink href="/tentang" text="Tentang Kami" />
                            <FooterLink href="/struktur" text="Struktur Organisasi" />
                            <FooterLink href="/proker" text="Program Kerja" />
                            <FooterLink href="/berita" text="Berita & Artikel" />
                        </ul>
                    </div>

                    {/* KOLOM 3: DEPARTEMEN */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
                            Departemen
                        </h4>
                        <ul className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm text-gray-400">
                            <li className="hover:text-blue-400 transition-colors cursor-pointer">• P3</li>
                            <li className="hover:text-blue-400 transition-colors cursor-pointer">• EKOKRAF</li>
                            <li className="hover:text-blue-400 transition-colors cursor-pointer">• MIKAT</li>
                            <li className="hover:text-blue-400 transition-colors cursor-pointer">• PR</li>
                            <li className="hover:text-blue-400 transition-colors cursor-pointer">• MEDKREF</li>
                            <li className="hover:text-blue-400 transition-colors cursor-pointer">• PSDM</li>
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
                                <span>
                                    Gedung D, Universitas Dian Nuswantoro.<br/>
                                    Jl. Nakula I No. 5-11, Semarang.
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                                <a href="mailto:bemfik@dinus.ac.id" className="hover:text-white transition-colors">
                                    bemfik@dinus.ac.id
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>+62 812-3456-7890</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* --- COPYRIGHT --- */}
                <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© 2025 BEM FIK UDINUS. All rights reserved.</p>
                    <div className="flex items-center gap-1">
                        Made with <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" /> by 
                        <span className="text-gray-300 font-medium">P3 BEM FIK</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Komponen Kecil untuk Link agar kodenya rapi
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

// Komponen Tombol Sosmed
function SocialButton({ icon, href }) {
    return (
        <a 
            href={href} 
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
        >
            {icon}
        </a>
    );
}