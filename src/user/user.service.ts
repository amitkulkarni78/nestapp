import { Injectable } from '@nestjs/common';
import { User } from './user';
import { CreateUserDto } from './create-user-dto';

@Injectable()
export class UserService {

    private readonly users: User[] = [];

    findAllUsers(): User[] {
        return this.users;
    }

    findUserById(id: string): User {
        const user: User = this.users.find(obj => obj.id === id);
        return user;
    }

    createUser(createUserDto: CreateUserDto): User {
        const id: number = ((new Date().getTime()) / 1000) | 0;
        const user: User = new User(
            id.toString(),
            createUserDto.firstName,
            createUserDto.lastName,
            createUserDto.email,
            createUserDto.password);
        this.users.push(user);
        return user;
    }

    updateUser(id: string, createUserDto: CreateUserDto): User {
        const index: number = this.users.findIndex(obj => obj.id === id);
        this.users[index].firstName = createUserDto.firstName ? createUserDto.firstName : this.users[index].firstName;
        this.users[index].lastName = createUserDto.lastName ? createUserDto.lastName : this.users[index].lastName;
        this.users[index].email = createUserDto.email ? createUserDto.email : this.users[index].email;
        this.users[index].password = createUserDto.password ? createUserDto.password : this.users[index].password;
        const user: User = this.users.find(obj => obj.id === id);
        return user;
    }

    deleteUser(id: string): User {
        const user: User = this.users.find(obj => obj.id === id);
        const index: number = this.users.findIndex(obj => obj.id === id);
        this.users.splice(index, 1);
        return user;
    }
}
