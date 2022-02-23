import { Module } from '@nestjs/common';
import { CitizenService } from './citizen.service';
import { CitizenController } from './citizen.controller';

@Module({
  controllers: [CitizenController],
  providers: [CitizenService]
})
export class CitizenModule {}
