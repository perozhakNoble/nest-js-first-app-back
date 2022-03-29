import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PetModule } from './pet/pet.module';
import { PetTypesModule } from './pet_types/pet_types.module';

@Module({
  imports: [UserModule, PetModule, PetTypesModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
