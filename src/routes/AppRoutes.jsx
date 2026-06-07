import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

import TelaInicial from "../pages/Public/TelaInicial";
import Login from "../pages/Auth/Login";
import Cadastro from "../pages/Auth/Cadastro";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      {/* Navbar aparece em todas as páginas */}
      <Navbar />

      <Routes>

        {/* 🌐 Tela inicial (primeira do sistema) */}
        <Route path="/" element={<TelaInicial />} />

        {/* 🔐 Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

      </Routes>
    </BrowserRouter>
  );
}