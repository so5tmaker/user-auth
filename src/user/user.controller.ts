import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import User from '../models/user.model';

import { ApiPath, UserApiPath } from 'shared/enums/api';

@Controller(ApiPath.API)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post(UserApiPath.ADD)
  async addUser(@Body() userData: Partial<User>): Promise<User> {
    if (userData.password) {
      const saltRounds = 10;
      userData.password = await bcrypt.hash(userData.password, saltRounds);
    }

    return this.userService.createUser(userData);
  }

  @Get(`${UserApiPath.GET}${UserApiPath.$ID}`)
  @UseGuards(JwtAuthGuard)
  async getUser(@Param('id') id: number): Promise<User> {
    const user = await this.userService.findById(id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }
}
