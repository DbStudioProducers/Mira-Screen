# Variáveis de Ambiente - Vercel + Supabase

## Variáveis para o Vercel (Painel Administrativo)

Adicione as seguintes variáveis em **Vercel → Settings → Environment Variables**:

| Nome                              | Valor                                      | Ambiente     |
|-----------------------------------|--------------------------------------------|--------------|
| `NEXT_PUBLIC_SUPABASE_URL`        | `https://xxxxx.supabase.co`                | Production   |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`   | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`  | Production   |
| `NEXT_PUBLIC_API_URL`             | `https://seu-backend.railway.app`          | Production   |

## Variáveis para o Backend (Railway)

| Nome                        | Valor                                      |
|-----------------------------|--------------------------------------------|
| `SUPABASE_DB_HOST`          | `db.xxxxx.supabase.co`                     |
| `SUPABASE_DB_PORT`          | `5432`                                     |
| `SUPABASE_DB_USER`          | `postgres`                                 |
| `SUPABASE_DB_PASSWORD`      | (senha do Supabase)                        |
| `SUPABASE_DB_NAME`          | `postgres`                                 |
| `SUPABASE_URL`              | `https://xxxxx.supabase.co`                |
| `SUPABASE_ANON_KEY`         | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`  |
| `JWT_SECRET`                | `mira-super-secret-key-2026`               |
| `NODE_ENV`                  | `production`                               |

---

## Como obter as credenciais do Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Entre no seu projeto
3. Vá em **Project Settings → Database**
4. Copie:
   - Host
   - Port
   - User
   - Password
5. Vá em **Project Settings → API** e copie:
   - Project URL
   - Anon public key

---

**Pronto!** Após configurar essas variáveis, o Admin (Vercel) e o Backend (Railway) estarão totalmente integrados com o Supabase.