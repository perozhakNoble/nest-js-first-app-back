import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import { GetPetDto } from 'src/pet/dto/get-pet.dto';

export class GetUserDto {
  @ApiProperty({ type: Number })
  user_id: number;

  @ApiProperty({ type: String })
  username: string;

  @ApiProperty({ type: String })
  email: string;

  @ApiProperty({ type: String })
  full_name: string;

  @ApiProperty({ type: Date, required: false })
  birthday?: Date;

  @ApiProperty({ type: GetPetDto, isArray: true })
  @IsArray()
  pets: GetPetDto[];
}
