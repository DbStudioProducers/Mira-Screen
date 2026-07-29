# 🗄️ Database Schema - Mira Screen

## Visão Geral

- **PostgreSQL**: Dados transacionais e relacionais
- **MongoDB**: Metadados de conteúdo e analytics
- **Redis**: Cache, sessões, rate limiting

---

## PostgreSQL (Schema Principal)

### Tabelas Principais

```sql
-- Usuários
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100),
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    is_active BOOLEAN DEFAULT TRUE,
    subscription_plan VARCHAR(50) DEFAULT 'free'
);

-- Perfis
CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(50) NOT NULL,
    avatar_url TEXT,
    language VARCHAR(10) DEFAULT 'pt-BR',
    maturity_rating VARCHAR(10) DEFAULT 'PG-13'
);

-- Conteúdo
CREATE TABLE contents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    type VARCHAR(20) CHECK (type IN ('movie','series','live')),
    release_year INT,
    duration_minutes INT,
    rating DECIMAL(3,1),
    poster_url TEXT,
    backdrop_url TEXT,
    trailer_url TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Episódios (para séries)
CREATE TABLE episodes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content_id UUID REFERENCES contents(id),
    season_number INT,
    episode_number INT,
    title VARCHAR(255),
    description TEXT,
    duration_minutes INT,
    video_url TEXT,
    thumbnail_url TEXT
);

-- Histórico de visualização
CREATE TABLE watch_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    content_id UUID REFERENCES contents(id),
    episode_id UUID REFERENCES episodes(id),
    progress_seconds INT,
    completed BOOLEAN DEFAULT FALSE,
    watched_at TIMESTAMPTZ DEFAULT NOW()
);

-- Playlists / Listas
CREATE TABLE user_lists (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    name VARCHAR(100),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE user_list_items (
    list_id UUID REFERENCES user_lists(id),
    content_id UUID REFERENCES contents(id),
    added_at TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (list_id, content_id)
);
```

---

## MongoDB Collections

- `content_metadata`
- `analytics_events`
- `recommendations`

---

## Redis Keys (exemplos)

- `session:{userId}` → JWT + refresh token
- `content:{contentId}:views` → contador de views
- `trending:global` → lista de trending

## Índices Recomendados

```sql
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_contents_type ON contents(type);
CREATE INDEX idx_watch_history_user ON watch_history(user_id, watched_at DESC);
```