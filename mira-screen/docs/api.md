# 📡 API Documentation - Mira Screen

## Base URLs

- **REST**: `https://api.mirascreen.com/v1`
- **GraphQL**: `https://api.mirascreen.com/graphql`

## Autenticação

Todos os endpoints (exceto `/auth/*`) exigem:

```
Authorization: Bearer <access_token>
```

## Principais Endpoints REST

### Auth

- `POST /auth/login`
- `POST /auth/register`
- `POST /auth/refresh`
- `POST /auth/logout`

### Content

- `GET /contents` → Lista de conteúdo com filtros
- `GET /contents/:id`
- `GET /contents/:id/episodes`
- `GET /contents/trending`
- `GET /contents/search?q=...`

### User

- `GET /me`
- `PUT /me`
- `GET /me/profiles`
- `POST /me/watch-history`

### Admin

- `POST /admin/contents`
- `PUT /admin/contents/:id`
- `DELETE /admin/contents/:id`

## GraphQL (exemplo)

```graphql
query GetContent($id: ID!) {
  content(id: $id) {
    id
    title
    description
    episodes {
      id
      title
    }
  }
}
```

## Rate Limiting

- 100 req/min por IP
- 1000 req/min por usuário autenticado

## Respostas de Erro

```json
{
  "error": "Unauthorized",
  "message": "Token expirado",
  "code": 401
}
```