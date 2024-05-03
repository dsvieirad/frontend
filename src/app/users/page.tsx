"use client";

import Navbar from "@/components/header";
import api from "@/services/api";
import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

export default function User() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await api.get<User[]>("users");
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <>
      <Navbar />
      <div className="text-gray-900 dark:bg-black">
        <div className="pt-10 pr-0 flex justify-center">
          <h1 className="text-3xl text-indigo-500">Usuários do Sistema</h1>
        </div>

        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-indigo-300 shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Código</th>
                <th className="text-left p-3 px-5">Nome</th>
                <th className="text-left p-3 px-5">Email</th>
                <th className="text-left p-3 px-5">Ações</th>
              </tr>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-indigo-200 bg-indigo-100"
                >
                  <td className="p-3 px-5">{user.id}</td>
                  <td className="p-3 px-5">{user.name}</td>
                  <td className="p-3 px-5">{user.email}</td>
                  <td className="p-3 px-5 flex justify-end">
                    <button
                      type="button"
                      className="mr-3 text-sm bg-indigo-500 hover:bg-indigo-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
