import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { pets as PetModel } from '@prisma/client';
import { CreatePetDto } from './dto/create-pet.dto';
import { GetPetDto } from './dto/get-pet.dto';
import { PetService } from './pet.service';

@Controller('pets')
@ApiTags('Pets')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post()
  @ApiBody({
    required: true,
    type: CreatePetDto
  })
  async createPet(@Body() petData: CreatePetDto): Promise<PetModel> {
    return this.petService.createPet({
      name: petData.name,
      birthday: petData.birthday,
      users: {
        connect: { user_id: petData.ownerId }
      },
      pet_types: {
        connect: { pet_type_id: petData.type }
      }
    });
  }

  @Get()
  async getPets(): Promise<GetPetDto[]> {
    return this.petService.getMany({});
  }

  @Get(':id')
  async getPet(@Param('id') id: number): Promise<GetPetDto> {
    return this.petService.getOne(id);
  }

  @Delete(':id')
  async deletePet(@Param('id') id: number): Promise<GetPetDto> {
    return this.petService.deleteById(id);
  }
}
