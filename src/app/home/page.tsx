"use client";

import * as React from "react";
import Navbar from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { GoComment, GoHeart } from "react-icons/go";
import Footer from "@/components/footer";
import api from "@/services/api";

interface Book {
  name: string;
  description: string;
  imageUrl: string;
}

export default function Home() {
  const [books, setBooks] = React.useState<Book[]>([]);

  React.useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await api.get<Book[]>("books");
        const firstFourBooks = response.data.slice(0, 4);
        setBooks(firstFourBooks);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    }

    fetchBooks();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-black p-4">
        <h2 className="flex items-center justify-center p-4 mb-4 font-bold text-xl text-indigo-500">
          Livros Destaque da Semana
        </h2>
        <div className="flex items-center justify-center h-full bg-transparent dark:bg-trasparent">
          {" "}
          <Carousel className="w-full max-w-sm">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-2xl font-semibold text-indigo-600">
                          {" "}
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-indigo-600" />{" "}
            <CarouselNext className="text-indigo-600" />{" "}
          </Carousel>
        </div>
        <h2 className="flex items-center justify-center p-2 mb-4 font-bold text-xl text-indigo-500">
          Outros Livros
        </h2>
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-transparent py-6 sm:py-12">
          <div className="mx-auto max-w-screen-xl  w-full">
            <div className=" mt-0 grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-2">
              {books.map((book, index) => (
                <div
                  key={index}
                  className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm"
                >
                  <div className="h-auto overflow-hidden">
                    <div className="h-44 overflow-hidden relative">
                      <Image
                        src={book.imageUrl}
                        alt={book.name}
                        height={150}
                        width={150}
                      />
                    </div>
                  </div>
                  <div className="bg-transparent py-4 px-4">
                    <h3 className="text-base dark:text-indigo-400 mb-2 font-medium">
                      {book.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-400 dark:text-white">
                        {book.description}
                      </p>
                      <div className="relative z-40 flex items-center gap-2">
                        <a
                          href=""
                          className="text-indigo-500 hover:text-indigo-700 "
                        >
                          <GoHeart size={30} />
                        </a>
                        <a
                          href=""
                          className="text-indigo-500 hover:text-indigo-700"
                        >
                          <GoComment size={30} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
