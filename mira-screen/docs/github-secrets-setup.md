# ================================================
# Mira Screen - GitHub Secrets Configuration
# ================================================

## Secrets Necessários no GitHub

Para que o workflow de automação funcione corretamente, você precisa adicionar os seguintes **Secrets** no repositório:

### Como adicionar Secrets:

1. Vá no seu repositório no GitHub
2. Clique em **Settings** → **Secrets and variables** → **Actions**
3. Clique em **New repository secret**
4. Adicione cada um dos secrets abaixo:

---

### Lista de Secrets

| Nome do Secret                    | Descrição                                      | Onde obter |
|-----------------------------------|------------------------------------------------|------------|
| `VERCEL_TOKEN`                    | Token de autenticação do Vercel                | Vercel Dashboard → Settings → Tokens |
| `VERCEL_ORG_ID`                   | ID da organização no Vercel                    | Vercel → Project Settings |
| `VERCEL_PROJECT_ID`               | ID do projeto do Admin no Vercel               | Vercel → Project Settings |
| `RAILWAY_TOKEN`                   | Token de autenticação do Railway               | Railway → Account Settings → Tokens |
| `RAILWAY_BACKEND_URL`             | URL pública do Backend no Railway              | Railway → Project → Settings |
| `SUPABASE_URL`                    | URL do projeto Supabase                        | Supabase → Project Settings → API |
| `SUPABASE_ANON_KEY`               | Chave pública do Supabase                      | Supabase → Project Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY`       | Chave de serviço do Supabase                   | Supabase → Project Settings → API |
| `CODEMAGIC_API_KEY`               | Chave da API do Codemagic                      | Codemagic → Account → Integrations |
| `CODEMAGIC_APP_ID`                | ID do aplicativo no Codemagic                  | Codemagic → App Settings |

---

### Exemplo de Valores

```env
VERCEL_TOKEN=xxxxxxxxxxxx
VERCEL_ORG_ID=team_xxxxxxxx
VERCEL_PROJECT_ID=prj_xxxxxxxx
RAILWAY_TOKEN=xxxxxxxxxxxx
RAILWAY_BACKEND_URL=https://backend-production.up.railway.app
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
CODEMAGIC_API_KEY=xxxxxxxxxxxx
CODEMAGIC_APP_ID=xxxxxxxxxxxx
```

---

### Ordem de Configuração Recomendada

1. Criar conta e projeto no **Supabase**
2. Criar repositório no **GitHub**
3. Fazer upload do projeto
4. Configurar **Vercel** e obter os tokens
5. Configurar **Railway** e obter o token
6. Configurar **Codemagic** e obter API Key + App ID
7. Adicionar todos os Secrets no GitHub
8. Fazer push para `main` para disparar o workflow

---

**Após configurar todos os Secrets, o workflow de automação irá executar automaticamente.**