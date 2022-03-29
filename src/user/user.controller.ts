import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { users as UserModel } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { UserService } from './user.service';
@Controller('users')
@ApiTags('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<GetUserDto[]> {
    return this.userService.getMany({});
  }

  @Get(':id')
  async getUser(@Param('id') id: number): Promise<GetUserDto> {
    return this.userService.getOne({ user_id: id });
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<GetUserDto> {
    return this.userService.deleteById({ user_id: id });
  }

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.'
  })
  @ApiBody({
    required: true,
    type: CreateUserDto
  })
  async createUser(@Body() userData: CreateUserDto): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
