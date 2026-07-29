# Mira Screen - Cliente Flutter

## Compilação no Codemagic

**Erro comum:** `Did not find xcodeproj`

### Solução (Execute antes de enviar para o Codemagic):

```bash
cd client
chmod +x scripts/generate_platforms.sh
./scripts/generate_platforms.sh
```

Ou manualmente:

```bash
flutter create --platforms=ios,android .
```

Depois disso, faça commit das pastas `ios/` e `android/` geradas.

### Build no Codemagic

- **Platform**: iOS + Android
- **Workflow**: `codemagic.yaml` (já configurado na raiz)
- **Flutter version**: 3.24.0

---

**Importante:** Após rodar o comando acima, as pastas `ios/` e `android/` serão criadas e o erro desaparecerá.