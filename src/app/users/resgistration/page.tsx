"use client";

import React from "react";

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
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/services/api";

export default function UserRegistration() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const router = useRouter();

  const handleUserRegistration = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    const data = {
      name,
      email,
      password,
      image,
      role,
    };
    try {
      await api.post("/users", data);
      router.push("/users");
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
    setEmail("");
    setPassword("");
    setImage("");
    setRole("");
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center bg-transparent p-4">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Cadastro de Usuário</CardTitle>
          </CardHeader>
          <CardContent>
            <form method="post" onClick={handleUserRegistration}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    placeholder=""
                    className="focus:border-indigo-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    className="focus:border-indigo-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Senha</Label>
                  <Input
                    id="password"
                    type="password"
                    className="focus:border-indigo-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="image">Imagem de Perfil</Label>
                  <Input
                    id="image"
                    type="file"
                    className="focus:border-indigo-500"
                    value={image}
                    onChange={handleImageChange}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Tipo de Usuário</Label>
                  <Select>
                    <SelectTrigger id="role">
                      <SelectValue
                        placeholder="Selecione"
                        className="bg-indigo-100"
                      />
                    </SelectTrigger>
                    <SelectContent
                      position="popper"
                      className="bg-white dark:bg-neutral-900"
                    >
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                    </SelectContent>
                  </Select>
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
    </>
  );
}
