"use client";

import { BsBoxArrowInRight } from "react-icons/bs";

export default function ForgetPassword() {
  return (
    <div className="antialiased bg-transparent items-center">
      <div className="max-w-lg mx-auto my-10 bg-transparent p-8 rounded-xl shadow shadow-slate-300">
        <h1 className="text-3xl text-indigo-500 font-medium">
          Esqueci minha senha.
        </h1>
        <p className="text-slate-500">Insira seu email aqui.</p>

        <form action="" className="my-10">
          <div className="flex flex-col space-y-5">
            <label htmlFor="email">
              <p className="font-medium text-indigo-500 pb-2">Email</p>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-indigo-500 hover:shadow"
              />
            </label>

            <button className="w-full py-3 font-medium text-white bg-indigo-500 hover:bg-indigo-700 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
              <span>Redefinir Senha</span>
            </button>
            <p className="text-center">
              <a
                href="/login"
                className="text-indigo-500 hover:text-indigo-700 font-medium inline-flex space-x-1 items-center"
              >
                <span> Login</span>
                <BsBoxArrowInRight
                  className="text-indigo-500 hover:text-indigo-700"
                  size={20}
                />
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
