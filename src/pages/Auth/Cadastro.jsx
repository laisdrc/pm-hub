import { useState } from "react";
import { supabase } from "../../services/supabase";
import "./Cadastro.css";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function realizarCadastro(evento) {
    evento.preventDefault();

    setCarregando(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password: senha,
        options: {
          data: {
            nome,
          },
        },
      });

      if (error) throw error;

      alert("Cadastro realizado com sucesso!");

      setNome("");
      setEmail("");
      setSenha("");
    } catch (erro) {
      alert(`Erro ao cadastrar: ${erro.message}`);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
        <h1>Criar Conta</h1>

        <form onSubmit={realizarCadastro}>

          {/* Campo: Nome */}
          <div className="input-wrap">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(evento) => setNome(evento.target.value)}
              required
            />
          </div>

          {/* Campo: E-mail */}
          <div className="input-wrap">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="2,4 12,13 22,4" />
            </svg>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
              required
            />
          </div>

          {/* Campo: Senha */}
          <div className="input-wrap">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(evento) => setSenha(evento.target.value)}
              required
            />
          </div>

          <button type="submit" disabled={carregando}>
            {carregando ? "Cadastrando..." : "Cadastrar"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Cadastro;