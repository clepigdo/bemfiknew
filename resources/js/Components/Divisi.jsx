import React from "react";
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
        },
        {
            id: 2,
            code: "EKOKRAF",
            title: "Ekonomi Kreatif",
            image: "/images/periode/Sacakarsa/Ekokraf.png",
        },
        {
            id: 3,
            code: "PR",
            title: "Public Relations",
            image: "/images/periode/Sacakarsa/PR.png",
        },
        {
            id: 4,
            code: "PSDM",
            title: "Pengembangan Sumber Daya Mahasiswa",
            image: "/images/periode/Sacakarsa/PSDM.png",
        },
        {
            id: 5,
            code: "MEDKREF",
            title: "Media Kreatif",
            image: "/images/periode/Sacakarsa/Medkref.png",
        },
        {
            id: 6,
            code: "MIKAT",
            title: "Minat dan Bakat",
            image: "/images/periode/Sacakarsa/Mikat.png",
        },

    ];

    return (
        <div className="w-full min-h-[600px] flex items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 p-10">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full max-w-5xl"
            >
                <CarouselContent className="-ml-4">
                    {dataDivisi.map((item) => (
                        <CarouselItem
                            key={item.id}
                            className="pl-4 md:basis-1/2 lg:basis-1/3"
                        >
                            <div className="p-1 h-full">
                                <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden bg-white h-full flex flex-col">
                                    <CardContent className="flex flex-col items-center p-6">
                                        <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-sm">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        <div className="text-center space-y-1">
                                            <h3 className="text-xl font-bold text-blue-900 uppercase tracking-wide">
                                                {item.code}
                                            </h3>
                                            <p className="text-gray-800 font-semibold text-lg leading-tight px-4">
                                                {item.title}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="h-14 w-14 bg-white hover:bg-gray-50 text-blue-900 border-none shadow-lg -left-16" />
                <CarouselNext className="h-14 w-14 bg-white hover:bg-gray-50 text-blue-900 border-none shadow-lg -right-16" />
            </Carousel>
        </div>
    );
}
