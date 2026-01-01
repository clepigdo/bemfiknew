import React from "react";
import { Link } from "@inertiajs/react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";

import { Card, CardContent } from "./ui/card";

export function DivisiCarousel() {
    const dataDivisi = [
        {
            id: 1,
            code: "P3",
            title: "Pendidikan, Penelitian, dan Pengabdian",
            image: "/images/periode/Sacakarsa/P3.png",
            url: "/pages/profil-p3",
        },
        {
            id: 2,
            code: "EKOKRAF",
            title: "Ekonomi Kreatif",
            image: "/images/periode/Sacakarsa/Ekokraf.png",
            url: "/pages/profil-ekokraf",
        },
        {
            id: 3,
            code: "PR",
            title: "Public Relations",
            image: "/images/periode/Sacakarsa/PR.png",
            url: "/pages/profil-pr",
        },
        {
            id: 4,
            code: "PSDM",
            title: "Pengembangan Sumber Daya Mahasiswa",
            image: "/images/periode/Sacakarsa/PSDM.png",
            url: "/pages/profil-psdm",
        },
        {
            id: 5,
            code: "MEDKREF",
            title: "Media Kreatif",
            image: "/images/periode/Sacakarsa/Medkref.png",
            url: "/pages/profil-medkref",
        },
        {
            id: 6,
            code: "MIKAT",
            title: "Minat dan Bakat",
            image: "/images/periode/Sacakarsa/Mikat.png",
            url: "/pages/profil-mikat",
        },
    ];

    return (
        <div className="w-full min-h-[600px] flex items-center justify-center bg-transparent p-4 md:p-10">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full max-w-6xl"
            >
                <CarouselContent className="-ml-4">
                    {dataDivisi.map((item) => (
                        <CarouselItem
                            key={item.id}
                            className="pl-4 md:basis-1/2 lg:basis-1/3"
                        >
                            <div className="p-1 h-full group">
                                <Link href={item.url} className="block h-full">
                                    {/* UBAH 2: Card Style Glassmorphism Dark Mode */}
                                    {/* bg-white -> bg-white/5, border-none -> border border-white/10 */}
                                    <Card className="border border-white/10 shadow-2xl rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-md h-full flex flex-col cursor-pointer hover:bg-white/10 hover:border-blue-500/50 hover:shadow-blue-900/20 transition-all duration-500">
                                        <CardContent className="flex flex-col items-center p-6">
                                            {/* Image Container */}
                                            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-lg bg-black/20">
                                                {/* Gradient Overlay saat hover (efek cinematic) */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                            </div>

                                            {/* Text Content */}
                                            <div className="text-center space-y-2 relative z-20">
                                                {/* UBAH 3: Warna Text disesuaikan Dark Mode */}
                                                <h3 className="text-xl font-black text-blue-400 uppercase tracking-[0.2em] group-hover:text-[#FBDF07] transition-colors">
                                                    {item.code}
                                                </h3>
                                                <p className="text-gray-200 font-medium text-lg leading-snug px-2 group-hover:text-white transition-colors">
                                                    {item.title}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* UBAH 4: Tombol Navigasi Dark Mode */}
                <CarouselPrevious className="hidden md:flex h-14 w-14 bg-white/10 hover:bg-blue-600 text-white border border-white/20 backdrop-blur-md -left-4 lg:-left-16" />
                <CarouselNext className="hidden md:flex h-14 w-14 bg-white/10 hover:bg-blue-600 text-white border border-white/20 backdrop-blur-md -right-4 lg:-right-16" />
            </Carousel>
        </div>
    );
}
