import { Injectable } from '@nestjs/common';
import { pet_types, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PetTypesService {
  constructor(private prisma: PrismaService) {}

  async getOne(
    pet_typesWhereUniqueInput: Prisma.pet_typesWhereUniqueInput,
  ): Promise<pet_types | null> {
    return this.prisma.pet_types.findUnique({
      where: pet_typesWhereUniqueInput,
    });
  }

  async getMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.pet_typesWhereUniqueInput;
    where?: Prisma.pet_typesWhereInput;
    orderBy?: Prisma.pet_typesOrderByWithRelationInput;
  }): Promise<pet_types[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.pet_types.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createPetType(data: Prisma.pet_typesCreateInput): Promise<pet_types> {
    return this.prisma.pet_types.create({
      data,
    });
  }
}
