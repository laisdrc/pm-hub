import { Link } from "react-router-dom";

function MainLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* SIDEBAR */}
      <div style={{
        width: 220,
        background: "#111",
        color: "#fff",
        padding: 20
      }}>
        <h2>PM Hub</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Link to="/" style={{ color: "#fff" }}>Dashboard</Link>
          <Link to="/projetos" style={{ color: "#fff" }}>Projetos</Link>
        </nav>
      </div>

      {/* CONTEÚDO */}
      <div style={{ flex: 1, padding: 20 }}>
        {children}
      </div>

    </div>
  );
}

export default MainLayout;