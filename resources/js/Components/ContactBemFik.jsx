import React, { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Send,
    MessageCircle,
    Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactBemFik() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Pesan terkirim! (Simulasi)");
    };

    // Varians untuk animasi muncul satu-persatu
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans relative overflow-hidden">
            {/* Background Animated Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none"></div>

            {/* Main Container Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative bg-white w-full max-w-6xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col lg:flex-row z-10"
            >
                {/* BAGIAN KIRI: FORMULIR */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="w-full lg:w-3/5 p-8 lg:p-12"
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4"
                    >
                        <Sparkles size={14} /> Get in Touch
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl font-black text-gray-800 mb-2 tracking-tight"
                    >
                        Hubungi Kami
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-500 mb-10 text-lg"
                    >
                        Punya pertanyaan atau ide kolaborasi? Kirimkan pesan
                        kepada kami.
                    </motion.p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div variants={itemVariants}>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Nama Lengkap
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.01 }}
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Nama Anda.."
                                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300"
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Alamat Email
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.01 }}
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@mail.com"
                                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300"
                                />
                            </motion.div>
                        </div>

                        <motion.div variants={itemVariants}>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Subjek
                            </label>
                            <motion.input
                                whileFocus={{ scale: 1.01 }}
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Judul pesan.."
                                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300"
                            />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Pesan
                            </label>
                            <motion.textarea
                                whileFocus={{ scale: 1.01 }}
                                rows="4"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tulis pesan Anda disini.."
                                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 resize-none"
                            ></motion.textarea>
                        </motion.div>

                        <motion.button
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.03,
                                boxShadow:
                                    "0 10px 20px -10px rgba(37, 99, 235, 0.5)",
                            }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-10 rounded-xl shadow-lg transition duration-300 w-full md:w-auto flex items-center justify-center gap-3 group"
                        >
                            <Send
                                size={20}
                                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                            />
                            Kirim Pesan
                        </motion.button>
                    </form>
                </motion.div>

                {/* BAGIAN KANAN: INFORMASI */}
                <div className="w-full lg:w-2/5 bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 text-white p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
                    {/* Animated Background Circles */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-blue-400 blur-3xl"
                    ></motion.div>
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.05, 0.1, 0.05],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            delay: 1,
                        }}
                        className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-purple-500 blur-3xl"
                    ></motion.div>

                    <div className="relative z-10">
                        <motion.h3
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="text-3xl font-black mb-6"
                        >
                            BEM FIK UDINUS
                        </motion.h3>
                        <motion.p
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-blue-100/80 leading-relaxed mb-10 text-lg italic"
                        >
                            "Hadir sebagai wadah bagi mahasiswa untuk
                            berinovasi. Bersama, kita wujudkan aksi nyata yang
                            berdampak."
                        </motion.p>

                        <div className="space-y-8">
                            {[
                                {
                                    icon: Phone,
                                    label: "Phone",
                                    val: "+6282-0063-25524",
                                },
                                {
                                    icon: Mail,
                                    label: "Email",
                                    val: "bemfikudinus1@gmail.com",
                                },
                                {
                                    icon: MessageCircle,
                                    label: "Whatsapp",
                                    val: "+6282-0063-25524",
                                },
                                {
                                    icon: MapPin,
                                    label: "Office",
                                    val: "Udinus, Gedung D1",
                                },
                            ].map((info, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ x: 30, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 + idx * 0.1 }}
                                    className="flex items-center gap-5 group cursor-pointer"
                                >
                                    <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/10 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
                                        <info.icon
                                            size={22}
                                            className="text-blue-300 group-hover:text-white"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">
                                            {info.label}
                                        </p>
                                        <p className="font-semibold text-white group-hover:text-blue-200 transition-colors">
                                            {info.val}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Maps with Hover Effect */}
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="relative z-10 mt-12 group"
                    >
                        <div className="absolute inset-0 bg-blue-500/20 blur-xl group-hover:bg-blue-500/40 transition-all"></div>
                        <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 h-44 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                            <iframe
                                title="Map Udinus"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2260334547443!2d110.40683457591244!3d-6.982635968378824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4bc6300001%3A0x6a0a09e08170f39!2sUniversitas%20Dian%20Nuswantoro!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                style={{
                                    border: 0,
                                    filter: "grayscale(1) contrast(1.2) invert(0.9)",
                                }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
