# ================================================
# Mira Screen - Guia de Upload para GitHub
# ================================================

## Como Fazer o Upload do Projeto no GitHub (Sem Terminal)

Como você não pode usar o modo Bash no momento, aqui estão **duas formas fáceis** de fazer o upload:

---

### **Método 1: Usando a Interface Web do GitHub (Mais Simples)**

1. Acesse [github.com](https://github.com) e faça login
2. Clique em **New** → **New repository**
3. Nome do repositório: `mira-screen`
4. Deixe como **Public** ou **Private**
5. **Não** inicialize com README (você já tem um)
6. Clique em **Create repository**

7. Na página do repositório, clique em **uploading an existing file**
8. Arraste **toda a pasta** `mira-screen` (ou selecione todos os arquivos)
9. Escreva a mensagem do commit: `Initial commit - Mira Screen`
10. Clique em **Commit changes**

---

### **Método 2: Usando o GitHub Desktop (Recomendado)**

1. Baixe e instale o **GitHub Desktop**:
   - Windows/Mac: [desktop.github.com](https://desktop.github.com)

2. Abra o GitHub Desktop
3. Clique em **File** → **Clone repository**
4. Vá na aba **URL**
5. Cole a URL do seu repositório (ex: `https://github.com/seu-usuario/mira-screen.git`)
6. Escolha uma pasta local para clonar

7. Copie **todo o conteúdo** da pasta `mira-screen` para dentro da pasta clonada
8. No GitHub Desktop, você verá todos os arquivos como "Changes"
9. Escreva a mensagem: `Initial commit - Mira Screen`
10. Clique em **Commit to main**
11. Clique em **Push origin**

---

### **Após o Upload**

Depois de subir o projeto, você deve:

1. Adicionar os **Secrets** no GitHub (veja `docs/github-secrets-setup.md`)
2. Ativar o workflow de automação (`.github/workflows/automation.yml`)
3. Configurar Vercel, Railway e Codemagic

---

### **Dica Importante**

- **Não** envie as pastas `node_modules`, `build` ou `.dart_tool`
- O arquivo `.gitignore` já está configurado para ignorar essas pastas

---

**Pronto!** Após o upload, o projeto estará no GitHub e pronto para as integrações.