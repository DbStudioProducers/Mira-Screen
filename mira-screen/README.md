# 🎥 Mira Screen

**Mira Screen** é uma plataforma de streaming OTT completa, idêntica em funcionamento aos gigantes do mercado (Netflix, Disney+, Prime Video), com identidade própria e arquitetura escalável.

## Visão Geral da Arquitetura

### Stack Tecnológica

| Camada              | Tecnologia                              | Justificativa |
|---------------------|-----------------------------------------|-------------|
| **Cliente**         | Flutter 3.24+ (Mobile + TV + Web)       | Multiplataforma nativa + excelente performance |
| **Admin**           | Next.js 15 + TypeScript + Tailwind      | Dashboard moderno e rápido |
| **Backend**         | NestJS 11 + GraphQL + REST              | Arquitetura enterprise + modular |
| **Player**          | Custom Flutter + Web Video.js + Shaka   | Player próprio e independente |
| **Banco de Dados**  | PostgreSQL + MongoDB + Redis            | Relacional + NoSQL + Cache |
| **Infra**           | AWS (ECS, S3, CloudFront, MediaConvert) | Escala global |
| **CI/CD**           | Codemagic + GitHub Actions              | Build Flutter + Deploy |
| **Auth**            | JWT + OAuth2 + Refresh Tokens           | Segurança enterprise |

## Estrutura de Pastas

```
mira-screen/
├── client/                 # Flutter App
├── admin/                  # Painel Administrativo
├── backend/                # API NestJS
├── player/                 # Player de vídeo customizado
├── docs/                   # Documentação técnica
├── infra/                  # Infraestrutura & DevOps
├── scripts/                # Scripts de automação
└── README.md
```

## Como Começar (Desenvolvimento Local)

### Pré-requisitos
- Flutter 3.24+
- Node.js 20+
- Docker & Docker Compose
- PostgreSQL 16
- Redis 7

### 1. Clone e Setup

```bash
git clone https://github.com/seu-org/mira-screen.git
cd mira-screen
```

### 2. Backend

```bash
cd backend
npm install
cp .env.example .env
npm run start:dev
```

### 3. Cliente Flutter

```bash
cd client
flutter pub get
flutter run -d chrome          # Web
flutter run -d android         # Mobile
```

### 4. Admin

```bash
cd admin
npm install
npm run dev
```

### 5. Player (standalone)

```bash
cd player
npm install
npm run dev
```

### 6. Banco de Dados & Infra

```bash
docker-compose up -d
```

## Funcionalidades Principais (MVP)

- [x] Autenticação e autorização (JWT + Refresh)
- [x] Catálogo de conteúdo (filmes, séries, lives)
- [x] Player de vídeo customizado com DRM
- [x] Recomendações baseadas em ML (placeholder)
- [x] Perfis de usuário
- [x] Painel administrativo completo
- [x] Analytics em tempo real
- [ ] Offline download (próxima sprint)
- [ ] Social watch party

## Documentação Técnica

- [Database Schema](./docs/database-schema.md)
- [API REST & GraphQL](./docs/api.md)
- [Player Architecture](./docs/player-architecture.md)
- [Security & Compliance](./docs/security.md)
- [Deployment Guide](./docs/deployment.md)

## Próximos Passos

Este repositório contém a estrutura **completa e pronta para produção**. Cada pasta possui seu próprio README detalhado.

---

**Mira Screen** — *Onde o conteúdo ganha vida.*