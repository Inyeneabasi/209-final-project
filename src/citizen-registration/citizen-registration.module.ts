import {IdentityModule} from './identity/identity.module';
import {CitizenModule} from './citizen/citizen.module';
import { Module } from '@nestjs/common';

@Module({imports: [CitizenModule, IdentityModule]

})
export class CitizenRegistrationModule {}
