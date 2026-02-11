import React, { useState } from "react";
import {
    Share2,
    Link as LinkIcon,
    X,
    Check,
    MessageCircle,
    Facebook,
    Twitter,
} from "lucide-react";

export default function ShareButton({ title, url }) {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    // Encode URL agar aman saat dikirim
    const shareUrl = url || window.location.href;
    const shareText = `Baca artikel menarik ini: "${title}"`;

    // 1. Fungsi Utama: Cek apakah Browser mendukung Native Share
    const handleShare = async () => {
        if (navigator.share) {
            try {
                // Jika di HP, panggil menu bawaan HP
                await navigator.share({
                    title: title,
                    text: shareText,
                    url: shareUrl,
                });
            } catch (error) {
                console.log("Error sharing:", error);
            }
        } else {
            // Jika di Laptop/Browser yang gak dukung, buka menu manual
            setIsOpen(!isOpen);
        }
    };

    // 2. Fungsi Copy Link Manual
    const handleCopy = () => {
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset tulisan "Copied" setelah 2 detik
    };

    return (
        <div className="relative inline-block text-left">
            {/* --- TOMBOL UTAMA --- */}
            <button
                onClick={handleShare}
                className="group flex items-center gap-3 bg-white text-slate-900 px-8 py-3.5 rounded-2xl font-bold text-sm hover:bg-slate-200 transition-all shadow-lg hover:scale-105 active:scale-95"
            >
                <Share2 size={18} className="text-slate-900" />
                BAGIKAN CERITA
            </button>

            {/* --- DROPDOWN MENU (Hanya muncul di Laptop jika diklik) --- */}
            {isOpen && (
                <>
                    {/* Layar transparan buat nutup menu kalau klik di luar */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    ></div>

                    {/* Kotak Menu */}
                    <div className="absolute bottom-full left-0 mb-3 w-56 bg-[#131926] border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-bottom-left">
                        <div className="p-2 space-y-1">
                            {/* WhatsApp */}
                            <a
                                href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-slate-300 hover:text-green-400 transition-colors"
                            >
                                <MessageCircle size={18} />
                                <span className="text-sm font-medium">
                                    WhatsApp
                                </span>
                            </a>

                            {/* Twitter / X */}
                            <a
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-slate-300 hover:text-blue-400 transition-colors"
                            >
                                <Twitter size={18} />
                                <span className="text-sm font-medium">
                                    Twitter / X
                                </span>
                            </a>

                            {/* Facebook */}
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-slate-300 hover:text-blue-600 transition-colors"
                            >
                                <Facebook size={18} />
                                <span className="text-sm font-medium">
                                    Facebook
                                </span>
                            </a>

                            {/* Divider */}
                            <div className="h-px bg-white/10 my-1 mx-2"></div>

                            {/* Copy Link */}
                            <button
                                onClick={handleCopy}
                                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                            >
                                {copied ? (
                                    <Check
                                        size={18}
                                        className="text-emerald-500"
                                    />
                                ) : (
                                    <LinkIcon size={18} />
                                )}
                                <span
                                    className={`text-sm font-medium ${copied ? "text-emerald-500" : ""}`}
                                >
                                    {copied ? "Tersalin!" : "Salin Link"}
                                </span>
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
