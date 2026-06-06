import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../services/supabase";

function ProjetoDetalhe() {
  const { id } = useParams();

  const [projeto, setProjeto] = useState(null);
  const [tarefas, setTarefas] = useState([]);
  const [membros, setMembros] = useState([]);
  const [riscos, setRiscos] = useState([]);

  useEffect(() => {
    async function loadData() {
      // Projeto
      const { data: projetoData } = await supabase
        .from("projetos")
        .select("*")
        .eq("id", id)
        .single();

      // Tarefas do projeto
      const { data: tarefasData } = await supabase
        .from("tarefas")
        .select("*")
        .eq("projeto_id", id);

      // Membros do projeto
      const { data: membrosData } = await supabase
        .from("membros")
        .select("*")
        .eq("projeto_id", id);

      // Riscos do projeto
      const { data: riscosData } = await supabase
        .from("riscos")
        .select("*")
        .eq("projeto_id", id);

      setProjeto(projetoData);
      setTarefas(tarefasData || []);
      setMembros(membrosData || []);
      setRiscos(riscosData || []);
    }

    loadData();
  }, [id]);

  if (!projeto) {
    return <p style={{ padding: 20 }}>Carregando projeto...</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>📁 {projeto.nome}</h1>
      <p>{projeto.descricao}</p>

      <hr />

      {/* TAREFAS */}
      <h2>✅ Tarefas</h2>
      {tarefas.length === 0 && <p>Sem tarefas</p>}
      {tarefas.map((t) => (
        <div key={t.id}>• {t.nome}</div>
      ))}

      <hr />

      {/* MEMBROS */}
      <h2>👥 Membros</h2>
      {membros.length === 0 && <p>Sem membros</p>}
      {membros.map((m) => (
        <div key={m.id}>• {m.nome}</div>
      ))}

      <hr />

      {/* RISCOS */}
      <h2>⚠️ Riscos</h2>
      {riscos.length === 0 && <p>Sem riscos</p>}
      {riscos.map((r) => (
        <div key={r.id}>• {r.descricao}</div>
      ))}
    </div>
  );
}

export default ProjetoDetalhe;