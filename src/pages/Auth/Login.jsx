import { useState } from "react";
import { supabase } from "../../services/supabase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function realizarLogin(evento) {
    evento.preventDefault();

    setCarregando(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password: senha,
      });

      if (error) throw error;

      alert("Login realizado com sucesso!");

      setEmail("");
      setSenha("");

      // Futuramente:
      // navigate("/dashboard");
    } catch (erro) {
      alert(`Erro ao realizar login: ${erro.message}`);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Entrar</h1>

        <form onSubmit={realizarLogin}>

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
            {carregando ? "Entrando..." : "Entrar"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;