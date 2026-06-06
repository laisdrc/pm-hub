import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);

      const { data, error } = await supabase
        .from("projetos")
        .select("*");

      console.log("DATA:", data);
      console.log("ERROR:", error);

      if (error) {
        console.log("Erro ao buscar projetos:", error);
        setProjects([]);
      } else {
        setProjects(data || []);
      }

      setLoading(false);
    }

    fetchProjects();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Projetos</h1>

      {loading && <p>Carregando projetos...</p>}

      {!loading && projects.length === 0 && (
        <p>Nenhum projeto encontrado.</p>
      )}

      {!loading &&
        projects.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>{p.nome}</h3>
            <p>{p.descricao}</p>
          </div>
        ))}
    </div>
  );
}

export default Projects;