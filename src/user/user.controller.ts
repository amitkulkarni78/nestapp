import { Controller, Get, Body, Param, Post, Delete, Put } from '@nestjs/common';
import { User } from './user';
import { CreateUserDto } from './create-user-dto';
import { UserService } from './user.service';
import { create } from 'domain';

@Controller('users')
export class UserController {
    userService = new UserService();

    @Get()
    async findAllUsers() {
        return await this.userService.findAllUsers();
    }

    @Post('user')
    async createUser(@Body() createUserDto: CreateUserDto) {
        return await this.userService.createUser(createUserDto);
    }

    @Get('user/:id')
    async findUserById(@Param('id') id: string) {
        return await this.userService.findUserById(id);
    }

    @Put('user/:id')
    async findAndUpdateUser(@Param('id') id: string, @Body() createUserDto: CreateUserDto) {
        return await this.userService.updateUser(id, createUserDto);
    }

    @Delete('user/:id')
    async deleteUser(@Param('id') id: string) {
        return await this.userService.deleteUser(id);
    }
}
