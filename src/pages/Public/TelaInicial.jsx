import React from "react";
import "./TelaInicial.css";
import { Link } from "react-router-dom";
import logoImg from "../../assets/LogoPMHub.png";

const SetaDireita = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const IconeKanban = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="5" height="18" rx="1" />
    <rect x="10" y="3" width="5" height="12" rx="1" />
    <rect x="17" y="3" width="5" height="15" rx="1" />
  </svg>
);

const IconeGrafico = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 3v18h18" />
    <path d="M7 16l4-4 4 4 4-6" />
  </svg>
);

const IconeUsuarios = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="9" cy="7" r="4" />
    <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
  </svg>
);

const recursos = [
  {
    icone: <IconeKanban />,
    cor: "blue",
    titulo: "Boards Kanban visuais",
    descricao: "Arraste, organize e priorize tarefas em quadros intuitivos.",
  },
  {
    icone: <IconeGrafico />,
    cor: "orange",
    titulo: "Relatórios e métricas",
    descricao: "Dashboards automáticos com indicadores de performance.",
  },
  {
    icone: <IconeUsuarios />,
    cor: "teal",
    titulo: "Colaboração integrada",
    descricao: "Equipe sincronizada com comentários e atualizações em tempo real.",
  },
  {
    icone: <IconeKanban />,
    cor: "purple",
    titulo: "Linha do tempo / Gantt",
    descricao: "Visualize prazos, dependências e progresso das tarefas no tempo.",
  },
  {
    icone: <IconeGrafico />,
    cor: "green",
    titulo: "Exportação de dados",
    descricao: "Exporte projetos em PDF, CSV ou Excel com um clique.",
  },
  {
    icone: <IconeUsuarios />,
    cor: "purple",
    titulo: "Permissões e controle de acesso",
    descricao:
      "Defina papéis, níveis de acesso e controle total sobre projetos e equipes.",
  },
];

export default function TelaInicial() {
  return (
    <>
      
      <section className="destaque">
        <h1 className="destaque__titulo">
          Domine seus projetos
          <br />
          <span>Otimize</span> seus fluxos
        </h1>

        <p className="destaque__subtitulo">
          Centralize demandas, tarefas e equipes em um único sistema de
          gerenciamento de projetos.
        </p>

        <div className="destaque__acoes">
          <Link to="/cadastro" className="botao-primario">
            Criar cadastro
            <SetaDireita />
          </Link>

          <Link to="/login" className="botao-secundario">
            Já tenho uma conta
          </Link>
        </div>
      </section>

      <section className="recursos" id="recursos">
        <div className="recursos__superior">
          {recursos.slice(0, 3).map((recurso) => (
            <div className="card-recurso" key={recurso.titulo}>
              <div
                className={`card-recurso__icone card-recurso__icone--${recurso.cor}`}
              >
                {recurso.icone}
              </div>

              <h3 className="card-recurso__titulo">
                {recurso.titulo}
              </h3>

              <p className="card-recurso__descricao">
                {recurso.descricao}
              </p>
            </div>
          ))}
        </div>

        <div className="recursos__inferior">
          {recursos.slice(3, 6).map((recurso) => (
            <div className="card-recurso" key={recurso.titulo}>
              <div
                className={`card-recurso__icone card-recurso__icone--${recurso.cor}`}
              >
                {recurso.icone}
              </div>

              <h3 className="card-recurso__titulo">
                {recurso.titulo}
              </h3>

              <p className="card-recurso__descricao">
                {recurso.descricao}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="rodape">
        <span className="rodape__marca">PM Hub</span>

        <span className="rodape__copyright">
          © 2026 PM Hub. Todos os direitos reservados.
        </span>
      </footer>
    </>
  );
}