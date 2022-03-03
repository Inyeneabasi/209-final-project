import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitizenService } from './citizen.service';
import { CitizenController } from './citizen.controller';
import { Citizen } from './entities/citizen.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Citizen])],
  controllers: [CitizenController],
  providers: [CitizenService]
})
export class CitizenModule {}
