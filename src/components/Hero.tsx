import React from "react";
import { NewsData } from "@/types/News";
import { Card, CardContent } from "@/components/ui/card";
import sondakika from "@/assets/sondakika.gif";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  newsData: NewsData;
}

const Hero = ({ newsData }: HeroProps) => {
  return (
    <Carousel className="w-full  mx-auto py-4">
      <CarouselContent>
        {newsData.data.slice(0, 3).map((item) => (
          <CarouselItem key={item.url}>
            <Card className="w-full max-w-7xl h-[600px] mx-auto overflow-hidden">
              <CardContent className="p-0 h-full w-full relative ">
                <Image
                  src={sondakika}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <Link href={item.url} className="block">
                    <h2 className="text-xl md:text-2xl font-bold text-white line-clamp-2 hover:underline">
                      {item.title}
                    </h2>
                  </Link>
                  <p className="text-sm text-gray-300 mt-2">
                    {item.source} -{" "}
                    {new Date(item.published_at).toLocaleDateString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Hero;
