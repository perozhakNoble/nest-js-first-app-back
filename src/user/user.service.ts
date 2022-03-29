import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { users, Prisma } from '@prisma/client';
import { GetUserDto } from './dto/get-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getOne(
    userWhereUniqueInput: Prisma.usersWhereUniqueInput
  ): Promise<GetUserDto | null> {
    return this.prisma.users
      .findUnique({
        where: userWhereUniqueInput,
        include: {
          pets: {
            include: {
              pet_types: true
            }
          }
        }
      })
      .then((user) => ({
        user_id: user.user_id,
        username: user.username,
        email: user.email,
        full_name: user.full_name,
        birthday: user.birthday,
        pets: user.pets.map((pet) => {
          return {
            pet_id: pet.pet_id,
            name: pet.name,
            birthday: pet.birthday,
            type: pet.pet_types.type
          };
        })
      }));
  }

  async deleteById(
    userWhereUniqueInput: Prisma.usersWhereUniqueInput
  ): Promise<GetUserDto | null> {
    return this.prisma.users
      .delete({
        where: userWhereUniqueInput,
        include: {
          pets: {
            include: {
              pet_types: true
            }
          }
        }
      })
      .then((user) => ({
        user_id: user.user_id,
        username: user.username,
        email: user.email,
        full_name: user.full_name,
        birthday: user.birthday,
        pets: user.pets.map((pet) => {
          return {
            pet_id: pet.pet_id,
            name: pet.name,
            birthday: pet.birthday,
            type: pet.pet_types.type
          };
        })
      }));
  }

  async getMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.usersWhereUniqueInput;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput;
  }): Promise<GetUserDto[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.users
      .findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
        include: {
          pets: {
            include: {
              pet_types: true
            }
          }
        }
      })
      .then((users) =>
        users.map((user) => ({
          user_id: user.user_id,
          username: user.username,
          email: user.email,
          full_name: user.full_name,
          birthday: user.birthday,
          pets: user.pets.map((pet) => {
            return {
              pet_id: pet.pet_id,
              name: pet.name,
              birthday: pet.birthday,
              type: pet.pet_types.type
            };
          })
        }))
      );
  }

  async createUser(data: Prisma.usersCreateInput): Promise<users> {
    return this.prisma.users.create({
      data
    });
  }

  async updateUser(params: {
    where: Prisma.usersWhereUniqueInput;
    data: Prisma.usersUpdateInput;
  }): Promise<users> {
    const { where, data } = params;
    return this.prisma.users.update({
      data,
      where
    });
  }
}
