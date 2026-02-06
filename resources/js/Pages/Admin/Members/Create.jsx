import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { ArrowLeft, Upload, Save, X, User } from "lucide-react";
import AdminLayout from '@/Layouts/AdminLayout';

export default function MemberCreate() {
    // Setup form handling dari Inertia
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        position: "",
        division: "",
        status: "aktif", // Default status
        photo: null,
    });

    // State lokal untuk preview gambar
    const [previewUrl, setPreviewUrl] = useState(null);

    // Handle saat file gambar dipilih
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData("photo", file);
            // Buat URL sementara untuk preview
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };

    // Handle submit form
    const submit = (e) => {
        e.preventDefault();
        post(route("members.store"));
    };

    return (
        <AdminLayout title="Kelola Members">
            <div className="min-h-screen bg-slate-900 text-white p-6 md:p-10">
                <Head title="Tambah Pengurus" />

                {/* --- HEADER --- */}
                <div className="max-w-4xl mx-auto mb-8">
                    <Link
                        href={route("members.index")}
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-4 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Kembali ke Daftar
                    </Link>
                    <h1 className="text-3xl font-black tracking-tight">
                        Tambah Pengurus Baru
                    </h1>
                    <p className="text-slate-400">
                        Lengkapi formulir di bawah ini untuk menambahkan anggota
                        BEM.
                    </p>
                </div>

                {/* --- FORM CARD --- */}
                <div className="max-w-4xl mx-auto bg-slate-800 rounded-3xl border border-slate-700/50 shadow-xl overflow-hidden">
                    <form onSubmit={submit} className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* --- KOLOM KIRI: UPLOAD FOTO --- */}
                            <div className="md:col-span-1">
                                <label className="block text-sm font-bold text-slate-300 mb-3">
                                    Foto Profil
                                </label>

                                <div className="relative group">
                                    {/* Area Preview / Upload */}
                                    <div
                                        className={`aspect-[3/4] rounded-2xl border-2 border-dashed flex flex-col items-center justify-center relative overflow-hidden transition-all ${errors.photo ? "border-red-500 bg-red-500/10" : "border-slate-600 bg-slate-900/50 hover:border-blue-500 hover:bg-slate-900"}`}
                                    >
                                        {previewUrl ? (
                                            <>
                                                <img
                                                    src={previewUrl}
                                                    alt="Preview"
                                                    className="w-full h-full object-cover"
                                                />
                                                {/* Tombol Hapus Foto */}
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setData("photo", null);
                                                        setPreviewUrl(null);
                                                    }}
                                                    className="absolute top-2 right-2 p-1.5 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 transition-colors"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </>
                                        ) : (
                                            <div
                                                className="text-center p-6 cursor-pointer"
                                                onClick={() =>
                                                    document
                                                        .getElementById(
                                                            "fileInput",
                                                        )
                                                        .click()
                                                }
                                            >
                                                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-3 text-blue-500 group-hover:scale-110 transition-transform">
                                                    <Upload className="w-6 h-6" />
                                                </div>
                                                <p className="text-sm font-medium text-slate-300">
                                                    Klik untuk upload
                                                </p>
                                                <p className="text-xs text-slate-500 mt-1">
                                                    JPG, PNG max 2MB
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Input File Tersembunyi */}
                                    <input
                                        id="fileInput"
                                        type="file"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                    {errors.photo && (
                                        <p className="text-red-500 text-xs mt-2">
                                            {errors.photo}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* --- KOLOM KANAN: BIODATA --- */}
                            <div className="md:col-span-2 space-y-6">
                                {/* Input Nama */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2">
                                        Nama Lengkap
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                        <input
                                            type="text"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            className={`w-full pl-10 pr-4 py-3 bg-slate-900 border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.name ? "border-red-500" : "border-slate-700"}`}
                                            placeholder="Contoh: Igdo Ragil Manuel"
                                        />
                                    </div>
                                    {errors.name && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                {/* Grid Jabatan & Divisi */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-300 mb-2">
                                            Jabatan
                                        </label>
                                        <input
                                            type="text"
                                            value={data.position}
                                            onChange={(e) =>
                                                setData(
                                                    "position",
                                                    e.target.value,
                                                )
                                            }
                                            className={`w-full px-4 py-3 bg-slate-900 border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.position ? "border-red-500" : "border-slate-700"}`}
                                            placeholder="Contoh: Staff Muda"
                                        />
                                        {errors.position && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.position}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-slate-300 mb-2">
                                            Divisi
                                        </label>
                                        <select
                                            value={data.division}
                                            onChange={(e) =>
                                                setData(
                                                    "division",
                                                    e.target.value,
                                                )
                                            }
                                            className={`w-full px-4 py-3 bg-slate-900 border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer ${errors.division ? "border-red-500" : "border-slate-700"}`}
                                        >
                                            <option value="" disabled>
                                                Pilih Divisi...
                                            </option>
                                            <option value="BPH">
                                                BPH (Badan Pengurus Harian)
                                            </option>
                                            <option value="Kominfo">
                                                Kominfo
                                            </option>
                                            <option value="PSDM">PSDM</option>
                                            <option value="Medkref">
                                                Medkref
                                            </option>
                                            <option value="Mikat">
                                                Minat Bakat
                                            </option>
                                            <option value="Ekokraf">
                                                Ekokraf
                                            </option>
                                            <option value="Lainnya">
                                                Lainnya
                                            </option>
                                        </select>
                                        {errors.division && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.division}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Status */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2">
                                        Status Keaktifan
                                    </label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="status"
                                                value="aktif"
                                                checked={
                                                    data.status === "aktif"
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "status",
                                                        e.target.value,
                                                    )
                                                }
                                                className="w-5 h-5 text-blue-600 focus:ring-blue-500 bg-slate-900 border-slate-600"
                                            />
                                            <span className="text-slate-300 group-hover:text-white">
                                                Aktif
                                            </span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="status"
                                                value="nonaktif"
                                                checked={
                                                    data.status === "nonaktif"
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "status",
                                                        e.target.value,
                                                    )
                                                }
                                                className="w-5 h-5 text-blue-600 focus:ring-blue-500 bg-slate-900 border-slate-600"
                                            />
                                            <span className="text-slate-300 group-hover:text-white">
                                                Nonaktif / Alumni
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* --- ACTIONS --- */}
                        <div className="border-t border-slate-700/50 mt-8 pt-6 flex justify-end gap-3">
                            <Link
                                href={route("members.index")}
                                className="px-6 py-3 rounded-xl border border-slate-600 text-slate-300 font-bold hover:bg-slate-700 hover:text-white transition-all"
                            >
                                Batal
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold shadow-lg shadow-blue-600/20 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {processing ? (
                                    "Menyimpan..."
                                ) : (
                                    <>
                                        <Save className="w-5 h-5" />
                                        Simpan Pengurus
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}
