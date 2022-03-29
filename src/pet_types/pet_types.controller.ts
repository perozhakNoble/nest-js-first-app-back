import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { pet_types as PetTypesModel } from '@prisma/client';
import { PetTypesService } from './pet_types.service';

@Controller('pet-types')
@ApiTags('Pet types')
export class PetTypesController {
  constructor(private readonly petTypesService: PetTypesService) {}

  @Post()
  async createPet(
    @Body() petTypeData: { type: string }
  ): Promise<PetTypesModel> {
    return this.petTypesService.createPetType(petTypeData);
  }

  @Get()
  async getPets(): Promise<PetTypesModel[]> {
    return this.petTypesService.getMany({});
  }
}
