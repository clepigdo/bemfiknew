import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import {
    MapPin,
    MessageCircle,
    Mail,
    ArrowRight,
    CheckCircle2,
    Send,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactBemFik() {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("idle");

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");

        post(route("contact.store"), {
            preserveScroll: true,
            onSuccess: () => {
                setStatus("success");
                const phoneNumber = "62882006325524";
                const textMessage =
                    `Halo Admin BEM FIK! 👋%0A%0A` +
                    `Saya baru saja mengisi form di website.%0A` +
                    `*Nama:* ${data.name}%0A` +
                    `*Email:* ${data.email}%0A` +
                    `*Pesan:* ${data.message}`;
                window.open(
                    `https://wa.me/${phoneNumber}?text=${textMessage}`,
                    "_blank",
                );
                reset(); // Bersihkan form
                setTimeout(() => setStatus("idle"), 3000);
            },
            onError: () => {
                setStatus("idle");
                alert("Gagal mengirim pesan. Periksa inputan Anda.");
            },
        });
    };

    return (
        <section
            className="relative py-20 bg-[#0B0F19] overflow-hidden font-sans"
            id="contact"
        >
            {/* --- BACKGROUND ACCENTS --- */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/4 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/4 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* --- BAGIAN KIRI: HEADING & INFO --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            Let's Connect
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                            Punya Ide Liar? <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Mari Kolaborasi.
                            </span>
                        </h2>

                        <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-md">
                            Jangan ragu untuk menyapa! Entah itu tawaran
                            kerjasama, kritik membangun, atau sekadar diskusi
                            santai seputar teknologi.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <ContactTile
                                icon={<Mail size={20} />}
                                title="Email Kami"
                                value="bemfikudinus1@gmail.com"
                                color="bg-blue-500"
                            />
                            <ContactTile
                                icon={<MessageCircle size={20} />}
                                title="WhatsApp"
                                value="+62 882-0063-25524 (Bemo Admin)"
                                color="bg-green-500"
                            />
                            <ContactTile
                                icon={<MapPin size={20} />}
                                title="Markas Besar"
                                value="Gedung D, UDINUS"
                                color="bg-purple-500"
                            />
                        </div>
                    </motion.div>

                    {/* --- BAGIAN KANAN: FORM --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative p-1 rounded-3xl bg-gradient-to-br from-white/10 to-white/5">
                            <div className="bg-[#0F1523]/80 backdrop-blur-xl rounded-[1.4rem] p-8 md:p-10 border border-white/5 shadow-2xl">
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Perbaikan: Menggunakan 'data.name' dan 'setData' */}
                                        <InputGroup
                                            label="Nama Kamu"
                                            name="name"
                                            placeholder="Siapa nama kerenmu?"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            error={errors.name}
                                        />

                                        <InputGroup
                                            label="Email Kampus/Pribadi"
                                            name="email"
                                            type="email"
                                            placeholder="email@contoh.com"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            error={errors.email}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                            Ceritakan Sesuatu
                                        </label>
                                        <textarea
                                            name="message"
                                            rows="4"
                                            value={data.message}
                                            onChange={(e) =>
                                                setData(
                                                    "message",
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Tulis pesan, ide, atau rahasia..."
                                            className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
                                        ></textarea>
                                        {errors.message && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group
                                            ${
                                                status === "success"
                                                    ? "bg-emerald-500 text-white cursor-default"
                                                    : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40"
                                            }
                                        `}
                                    >
                                        {status === "idle" && (
                                            <>
                                                Kirim Pesan{" "}
                                                <ArrowRight
                                                    size={18}
                                                    className="group-hover:translate-x-1 transition-transform"
                                                />
                                            </>
                                        )}
                                        {status === "sending" && (
                                            <span className="animate-pulse">
                                                Mengirim...
                                            </span>
                                        )}
                                        {status === "success" && (
                                            <>
                                                Terkirim!{" "}
                                                <CheckCircle2 size={18} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// --- SUB-KOMPONEN ---

function ContactTile({ icon, title, value, color }) {
    return (
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group cursor-default">
            <div
                className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
            >
                {icon}
            </div>
            <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase">
                    {title}
                </h4>
                <p className="text-sm font-semibold text-white">{value}</p>
            </div>
        </div>
    );
}

// Saya update InputGroup agar support error message
function InputGroup({
    label,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    error,
}) {
    return (
        <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full px-4 py-3 rounded-xl bg-black/20 border text-white placeholder-slate-600 outline-none transition-all ${error ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-blue-500"}`}
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
}
