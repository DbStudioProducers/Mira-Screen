import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(email: string, password: string) {
    // TODO: Implement real validation with bcrypt + database
    const payload = { email, sub: 'user-uuid-placeholder' };
    return {
      access_token: this.jwtService.sign(payload),
      refresh_token: this.jwtService.sign(payload, { expiresIn: '7d' }),
    };
  }

  async validateUser(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}