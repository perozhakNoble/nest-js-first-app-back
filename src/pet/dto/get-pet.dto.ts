import { ApiProperty } from '@nestjs/swagger';

export class GetPetDto {
  @ApiProperty({ type: Number })
  pet_id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Number })
  owner_id?: number;

  @ApiProperty({ type: String })
  owner_full_name?: string;

  @ApiProperty({ type: Date, required: false })
  birthday?: Date;

  @ApiProperty({ type: String })
  type: string;
}
