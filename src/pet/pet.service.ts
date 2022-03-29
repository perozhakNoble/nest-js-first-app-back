import { Injectable } from '@nestjs/common';
import { pets, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { GetPetDto } from './dto/get-pet.dto';

@Injectable()
export class PetService {
  constructor(private prisma: PrismaService) {}

  async createPet(data: Prisma.petsCreateInput): Promise<pets> {
    return this.prisma.pets.create({
      data
    });
  }

  async getOne(id: number): Promise<GetPetDto> {
    return this.prisma.pets
      .findUnique({
        where: {
          pet_id: id
        },
        include: {
          pet_types: true,
          users: true
        }
      })
      .then((pet) => ({
        pet_id: pet.pet_id,
        name: pet.name,
        birthday: pet.birthday,
        type: pet.pet_types.type,
        owner_id: pet.user_id,
        owner_full_name: pet.users.full_name
      }));
  }

  async getMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.petsWhereUniqueInput;
    where?: Prisma.petsWhereInput;
    orderBy?: Prisma.petsOrderByWithRelationInput;
  }): Promise<GetPetDto[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.pets
      .findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
        include: {
          pet_types: true,
          users: true
        }
      })
      .then((pets) => {
        return pets.map((pet) => {
          return {
            pet_id: pet.pet_id,
            name: pet.name,
            birthday: pet.birthday,
            type: pet.pet_types.type,
            owner_id: pet.user_id,
            owner_full_name: pet.users.full_name
          };
        });
      });
  }

  async deleteById(id: number): Promise<GetPetDto> {
    return this.prisma.pets
      .delete({
        where: {
          pet_id: id
        },
        include: {
          pet_types: true,
          users: true
        }
      })
      .then((pet) => ({
        pet_id: pet.pet_id,
        name: pet.name,
        birthday: pet.birthday,
        type: pet.pet_types.type,
        owner_id: pet.user_id,
        owner_full_name: pet.users.full_name
      }));
  }
}
