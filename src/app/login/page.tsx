"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/context/auth";
import Image from "next/image";
import { useContext, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("antes");
      await signIn(email, password);
      console.log("depois");
    } catch (error: any) {
      alert(
        error
          ? "Usuário ou senha inválido(s)."
          : "Erro! Tente novamente mais tarde."
      );
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black p-12">
      <form className="mt-8 space-y-6" method="POST" onSubmit={handleLogin}>
        <div className="max-w-sm rounded-3xl bg-gradient-to-b from-indigo-400 to-indigo-900 p-px dark:from-gray-800 dark:to-transparent">
          <div className="rounded-[calc(1.5rem-1px)] bg-white px-10 p-12 dark:bg-black">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Livraria MoonLight"
                width={70}
                height={30}
              />
              <h1 className=" text-2xl font-semibold text-indigo-500 dark:text-indigo-500">
                Login
              </h1>
            </div>

            <div>
              <Label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-indigo-500 dark:text-white"
              >
                Email
              </Label>
              <div className="mt-2">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="current-password"
                  className="w-full bg-transparent text-gray-700 dark:text-white dark:border-indigo-700 focus:border-indigo-500 rounded-md border border-indigo-300 px-3 py-2 text-sm placeholder-white dark:placeholder-white"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 mt-4 text-indigo-500 dark:text-white"
                >
                  Senha
                </Label>
              </div>
              <div className="mt-2">
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent text-gray-00 dark:text-white dark:border-indigo-700 focus:border-indigo-500 rounded-md border border-indigo-300 px-3 py-2 text-sm placeholder-white dark:placeholder-gray-300"
                />
              </div>
              <div className="mt-2">
                <a
                  href="/login/forget"
                  className="text-indigo-500 text-sm font-bold"
                >
                  Esqueceu a Senha?
                </a>
              </div>
              <div className="mt-4">
                <Button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Entrar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
