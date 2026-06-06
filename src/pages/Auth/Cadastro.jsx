import { useState } from "react";
import { supabase } from "../../services/supabase";
import { useNavigate } from "react-router-dom";


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (!error) {
      alert("Conta criada! Verifique seu email (se ativado).");
      navigate("/login");
    } else {
      alert(error.message);
    }
  }

  return (
    <div>
      <h1>Cadastro</h1>

      <form onSubmit={handleRegister}>
        <input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Criar conta</button>
      </form>
    </div>
  );
}

export default Register;