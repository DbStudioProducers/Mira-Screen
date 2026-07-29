# ================================================
# Mira Screen - Deployment Checklist
# ================================================

## ✅ Checklist Completo de Configuração

Siga esta ordem **exatamente** para configurar todo o projeto.

---

### **FASE 1: Supabase (Banco de Dados + Storage + Auth)**

- [ ] Criar conta gratuita em [supabase.com](https://supabase.com)
- [ ] Criar novo projeto chamado `mira-screen-db`
- [ ] Ir em **Storage** → Criar bucket `mira-content` (público)
- [ ] Executar as políticas SQL (`docs/supabase-storage-policies.md`)
- [ ] Copiar as credenciais:
  - [ ] `SUPABASE_URL`
  - [ ] `SUPABASE_ANON_KEY`
  - [ ] `SUPABASE_SERVICE_ROLE_KEY`
  - [ ] `SUPABASE_DB_HOST`
  - [ ] `SUPABASE_DB_PASSWORD`
- [ ] Executar o seed (`backend/src/database/seed.sql`) no SQL Editor

---

### **FASE 2: GitHub**

- [ ] Criar repositório chamado `mira-screen`
- [ ] Fazer upload de **todo o conteúdo** da pasta `mira-screen`
- [ ] Adicionar os **Secrets** (veja `docs/github-secrets-setup.md`)
- [ ] Fazer o primeiro commit na branch `main`

---

### **FASE 3: Vercel (Painel Administrativo)**

- [ ] Criar conta em [vercel.com](https://vercel.com)
- [ ] Importar o repositório `mira-screen`
- [ ] Definir **Root Directory** = `admin`
- [ ] Adicionar as variáveis de ambiente:
  - [ ] `NEXT_PUBLIC_SUPABASE_URL`
  - [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - [ ] `NEXT_PUBLIC_API_URL`
- [ ] Fazer Deploy

---

### **FASE 4: Railway (Backend)**

- [ ] Criar conta em [railway.app](https://railway.app)
- [ ] Criar novo projeto
- [ ] Adicionar as variáveis de ambiente do Supabase
- [ ] Fazer deploy da pasta `backend`
- [ ] Copiar a URL pública do Backend

---

### **FASE 5: Codemagic (Compilação do Flutter)**

- [ ] Criar conta em [codemagic.io](https://codemagic.io)
- [ ] Conectar o repositório GitHub
- [ ] O arquivo `codemagic.yaml` já está configurado
- [ ] Adicionar os Secrets do Codemagic no GitHub

---

### **FASE 6: Testes Finais**

- [ ] Testar Login no Admin (Vercel)
- [ ] Testar Upload de Imagem e Vídeo
- [ ] Testar Criação de Conteúdo
- [ ] Verificar se os dados aparecem no Supabase
- [ ] Verificar build no Codemagic

---

**Após completar todas as fases, o projeto estará 100% funcional.**