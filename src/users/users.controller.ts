import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { identity } from 'rxjs';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUsers(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUsersById(@Param('id') id: string): User {
    //ToDO auto parse id
    return this.usersService.findById(Number(id));
  }

  @Post()
  createUser(@Body() body: CreateUserDTO): User {
    return this.usersService.createUser(body);
  }
}
