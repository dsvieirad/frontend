"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/header";
import Image from "next/image";
import api from "@/services/api";
import { useEffect, useState } from "react";

interface Book {
  name: string;
  description: string;
  imageUrl: string;
}

export default function Bookshelf() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await api.get<Book[]>("books");
        setBooks(response.data);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    }
    fetchBooks();
  }, []);

  const removeFromBookshelf = (indexToRemove: number) => {
    const updatedBooks = [...books];
    updatedBooks.splice(indexToRemove, 1);
    setBooks(updatedBooks);
  };

  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-black m-4 p-4">
        <div className="flex items-center justify-centerflex-col">
          <div className="bg-indigo-50 dark:bg-black pt-0 p-10 rounded-xl  w-full h-full">
            <div className="flex flex-col justify-center items-center text-center">
              <div className="max-w-sm font-bold font-sans text-2xl text-indigo-500">
                Minha Estante de Livros
              </div>
              <div className="font-bold max-w-lg mt-5 text-base text-gray-700 dark:text-white">
                Meu cantinho onde posso encontrar todos os livros favoritados.
              </div>
            </div>
            <div className="px-3 py-4 flex justify-center">
              <table className="w-full text-md bg-indigo-300 shadow-md rounded mb-4">
                <thead>
                  <tr>
                    <th className="text-left p-3 px-5">Capa</th>
                    <th className="text-left p-3 px-5">Nome</th>
                    <th className="text-left p-3 px-5">Descrição</th>
                    <th className="text-left p-3 px-5">Remover Livro</th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-indigo-200 bg-indigo-100"
                    >
                      <td className="p-3 px-5">
                        <Image
                          src={book.imageUrl}
                          height={50}
                          width={70}
                          alt={book.name}
                        />
                      </td>
                      <td className="p-3 px-5">{book.name}</td>
                      <td className="p-3 px-5">{book.description}</td>
                      <td className="p-3 px-5 flex">
                        <button
                          type="button"
                          className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          onClick={() => removeFromBookshelf(index)}
                        >
                          Remover dos favoritos
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
