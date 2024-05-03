"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/header";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/footer";
import api from "@/services/api";
import Router, { useRouter } from "next/navigation";

export default function BookRegistration() {
  const [name, setName] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [restriction, setRestriction] = useState<number>();
  const [image, setImage] = useState<string>("");
  const router = useRouter();

  const handleBookRegistration = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    const data = {
      name,
      slug,
      description,
      restriction,
      image,
    };
    try {
      await api.post("/books", data);
      router.push("/books");
    } catch (error) {
      alert(error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedImage = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleCancel = () => {
    setName("");
    setSlug("");
    setDescription("");
    setRestriction(0);
    setImage("");
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center bg-transparent p-4">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Cadastro de Livros</CardTitle>
          </CardHeader>
          <CardContent>
            <form method="post" onClick={handleBookRegistration}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    className="focus:border-indigo-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="slug">Slug</Label>
                  <Input
                    id="slug"
                    className="focus:border-indigo-500"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    id="description"
                    className="focus:border-indigo-500"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Restrição de Idade</Label>
                  <Select>
                    <SelectTrigger id="restriction">
                      <SelectValue
                        placeholder="Selecione"
                        className="bg-indigo-100"
                      />
                    </SelectTrigger>
                    <SelectContent
                      position="popper"
                      className="bg-white dark:bg-neutral-900"
                    >
                      <SelectItem value="12">12</SelectItem>
                      <SelectItem value="14">14</SelectItem>
                      <SelectItem value="16">16</SelectItem>
                      <SelectItem value="18">18</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="image">Capa do Livro</Label>
                  <Input
                    id="image"
                    type="file"
                    className="focus:border-indigo-500"
                    value={image}
                    onChange={handleImageChange}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-700 text-white rounded-xl"
            >
              Salvar
            </Button>

            <Button
              type="button"
              onClick={handleCancel}
              className="bg-red-500 hover:bg-red-700 text-white rounded-xl"
            >
              Cancelar
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </>
  );
}
