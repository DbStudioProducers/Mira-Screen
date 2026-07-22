# GraphQL - Mira Screen

Endpoint: `http://localhost:3000/graphql`

## Queries

```graphql
query {
  contents {
    id
    title
    type
    poster_url
    rating
  }
}

query {
  content(id: "1") {
    id
    title
  }
}
```

O playground GraphQL está disponível em `/graphql`.