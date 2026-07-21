# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in **Mira Screen**, please report it responsibly.

**Do not create a public issue.**

Instead, send an email to: **security@mirascreen.com**

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

We will respond within **48 hours** and work with you to resolve the issue.

## Supported Versions

| Version | Supported          |
|---------|--------------------|
| 1.0.x   | ✅ Latest release  |
| < 1.0   | ❌ Not supported   |

## Security Best Practices

- All API endpoints use JWT authentication
- Passwords are hashed using bcrypt
- Content is protected with DRM where applicable
- Rate limiting is enabled on all public endpoints

Thank you for helping keep Mira Screen secure!