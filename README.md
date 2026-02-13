# 📦 Inventory Transactions System

Sistema completo para controle de movimentação de produtos e transações comerciais, composto por:

- 🖥 Backend API (Node.js + Prisma ORM)
- 📱 Aplicativo Mobile (React Native) *(em desenvolvimento)*

O projeto está sendo desenvolvido de forma incremental e documenta a evolução de um sistema comercial orientado a regras de negócio e métricas de desempenho.

---

# 🚀 Objetivo

Construir um sistema comercial estruturado demonstrando:

- Arquitetura em camadas no backend
- Separação clara de responsabilidades
- Integridade transacional
- Modelagem relacional consistente
- Integração entre API e aplicação mobile
- Evolução progressiva com implementação futura de KPIs

---

# 🧠 Regras de Negócio

- Cada transação pode conter múltiplos produtos.
- Movimentações são registradas como:
  - `ENTRADA`
  - `SAIDA`
- O valor total da transação é calculado dinamicamente com base nos itens.
- Transações são tratadas como fatos históricos (não editáveis).
- Operações que envolvem múltiplas entidades utilizam `$transaction` para garantir atomicidade.

---

# 🖥 Backend (API)

## 🔧 Tecnologias

- Node.js
- Express
- Prisma ORM
- Banco de dados relacional
- JavaScript (ES Modules)

## 🏗 Arquitetura

O backend segue arquitetura em camadas:

```
Controller
   ↓
Service (Regras de Negócio)
   ↓
Repository (Acesso a Dados)
   ↓
Prisma ORM
   ↓
Banco de Dados
```

Essa abordagem garante:

- Baixo acoplamento
- Organização do código
- Escalabilidade
- Manutenção facilitada

---

## ✅ Funcionalidades Já Implementadas

### 📦 Produtos
- CRUD completo de produtos

### 👤 Clientes
- CRUD completo de clientes

### 💳 Transações
- Criação de transações com múltiplos produtos
- Cálculo automático do valor total
- Registro automático das movimentações de estoque
- Uso de transações atômicas (`$transaction`)
- Listagem de transações por usuário

### 📊 Movimentação de Produtos
- Registro de entradas e saídas
- Consulta de movimentações com vínculo ao produto
- Associação das movimentações à transação correspondente

---

## 🚧 Em Desenvolvimento (Backend)

- Padronização de respostas da API
- Melhorias na camada de validação
- Paginação nas consultas
- Filtros por período
- Melhor tratamento de erros

---

# 📱 Frontend Mobile (React Native)

Aplicação mobile que consumirá a API para gerenciamento das operações comerciais.

## 🎯 Funcionalidades Planejadas

- Cadastro e listagem de produtos
- Cadastro e listagem de clientes
- Registro de transações
- Visualização do histórico de movimentações
- Dashboard com métricas comerciais

## 🚧 Status

- Estrutura inicial será criada
- Integração com API em andamento
- Interface e fluxo de navegação em planejamento

---

# 📊 Próxima Evolução: KPIs e Métricas

O sistema evoluirá para incluir indicadores de desempenho, como:

- Faturamento total
- Faturamento por período
- Ticket médio
- Produtos mais vendidos
- Clientes com maior volume de compras
- Volume de movimentação por período

O objetivo é transformar o projeto em uma base simples de gestão comercial com análise de dados.

---

# 🎯 Visão do Projeto

Este projeto vai além de um CRUD básico.

Está sendo construído como uma base para um sistema comercial com:

- Controle transacional consistente
- Regras de negócio bem definidas
- Evolução incremental
- Preparação para métricas e análise de desempenho

---

# 📌 Status

🟢 Em desenvolvimento ativo  
📈 Evoluindo para incluir métricas e dashboard comercial  
📱 Integração mobile em progresso  

---
