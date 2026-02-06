import React, { useState } from "react";
import { Head, Link, useForm, router } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { ArrowLeft, Save, Image as ImageIcon, X, Plus } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";
import Cropper from "react-easy-crop";
import AdminLayout from "@/Layouts/AdminLayout";

export default function ArticleCreate({ categories }) {
    // 1. State untuk Preview Cover Utama
    const [imagePreview, setImagePreview] = useState(null);

    // 2. Inisialisasi useForm
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        category_id: categories.length > 0 ? categories[0].id : "",
        published_at: new Date().toISOString().slice(0, 16),
        image: null,
        blocks: [{ type: "text", value: "" }],
    });

    // --- FUNGSI MODULAR ---

    const addBlock = (type) => {
        const newBlock =
            type === "text"
                ? { type: "text", value: "" }
                : { type: "image", value: null, preview: null };
        setData("blocks", [...data.blocks, newBlock]);
    };

    const removeBlock = (index, e) => {
        if (e) e.stopPropagation();
        const newBlocks = data.blocks.filter((_, i) => i !== index);
        setData("blocks", newBlocks);
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
    const [imageToCrop, setImageToCrop] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppingImage, setCroppingImage] = useState(null);

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        console.log(croppedAreaPixels);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Simpan file asli ke useForm untuk dikirim ke Laravel
            setData("image", file);

            // Buat URL sementara untuk preview di layar
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);

            // Opsional: Jika ingin langsung memicu modal crop
            setImageToCrop(previewUrl);
        }
    };

    const generateCroppedImage = async () => {
        try {
            // Memanggil helper getCroppedImg untuk memproses pixel ke file
            const { file, url } = await getCroppedImg(
                imageToCrop,
                croppedAreaPixels,
            );

            // Simpan file hasil potong ke state useForm agar terkirim ke Laravel
            setData("image", file);

            // Tampilkan preview gambar yang sudah dipotong di sidebar
            setImagePreview(url);

            // Tutup modal crop setelah selesai
            setImageToCrop(null);
        } catch (e) {
            console.error("Gagal memotong gambar:", e);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("articles.store"), {
            forceFormData: true,
            onSuccess: () => {
                Swal.fire({
                    title: "Berhasil!",
                    text: "Artikel BEM FIK baru telah diterbitkan.",
                    icon: "success",
                    background: "#131926",
                    color: "#ffffff",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    iconColor: "#3b82f6",
                });
            },
        });
    };

    return (
        <AdminLayout title="Kelola Artikel">
            <div className="min-h-screen bg-[#0B0F19] text-slate-300 font-sans selection:bg-indigo-500 selection:text-white">
                <Head title="Buat Artikel Baru - BEM FIK" />
                

                <main className="pt-32 pb-20 container mx-auto px-4 md:px-8 max-w-7xl">
                    {/* Header Section */}
                    <div className="flex items-center gap-4 mb-10">
                        <Link
                            href={route("articles.index")}
                            className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all border border-white/5"
                        >
                            <ArrowLeft size={20} />
                        </Link>
                        <div>
                            <h1 className="text-4xl font-black text-white">
                                Buat Artikel
                            </h1>
                            <p className="text-slate-400">
                                Tuliskan berita atau event terbaru dari BEM FIK.
                            </p>
                        </div>
                    </div>

                    <form
                        onSubmit={submit}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                    >
                        {/* AREA KIRI: KONTEN (8 Kolom) */}
                        <div className="lg:col-span-8 space-y-6">
                            {/* Input Judul */}
                            <div className="p-8 rounded-3xl bg-[#131926] border border-white/5 shadow-2xl">
                                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
                                    Judul Artikel
                                </label>
                                <input
                                    type="text"
                                    placeholder="Masukkan judul berita..."
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    className="w-full bg-[#0B0F19] border-none rounded-2xl px-6 py-4 text-2xl font-bold text-white focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-700"
                                />
                                {errors.title && (
                                    <p className="text-red-400 text-xs mt-2">
                                        {errors.title}
                                    </p>
                                )}
                            </div>

                            {/* Editor Modular Blocks */}
                            <div className="space-y-4">
                                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest px-2">
                                    Isi Konten Modular
                                </label>

                                {data.blocks.map((block, index) => (
                                    <div
                                        key={index}
                                        className="group relative bg-[#131926] rounded-3xl p-2 border border-white/5 hover:border-indigo-500/30 transition-all"
                                    >
                                        {/* Tombol Hapus Floating */}
                                        <button
                                            type="button"
                                            onClick={(e) =>
                                                removeBlock(index, e)
                                            }
                                            className="absolute -right-2 -top-2 z-[60] p-2 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all"
                                        >
                                            <X size={16} />
                                        </button>

                                        {block.type === "text" ? (
                                            <div className="bg-transparent rounded-2xl overflow-hidden">
                                                <ReactQuill
                                                    theme="snow"
                                                    placeholder="Tuliskan isi paragraf di sini..."
                                                    value={block.value}
                                                    onChange={(val) =>
                                                        updateBlock(index, val)
                                                    }
                                                    className="text-white min-height-quill"
                                                />
                                            </div>
                                        ) : (
                                            <div className="p-8 flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-2xl bg-[#0B0F19]/50 min-h-[200px]">
                                                {block.preview ? (
                                                    <img
                                                        src={block.preview}
                                                        className="max-h-80 rounded-xl mb-4 shadow-2xl"
                                                    />
                                                ) : (
                                                    <ImageIcon
                                                        size={48}
                                                        className="text-slate-700 mb-4"
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
                                                    className="text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-indigo-500/10 file:text-indigo-400"
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Tombol Tambah Blok */}
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => addBlock("text")}
                                    className="py-4 border-2 border-dashed border-white/10 rounded-2xl text-slate-400 hover:border-indigo-500 hover:text-white transition-all font-bold flex items-center justify-center gap-2"
                                >
                                    <Plus size={18} /> Teks
                                </button>
                                <button
                                    type="button"
                                    onClick={() => addBlock("image")}
                                    className="py-4 border-2 border-dashed border-white/10 rounded-2xl text-slate-400 hover:border-indigo-500 hover:text-white transition-all font-bold flex items-center justify-center gap-2"
                                >
                                    <Plus size={18} /> Gambar
                                </button>
                            </div>
                        </div>

                        {/* AREA KANAN: SIDEBAR (4 Kolom) */}
                        <div className="lg:col-span-4 space-y-6 sticky top-32">
                            <div className="p-6 rounded-3xl bg-[#131926] border border-white/5 space-y-6">
                                <h3 className="font-bold text-lg text-white border-b border-white/5 pb-4 flex items-center gap-2">
                                    <Save
                                        size={18}
                                        className="text-indigo-400"
                                    />{" "}
                                    Terbitkan
                                </h3>

                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase mb-2 block tracking-widest">
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
                                        className="w-full bg-[#0B0F19] border-white/10 rounded-xl text-white focus:ring-indigo-500"
                                    >
                                        {categories.map((cat) => (
                                            <option key={cat.id} value={cat.id}>
                                                {cat.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase mb-2 block tracking-widest">
                                        Waktu Terbit
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
                                        className="w-full bg-[#0B0F19] border-white/10 rounded-xl text-white focus:ring-indigo-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black shadow-xl shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {processing
                                        ? "Menerbitkan..."
                                        : "Terbitkan Berita"}
                                </button>
                            </div>

                            {/* Area Cover Gambar */}
                            <div className="p-6 rounded-3xl bg-[#131926] border border-white/5">
                                <label className="text-xs font-bold text-slate-500 uppercase mb-4 block tracking-widest">
                                    Cover Utama
                                </label>

                                <div className="relative aspect-video rounded-2xl bg-[#0B0F19] overflow-hidden border border-white/10 group">
                                    {imagePreview ? (
                                        <img
                                            src={imagePreview}
                                            className="w-full h-full object-cover"
                                            alt="Preview Cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-700">
                                            <ImageIcon size={48} />
                                        </div>
                                    )}

                                    {/* Input file transparan yang menutupi seluruh kotak */}
                                    <input
                                        type="file"
                                        onChange={handleImageChange}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                                        accept="image/*"
                                    />

                                    {/* Overlay teks saat di-hover agar user tahu kotak ini bisa diklik */}
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                        <span className="text-white text-xs font-bold uppercase tracking-widest">
                                            Ganti Gambar
                                        </span>
                                    </div>
                                </div>

                                {/* Pesan Error jika ada */}
                                {errors.image && (
                                    <p className="text-red-400 text-[10px] mt-2 font-bold uppercase">
                                        {errors.image}
                                    </p>
                                )}
                            </div>
                        </div>
                    </form>
                    {/* MODAL CROP: Akan muncul otomatis saat admin memilih gambar */}
                    {imageToCrop && (
                        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-sm">
                            <div className="relative w-full max-w-3xl h-[450px] bg-[#131926] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                                <Cropper
                                    image={imageToCrop}
                                    crop={crop}
                                    zoom={zoom}
                                    aspect={16 / 9} // Mengunci rasio agar semua cover artikel seragam
                                    onCropChange={setCrop}
                                    onZoomChange={setZoom}
                                    onCropComplete={(_, pixels) =>
                                        setCroppedAreaPixels(pixels)
                                    }
                                />
                            </div>

                            {/* Kontrol Zoom & Tombol Aksi */}
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
                                        className="px-8 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 transition-all font-bold border border-white/10"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        type="button"
                                        onClick={generateCroppedImage}
                                        className="px-8 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all font-bold shadow-xl shadow-indigo-500/20"
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
                resolve({
                    file: file,
                    url: URL.createObjectURL(blob),
                });
            }, "image/jpeg");
        };
    });
};
