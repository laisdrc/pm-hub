import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

function Dashboard() {
  const [projetos, setProjetos] = useState([]);
  const [tarefas, setTarefas] = useState([]);
  const [riscos, setRiscos] = useState([]);

  useEffect(() => {
    async function loadData() {
      // Projetos
      const { data: projetosData } = await supabase
        .from("projetos")
        .select("*");

      // Tarefas
      const { data: tarefasData } = await supabase
        .from("tarefas")
        .select("*");

      // Riscos
      const { data: riscosData } = await supabase
        .from("riscos")
        .select("*");

      setProjetos(projetosData || []);
      setTarefas(tarefasData || []);
      setRiscos(riscosData || []);
    }

    loadData();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>📊 Dashboard PM Hub</h1>

      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        <div style={cardStyle}>
          <h2>📁 Projetos</h2>
          <p>{projetos.length}</p>
        </div>

        <div style={cardStyle}>
          <h2>✅ Tarefas</h2>
          <p>{tarefas.length}</p>
        </div>

        <div style={cardStyle}>
          <h2>⚠️ Riscos</h2>
          <p>{riscos.length}</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ddd",
  padding: 20,
  borderRadius: 10,
  minWidth: 120,
  textAlign: "center",
};

export default Dashboard;