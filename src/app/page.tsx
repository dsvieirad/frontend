"use client";
import { AuthProvider } from "@/context/auth";
import AppRoutes from "@/routes/router";

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
