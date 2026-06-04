# Requisitos do Sistema

## Requisitos Funcionais

### RF01 - Cadastro de Projetos
O sistema deve permitir o cadastro de projetos contendo nome, descrição, data de início e data prevista de término.

### RF02 - Visualização de Projetos
O sistema deve permitir a visualização dos projetos cadastrados.

### RF03 - Gerenciamento de Projetos
O sistema deve permitir editar e excluir projetos cadastrados.

### RF04 - Cadastro de Tarefas
O sistema deve permitir a criação de tarefas vinculadas a um projeto.

### RF05 - Gerenciamento de Tarefas
O sistema deve permitir alterar o status das tarefas entre:

* À Fazer
* Fazendo
* Feito

### RF06 - Definição de Prioridade
O sistema deve permitir definir a prioridade das tarefas:

* Baixa
* Média
* Alta

### RF07 - Atribuição de Responsáveis
O sistema deve permitir associar tarefas a membros da equipe.

### RF08 - Cadastro de Membros
O sistema deve permitir cadastrar membros da equipe do projeto.

### RF09 - Cronograma
O sistema deve permitir registrar atividades com datas de início e término.

### RF010 - Cadastro de Riscos
O sistema deve permitir cadastrar riscos relacionados ao projeto.

### RF11 - Classificação de Riscos
O sistema deve permitir definir probabilidade e impacto para cada risco.

### RF12 - Visualização da Matriz de Riscos
O sistema deve apresentar os riscos em uma matriz de impacto e probabilidade.

### RF13 - Dashboard de Indicadores
O sistema deve gerar indicadores automaticamente a partir dos dados cadastrados nos módulos do projeto.

### RF14 - Indicadores de Tarefas
O sistema deve apresentar:

* Total de tarefas
* Tarefas concluídas
* Tarefas em andamento
* Percentual de conclusão

### RF15 - Autenticação
O sistema deve permitir autenticação de usuários.

### RF16 - Encerramento de Sessão
O sistema deve permitir que o usuário encerre sua sessão de forma segura.

---

## Requisitos Não Funcionais

### RNF01 - Interface Responsiva
O sistema deve ser utilizável em computadores, tablets e dispositivos móveis.

### RNF02 - Banco de Dados
O sistema deve utilizar o Supabase como solução de banco de dados.

### RNF03 - Front-End
O sistema deve ser desenvolvido utilizando React.

### RNF04 - Hospedagem
O sistema deve ser publicado na plataforma Azure.

### RNF05 - Qualidade de Código
O código-fonte deve ser analisado utilizando SonarCloud.

### RNF06 - Testes
O sistema deve possuir testes automatizados utilizando Cypress.

### RNF07 - Controle de Versão
O projeto deve utilizar Git e GitHub para controle de versão.

### RNF08 - Segurança
O acesso às informações do sistema deve exigir autenticação do usuário.

