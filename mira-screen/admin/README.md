# Mira Screen Admin - Versão em Nuvem

Este é o Painel Administrativo completo da Mira Screen.

## Deploy Rápido (Recomendado)

### Opção 1: Vercel (Mais fácil)

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Importe o repositório `mira-screen`
3. Defina a pasta raiz como `admin`
4. Clique em **Deploy**

Ou use o botão abaixo (após subir no GitHub):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Opção 2: Netlify

```bash
cd admin
npm install
npm run build
```

Depois faça deploy manualmente.

## Variáveis de Ambiente (Produção)

```env
NEXT_PUBLIC_API_URL=https://api.mirascreen.com
```

## Acesso

Após o deploy, o painel ficará disponível em:

- `https://mira-screen-admin.vercel.app`
- Ou o domínio que você configurar

---

**O painel já está 100% funcional** com CRUD de conteúdo.