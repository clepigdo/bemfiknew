import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { ArrowLeft, Save, Image as ImageIcon, X } from "lucide-react";
import { router } from "@inertiajs/react";
import Swal from "sweetalert2";
import Cropper from "react-easy-crop";
import AdminLayout from "@/Layouts/AdminLayout";

export default function ArticleEdit({ article, categories }) {
    const [imagePreview, setImagePreview] = useState(
        article.image ? `/storage/${article.image}` : null,
    );

    // Isi form dengan data yang sudah ada (article.*)
    const { data, setData, post, processing, errors } = useForm({
        title: article.title || "",
        category_id: article.category_id || "",
        published_at: article.published_at
            ? article.published_at.slice(0, 16)
            : "",
        image: null,
        blocks:
            typeof article.content === "string"
                ? JSON.parse(article.content)
                : article.content || [{ type: "text", value: "" }],
    });
    const [imageToCrop, setImageToCrop] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImageToCrop(reader.result); // Munculkan modal crop
            };
        }
    };

    const generateCroppedImage = async () => {
        try {
            const { file, url } = await getCroppedImg(
                imageToCrop,
                croppedAreaPixels,
            );
            setData("image", file); // Simpan file hasil crop ke useForm
            setImagePreview(url); // Tampilkan preview di sidebar
            setImageToCrop(null); // Tutup modal
        } catch (e) {
            console.error("Gagal memotong gambar:", e);
        }
    };

    const addBlock = (type) => {
        const newBlock =
            type === "text"
                ? { type: "text", value: "" }
                : { type: "image", value: null, preview: null };
        setData("blocks", [...data.blocks, newBlock]);
    };
    const removeBlock = (index, e) => {
        if (e) e.stopPropagation(); // Mencegah klik tembus ke bawah
        const newBlocks = data.blocks.filter((_, i) => i !== index);
        setData("blocks", newBlocks);
    };

    const submit = (e) => {
        e.preventDefault();
        router.post(
            route("articles.update", article.id),
            {
                ...data,
                _method: "patch",
            },
            {
                forceFormData: true,
                onSuccess: () => {
                    Swal.fire({
                        title: "Berhasil!",
                        text: "Artikel kamu sudah diperbarui dengan sukses.",
                        icon: "success",
                        background: "#131926",
                        color: "#ffffff",
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true,
                        iconColor: "#3b82f6",
                    });
                },
                onError: () => {
                    Swal.fire({
                        title: "Waduh!",
                        text: "Terjadi kesalahan saat menyimpan data.",
                        icon: "error",
                        background: "#131926",
                        color: "#ffffff",
                        confirmButtonColor: "#ef4444",
                    });
                },
            },
        );
    };

    const updateBlock = (index, val) => {
        const newBlocks = [...data.blocks];
        newBlocks[index].value = val;
        setData("blocks", newBlocks);
    };

    const handleUpdateImageBlock = (index, file) => {
        if (file) {
            const newBlocks = [...data.blocks];
            newBlocks[index].value = file;
            newBlocks[index].preview = URL.createObjectURL(file);
            setData("blocks", newBlocks);
        }
    };

    return (
        <AdminLayout title="Kelola Artikel">
            <div className="min-h-screen bg-[#0B0F19] text-white font-sans">
                <Head title="Edit Artikel" />
                <Navbar />

                <main className="pt-32 pb-20 container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="flex items-center gap-4 mb-10">
                        <Link href={route("articles.index")} className="...">
                            {" "}
                            <ArrowLeft />{" "}
                        </Link>
                        <div>
                            <h1 className="text-4xl font-black text-white">
                                Edit Artikel
                            </h1>
                            <p className="text-slate-400">
                                Sesuaikan konten berita BEM FIK dengan lebih
                                leluasa.
                            </p>
                        </div>
                    </div>

                    <form
                        onSubmit={submit}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                    >
                        {/* --- AREA KIRI: KONTEN UTAMA --- */}
                        <div className="lg:col-span-8 space-y-6">
                            <div className="p-8 rounded-3xl bg-[#131926] border border-white/5 shadow-2xl">
                                <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                                    Judul Artikel
                                </label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    className="w-full bg-[#0B0F19] border-none rounded-2xl px-6 py-4 text-2xl font-bold text-white focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-700"
                                />
                            </div>

                            {/* AREA MODULAR BLOCKS */}
                            <div className="space-y-4">
                                <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest px-2">
                                    Isi Konten Modular
                                </label>
                                {data.blocks.map((block, index) => (
                                    <div
                                        key={index}
                                        className="group relative bg-[#131926] rounded-3xl p-2 border border-white/5 hover:border-indigo-500/30 transition-all"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => removeBlock(index)}
                                            className="absolute -right-2 -top-2 z-10 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100"
                                        >
                                            <X size={16} />
                                        </button>

                                        {block.type === "text" ? (
                                            <div className="bg-transparent rounded-2xl overflow-hidden">
                                                <ReactQuill
                                                    theme="snow"
                                                    value={block.value}
                                                    onChange={(val) =>
                                                        updateBlock(index, val)
                                                    }
                                                    className="text-white min-h-[300px]" // Tambah tinggi minimal
                                                />
                                            </div>
                                        ) : (
                                            <div className="p-8 flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-2xl bg-[#0B0F19]/50">
                                                {/* Preview Gambar */}
                                                {block.value && (
                                                    <img
                                                        src={
                                                            typeof block.value ===
                                                            "string"
                                                                ? block.value
                                                                : block.preview
                                                        }
                                                        className="max-h-80 rounded-xl mb-4 shadow-2xl"
                                                    />
                                                )}
                                                <input
                                                    type="file"
                                                    onChange={(e) =>
                                                        handleUpdateImageBlock(
                                                            index,
                                                            e.target.files[0],
                                                        )
                                                    }
                                                    className="text-sm text-slate-500"
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Tombol Tambah Blok yang Lebih Besar */}
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => addBlock("text")}
                                    className="py-4 border-2 border-dashed border-white/10 rounded-2xl text-slate-400 hover:border-indigo-500 hover:text-white transition-all font-bold"
                                >
                                    + Teks
                                </button>
                                <button
                                    type="button"
                                    onClick={() => addBlock("image")}
                                    className="py-4 border-2 border-dashed border-white/10 rounded-2xl text-slate-400 hover:border-indigo-500 hover:text-white transition-all font-bold"
                                >
                                    + Gambar
                                </button>
                            </div>
                        </div>

                        {/* --- AREA KANAN: PENGATURAN --- */}
                        <div className="lg:col-span-4 space-y-6 sticky top-32">
                            <div className="p-6 rounded-3xl bg-[#131926] border border-white/5 space-y-6">
                                <h3 className="font-bold text-lg text-white border-b border-white/5 pb-4">
                                    Terbitkan
                                </h3>

                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">
                                        Kategori
                                    </label>
                                    <select
                                        value={data.category_id}
                                        onChange={(e) =>
                                            setData(
                                                "category_id",
                                                e.target.value,
                                            )
                                        }
                                        className="w-full bg-[#0B0F19] border-white/10 rounded-xl text-white"
                                    >
                                        {categories.map((cat) => (
                                            <option key={cat.id} value={cat.id}>
                                                {cat.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">
                                        Tanggal Publikasi
                                    </label>
                                    <input
                                        type="datetime-local"
                                        value={data.published_at}
                                        onChange={(e) =>
                                            setData(
                                                "published_at",
                                                e.target.value,
                                            )
                                        }
                                        className="w-full bg-[#0B0F19] border-white/10 rounded-xl text-white"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black shadow-xl shadow-indigo-500/20 transition-all flex items-center justify-center gap-2"
                                >
                                    <Save size={20} />{" "}
                                    {processing
                                        ? "Menyimpan..."
                                        : "Simpan Perubahan"}
                                </button>
                            </div>
                            {/* --- AREA COVER UTAMA DI SIDEBAR --- */}
                            <div className="p-6 rounded-3xl bg-[#131926] border border-white/5">
                                <label className="text-xs font-bold text-slate-500 uppercase mb-4 block">
                                    Cover Utama
                                </label>
                                <div className="relative aspect-video rounded-2xl bg-[#0B0F19] overflow-hidden border border-white/10 group cursor-pointer">
                                    {/* 1. Tampilkan Gambar Preview */}
                                    <img
                                        src={
                                            imagePreview ||
                                            `/storage/${article.image}`
                                        }
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        alt="Cover"
                                    />

                                    {/* 2. Overlay Teks "Ganti Cover" */}
                                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                        <ImageIcon
                                            className="mb-2 text-indigo-400"
                                            size={24}
                                        />
                                        <span className="text-xs font-bold text-white">
                                            Ganti Cover
                                        </span>
                                    </div>

                                    {/* 3. INPUT FILE (HARUS DI PALING ATAS) */}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                                        title="Klik untuk mengganti cover"
                                    />
                                </div>

                                {errors.image && (
                                    <p className="text-red-400 text-[10px] mt-2 font-bold uppercase">
                                        {errors.image}
                                    </p>
                                )}
                            </div>
                        </div>
                    </form>
                    {/* MODAL CROP */}
                    {imageToCrop && (
                        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-sm">
                            <div className="relative w-full max-w-3xl h-[450px] bg-[#131926] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                                <Cropper
                                    image={imageToCrop}
                                    crop={crop}
                                    zoom={zoom}
                                    aspect={16 / 9}
                                    onCropChange={setCrop}
                                    onZoomChange={setZoom}
                                    onCropComplete={(_, pixels) =>
                                        setCroppedAreaPixels(pixels)
                                    }
                                />
                            </div>

                            <div className="mt-8 flex flex-col items-center gap-6 w-full max-w-md">
                                <input
                                    type="range"
                                    min={1}
                                    max={3}
                                    step={0.1}
                                    value={zoom}
                                    onChange={(e) => setZoom(e.target.value)}
                                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                                />
                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setImageToCrop(null)}
                                        className="px-8 py-3 rounded-2xl bg-white/5 text-slate-300 font-bold border border-white/10"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        type="button"
                                        onClick={generateCroppedImage}
                                        className="px-8 py-3 rounded-2xl bg-indigo-600 text-white font-bold shadow-xl shadow-indigo-500/20"
                                    >
                                        Potong & Simpan
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
                <Footer />
            </div>
        </AdminLayout>
    );
}
const getCroppedImg = (imageSrc, pixelCrop) => {
    const canvas = document.createElement("canvas");
    const image = new Image();
    image.src = imageSrc;

    return new Promise((resolve) => {
        image.onload = () => {
            const ctx = canvas.getContext("2d");
            canvas.width = pixelCrop.width;
            canvas.height = pixelCrop.height;
            ctx.drawImage(
                image,
                pixelCrop.x,
                pixelCrop.y,
                pixelCrop.width,
                pixelCrop.height,
                0,
                0,
                pixelCrop.width,
                pixelCrop.height,
            );
            canvas.toBlob((blob) => {
                const file = new File([blob], "cover_cropped.jpg", {
                    type: "image/jpeg",
                });
                resolve({ file, url: URL.createObjectURL(blob) });
            }, "image/jpeg");
        };
    });
};
