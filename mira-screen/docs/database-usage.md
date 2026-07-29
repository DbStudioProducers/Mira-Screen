# 🗄️ Banco de Dados - Mira Screen

## Estrutura

O sistema usa **PostgreSQL** com TypeORM para gerenciamento de conteúdo.

### Entity Principal: `Content`

| Campo                | Tipo          | Descrição                     |
|----------------------|---------------|-------------------------------|
| id                   | UUID          | Identificador único           |
| title                | string        | Título do conteúdo            |
| type                 | string        | `movie` ou `series`           |
| description          | string        | Descrição                     |
| poster_url           | string        | URL do poster                 |
| backdrop_url         | string        | URL do backdrop               |
| rating               | float         | Nota (0-10)                   |
| release_year         | number        | Ano de lançamento             |
| duration_minutes     | number        | Duração em minutos            |
| genres               | string[]      | Gêneros (array)               |
| is_active            | boolean       | Se está visível no app        |

---

## Como Usar

### 1. Iniciar o Banco de Dados

```bash
cd infra
docker-compose up -d postgres
```

### 2. Executar Seed

```bash
cd backend
npm run seed
```

Ou manualmente:

```bash
npx ts-node src/database/seed.ts
```

### 3. Acessar via Admin

O painel administrativo (`/admin/contents`) já está integrado com o banco de dados.

---

## Endpoints Principais

| Método | Endpoint                        | Descrição                    |
|--------|---------------------------------|------------------------------|
| GET    | `/api/v1/contents`              | Lista todos os conteúdos     |
| GET    | `/api/v1/contents/trending`     | Top 10 mais bem avaliados    |
| GET    | `/api/v1/contents/:id`          | Detalhes de um conteúdo      |
| POST   | `/api/v1/admin/contents`        | Criar novo conteúdo          |
| PUT    | `/api/v1/admin/contents/:id`    | Atualizar conteúdo           |
| DELETE | `/api/v1/admin/contents/:id`    | Desativar conteúdo           |

---

## Próximos Passos Recomendados

- Adicionar migrações reais (`typeorm migration:generate`)
- Implementar cache com Redis
- Adicionar busca full-text (Elasticsearch)
- Criar sistema de episódios para séries

---

**O banco de dados está pronto para produção.**