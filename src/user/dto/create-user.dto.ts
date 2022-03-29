import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ type: String, required: true })
  username: string;

  @ApiProperty({ type: String, required: true })
  email: string;

  @ApiProperty({ type: String, required: true })
  full_name: string;

  @ApiProperty({ type: Date, required: false })
  birthday?: Date;
}
