import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { ArrowLeft, Save, Upload, Calendar } from "lucide-react";
import Navbar from "@/Components/Navbar"; // <--- 1. Import Navbar
import Footer from "@/Components/Footer"; // <--- 2. Import Footer
import AdminLayout from "@/Layouts/AdminLayout";

export default function ProgramEdit({ program }) {
    // 1. Inisialisasi form dengan data lama (program.*)
    const { data, setData, post, processing, errors } = useForm({
        _method: "PUT", // Trik agar Laravel mengenali ini sebagai update data + file
        title: program.title || "",
        description: program.description || "",
        date: program.date || "",
        status: program.status || "belum",
        image: null, // Kita set null, kalau user tidak upload berarti gambar tidak berubah
    });

    // Preview gambar: Jika ada gambar baru (preview lokal), pakai itu. Jika tidak, pakai gambar lama dari DB.
    const [preview, setPreview] = useState(
        program.image ? `/storage/${program.image}` : null,
    );

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData("image", file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const submit = (e) => {
        e.preventDefault();
        // Kita pakai post() tapi mengirim _method: PUT agar bisa handle file upload
        post(route("programs.update", program.id));
    };

    return (
        <AdminLayout title="Kelola Program Kerja">
            <div className="min-h-screen bg-slate-900 text-white font-sans">
                <Head title="Edit Program Kerja" />

                {/* --- 4. MAIN CONTENT (Padding Top 32) --- */}
                <main className="pt-32 pb-20 px-6 md:px-10">
                    <div className="max-w-3xl mx-auto">
                        {/* Tombol Kembali */}
                        <Link
                            href={route("programs.index")}
                            className="text-slate-400 hover:text-white flex items-center gap-2 mb-6 text-sm font-bold transition-colors"
                        >
                            <ArrowLeft size={16} /> Kembali ke Daftar
                        </Link>

                        {/* Card Form */}
                        <div className="bg-slate-800 rounded-3xl border border-white/5 p-8 shadow-2xl">
                            <div className="flex items-center justify-between mb-8">
                                <h1 className="text-2xl font-black">
                                    Edit Program Kerja
                                </h1>
                                <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">
                                    ID: {program.id}
                                </span>
                            </div>

                            <form onSubmit={submit} className="space-y-6">
                                {/* Judul */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase mb-2">
                                        Nama Program
                                    </label>
                                    <input
                                        type="text"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-colors"
                                    />
                                    {errors.title && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.title}
                                        </p>
                                    )}
                                </div>

                                {/* Deskripsi */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase mb-2">
                                        Deskripsi Singkat
                                    </label>
                                    <textarea
                                        rows="3"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value,
                                            )
                                        }
                                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-colors"
                                    ></textarea>
                                    {errors.description && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.description}
                                        </p>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Tanggal */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 uppercase mb-2">
                                            Tanggal Pelaksanaan
                                        </label>
                                        <div className="relative">
                                            <Calendar
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                                                size={18}
                                            />
                                            <input
                                                type="date"
                                                value={data.date}
                                                onChange={(e) =>
                                                    setData(
                                                        "date",
                                                        e.target.value,
                                                    )
                                                }
                                                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-3 focus:border-blue-500 outline-none transition-colors [color-scheme:dark]"
                                            />
                                        </div>
                                        {errors.date && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.date}
                                            </p>
                                        )}
                                    </div>

                                    {/* Status */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 uppercase mb-2">
                                            Status Kegiatan
                                        </label>
                                        <select
                                            value={data.status}
                                            onChange={(e) =>
                                                setData(
                                                    "status",
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-colors appearance-none cursor-pointer"
                                        >
                                            <option value="belum">
                                                Belum Terlaksana
                                            </option>
                                            <option value="berjalan">
                                                Sedang Berjalan
                                            </option>
                                            <option value="terlaksana">
                                                Sudah Terlaksana
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                {/* Upload Gambar */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase mb-2">
                                        Poster / Dokumentasi
                                    </label>
                                    <div
                                        className={`border-2 border-dashed rounded-xl p-4 text-center transition-colors relative group overflow-hidden ${
                                            preview
                                                ? "border-blue-500/50 bg-blue-500/5"
                                                : "border-slate-700 hover:border-blue-500"
                                        }`}
                                    >
                                        {preview ? (
                                            <div className="relative">
                                                <img
                                                    src={preview}
                                                    alt="Preview"
                                                    className="h-64 mx-auto rounded-lg object-contain shadow-lg"
                                                />
                                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                                                    <p className="text-white font-bold flex items-center gap-2">
                                                        <Upload size={20} />{" "}
                                                        Ganti Gambar
                                                    </p>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="py-10 flex flex-col items-center gap-2 text-slate-500">
                                                <Upload size={32} />
                                                <p className="text-sm">
                                                    Klik untuk upload gambar
                                                    baru
                                                </p>
                                            </div>
                                        )}

                                        <input
                                            type="file"
                                            onChange={handleImage}
                                            accept="image/*"
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        />
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2">
                                        *Biarkan kosong jika tidak ingin
                                        mengubah gambar.
                                    </p>
                                    {errors.image && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.image}
                                        </p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4 flex gap-4">
                                    <Link
                                        href={route("programs.index")}
                                        className="px-6 py-4 rounded-xl border border-slate-600 text-slate-400 font-bold hover:bg-slate-800 hover:text-white transition-colors"
                                    >
                                        Batal
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all active:scale-95 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {processing ? (
                                            "Menyimpan Perubahan..."
                                        ) : (
                                            <>
                                                <Save size={20} /> Simpan
                                                Perubahan
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>

                {/* --- 5. FOOTER --- */}
                <Footer />
            </div>
        </AdminLayout>
    );
}
