import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

import { ApiPath, AuthApiPath } from 'shared/enums/api';
import { LoginDto } from 'shared/types/auth';

@Controller(`${ApiPath.API}${ApiPath.AUTH}`)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(`${AuthApiPath.LOGIN}`)
  async login(@Body() loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.authService.validateUser(email, password);

    if (!user) throw new UnauthorizedException('Invalid credentials');

    return this.authService.generateToken(user);
  }
}
