import { Module } from '@nestjs/common';
import { PetTypesService } from './pet_types.service';
import { PetTypesController } from './pet_types.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PetTypesService, PrismaService],
  controllers: [PetTypesController]
})
export class PetTypesModule {}
