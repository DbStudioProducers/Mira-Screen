# 🔒 Security & Compliance - Mira Screen

## Medidas de Segurança Implementadas

### 1. Autenticação & Autorização
- JWT com expiração curta (15 min)
- Refresh tokens rotativos (httpOnly + secure cookie)
- OAuth2 (Google, Apple, Facebook)

### 2. Proteção de Conteúdo
- DRM Widevine + FairPlay
- Signed URLs com expiração (CloudFront)
- Watermarking dinâmico

### 3. API Security
- Rate limiting + DDoS protection
- Input sanitization
- CORS restrito
- Helmet + CSRF

### 4. Dados
- Senhas com bcrypt (cost 12)
- Dados sensíveis criptografados em repouso (AES-256)
- GDPR / LGPD compliance ready

### 5. Infra
- WAF + Shield
- VPC privada
- Secrets via AWS Secrets Manager / Vault

## Threat Model

- Prevenção de scraping
- Proteção contra account sharing
- Monitoramento de anomalias com ML

## Compliance

- LGPD
- GDPR
- SOC 2 Type II (planejado)