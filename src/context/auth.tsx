import { createContext, useEffect, useState, ReactNode } from "react";
import api from "@/services/api";
import Router from "next/router";

interface User {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User | null;
  signed: boolean;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storageData = async () => {
      const storageUser = localStorage.getItem("@Auth:user");
      const storageToken = localStorage.getItem("@Auth:token");

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
        api.defaults.headers.common["Authorization"] = `Bearer ${storageToken}`;
      }
    };
    storageData();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const response = await api.post("/login", { email, password });
      if (response.data.error) {
        alert(response.data.error);
      } else {
        setUser(response.data.user);
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
        localStorage.setItem("@Auth:token", response.data.token);
        localStorage.setItem("@Auth:user", JSON.stringify(response.data.user));
        console.log("erro");
        Router.push("/home");
      }
    } catch (error) {
      console.error("Erro ao efetuar login:", error);
    }
  };

  const signOut = () => {
    setUser(null);
    delete api.defaults.headers.common["Authorization"];
    localStorage.removeItem("@Auth:token");
    localStorage.removeItem("@Auth:user");
  };

  return (
    <AuthContext.Provider value={{ user, signed: !!user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
