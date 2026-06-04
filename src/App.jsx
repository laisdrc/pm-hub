import { useEffect, useState } from "react";
import { supabase } from "./services/supabase";

function App() {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjetos() {
      const { data, error } = await supabase
        .from("projetos")
        .select("*");

      if (error) {
        console.log("ERRO:", error);
      } else {
        setProjetos(data);
      }

      setLoading(false);
    }

    fetchProjetos();
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>📊 Meus Projetos</h1>

      {loading && <p>Carregando...</p>}

      {!loading && projetos.length === 0 && (
        <p>Nenhum projeto encontrado.</p>
      )}

      <div style={{ display: "grid", gap: 10 }}>
        {projetos.map((p) => (
          <div
            key={p.id}
            style={{
              padding: 15,
              border: "1px solid #ddd",
              borderRadius: 8,
            }}
          >
            <h3>{p.nome}</h3>
            <p>{p.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;