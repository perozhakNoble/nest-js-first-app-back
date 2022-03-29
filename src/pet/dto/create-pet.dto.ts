import { ApiProperty } from '@nestjs/swagger';

export class CreatePetDto {
  @ApiProperty({ type: String, required: true })
  name: string;

  @ApiProperty({ type: Number, required: true })
  ownerId: number;

  @ApiProperty({ type: Date, required: false })
  birthday?: Date;

  @ApiProperty({ type: Number, required: true })
  type: number;
}
