import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitizenRegistrationModule } from './citizen-registration/citizen-registration.module';
import { IdentityModule } from './identity/identity.module';
import { CitizenModule } from './citizen/citizen.module';
import { CitizenRegistrationModule } from './citizen-registration/citizen-registration.module';

@Module({
  imports: [CitizenRegistrationModule, CitizenModule, IdentityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
