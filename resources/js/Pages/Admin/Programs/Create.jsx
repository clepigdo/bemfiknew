import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { ArrowLeft, Save, Upload, Calendar } from "lucide-react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function ProgramCreate() {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        description: "",
        date: "",
        status: "belum",
        image: null,
    });

    const [preview, setPreview] = useState(null);

    const handleImage = (e) => {
        const file = e.target.files[0];
        setData("image", file);
        setPreview(URL.createObjectURL(file));
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("programs.store"));
    };

    return (
        <AdminLayout title="Kelola Program Kerja">
            <div className="min-h-screen bg-slate-900 text-white p-6 md:p-10 font-sans">
                <Head title="Tambah Proker" />

                <div className="max-w-3xl mx-auto">
                    <Link
                        href={route("programs.index")}
                        className="text-slate-400 hover:text-white flex items-center gap-2 mb-6 text-sm font-bold"
                    >
                        <ArrowLeft size={16} /> Kembali
                    </Link>

                    <div className="bg-slate-800 rounded-3xl border border-white/5 p-8 shadow-2xl">
                        <h1 className="text-2xl font-black mb-8">
                            Buat Program Kerja Baru
                        </h1>

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
                                    placeholder="Contoh: Latihan Dasar Kepemimpinan"
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
                                        setData("description", e.target.value)
                                    }
                                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-colors"
                                    placeholder="Jelaskan tujuan kegiatan ini..."
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
                                                setData("date", e.target.value)
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
                                            setData("status", e.target.value)
                                        }
                                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-colors appearance-none"
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
                                <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center hover:border-blue-500 transition-colors relative">
                                    {preview ? (
                                        <img
                                            src={preview}
                                            alt="Preview"
                                            className="h-48 mx-auto rounded-lg object-cover"
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center gap-2 text-slate-500">
                                            <Upload size={32} />
                                            <p className="text-sm">
                                                Klik untuk upload gambar
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
                                {errors.image && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.image}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all active:scale-95 flex justify-center items-center gap-2"
                                >
                                    {processing ? (
                                        "Menyimpan..."
                                    ) : (
                                        <>
                                            <Save size={20} /> Simpan Program
                                            Kerja
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
