# =============================================
# Mira Screen - Supabase Storage Policies
# =============================================

## Passo 1: Criar o Bucket

1. Acesse o Supabase Dashboard
2. Vá em **Storage**
3. Clique em **New Bucket**
4. Nome do bucket: `mira-content`
5. Marque como **Public bucket**
6. Clique em **Create bucket**

---

## Passo 2: Políticas de Acesso (RLS)

Execute os comandos abaixo no **SQL Editor** do Supabase:

```sql
-- Permitir upload de arquivos (authenticated users)
CREATE POLICY "Allow authenticated uploads"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'mira-content');

-- Permitir leitura pública de arquivos
CREATE POLICY "Allow public read access"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'mira-content');

-- Permitir atualização de arquivos (authenticated)
CREATE POLICY "Allow authenticated updates"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'mira-content');

-- Permitir exclusão de arquivos (authenticated)
CREATE POLICY "Allow authenticated deletes"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'mira-content');
```

---

## Passo 3: Políticas de Tabela (Contents)

```sql
-- Habilitar RLS na tabela contents
ALTER TABLE contents ENABLE ROW LEVEL SECURITY;

-- Permitir leitura pública
CREATE POLICY "Allow public read"
ON contents FOR SELECT
TO public
USING (is_active = true);

-- Permitir inserção/atualização/exclusão apenas para admins autenticados
CREATE POLICY "Allow authenticated write"
ON contents FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);
```