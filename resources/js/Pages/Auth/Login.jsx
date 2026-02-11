import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Sparkles, ChevronLeft } from "lucide-react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <div className="min-h-screen flex bg-[#0B0F19] text-white font-sans overflow-hidden selection:bg-indigo-500 selection:text-white">
            <Head title="Log in Administrator" />

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-16 relative z-10"
            >
                <Link
                    href="/"
                    className="absolute top-8 left-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium group"
                >
                    <div className="p-1 rounded-full bg-white/5 group-hover:bg-white/10 border border-white/10">
                        <ChevronLeft size={16} />
                    </div>
                    Kembali ke Beranda
                </Link>

                <div className="max-w-md w-full mx-auto">
                    <div className="mb-10">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                                <Sparkles size={20} />
                            </span>
                            <span className="text-sm font-bold tracking-widest text-indigo-400 uppercase">
                                Admin Portal
                            </span>
                        </div>
                        <h1 className="text-4xl font-black mb-3 leading-tight">
                            Selamat Datang <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                BEM FIK UDINUS
                            </span>
                        </h1>
                        <p className="text-slate-400">
                            Silakan masuk untuk mengelola konten dan aktivitas.
                        </p>
                    </div>

                    {status && (
                        <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-sm font-medium text-green-400 flex items-center gap-2">
                            <Sparkles size={16} /> {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300 ml-1">
                                Email
                            </label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors">
                                    <Mail size={20} />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="w-full bg-[#131926] border border-white/10 text-white rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-slate-600"
                                    autoComplete="username"
                                    placeholder="admin@dinus.ac.id"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                            </div>
                            {errors.email && (
                                <p className="text-sm text-red-400 mt-1 ml-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300 ml-1">
                                Password
                            </label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-purple-400 transition-colors">
                                    <Lock size={20} />
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="w-full bg-[#131926] border border-white/10 text-white rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all placeholder:text-slate-600"
                                    autoComplete="current-password"
                                    placeholder="••••••••"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                            </div>
                            {errors.password && (
                                <p className="text-sm text-red-400 mt-1 ml-1">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                "remember",
                                                e.target.checked,
                                            )
                                        }
                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-white/20 bg-white/5 checked:border-blue-500 checked:bg-blue-500 transition-all"
                                    />
                                    <svg
                                        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 3L4.5 8.5L2 6"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                                    Ingat Saya
                                </span>
                            </label>

                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors hover:underline decoration-blue-500/30 underline-offset-4"
                                >
                                    Lupa Password?
                                </Link>
                            )}
                        </div>

                        <button
                            disabled={processing}
                            className="group relative w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <span className="relative z-10">
                                Masuk Dashboard
                            </span>
                            <ArrowRight
                                className="relative z-10 group-hover:translate-x-1 transition-transform"
                                size={20}
                            />
                        </button>
                    </form>
                </div>
            </motion.div>


            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="hidden lg:block w-1/2 relative p-4"
            >
                <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                    <img
                        src="/images/seruan.webp"
                        alt="BEM FIK Background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/60 to-[#0B0F19]/90 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent"></div>

                    <div className="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-[100px]"></div>

                    <div className="absolute bottom-0 left-0 p-16 w-full">
                        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-bold text-white shadow-lg">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            System Operational
                        </div>
                        <h2 className="text-5xl font-black mb-6 leading-tight text-white drop-shadow-lg">
                            Kelola Organisasi <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                                Lebih Efisien.
                            </span>
                        </h2>
                        <p className="text-lg text-blue-100/80 max-w-md leading-relaxed">
                            Platform terintegrasi untuk manajemen BEM FIK
                            UDINUS. Pantau program kerja, kelola artikel, dan
                            administrasi dalam satu pintu.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
