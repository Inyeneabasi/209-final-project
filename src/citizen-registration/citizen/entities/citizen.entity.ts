import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn  } from 'typeorm';
import { Identity} from 'src/citizen-registration/identity/entities/identity.entity'
@Entity()
export class Citizen {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  firstName: string;

  @Column({ nullable: true })
  middleName: string;

  @Column()
  lastName: string;

  @Column()
  dateOfBirth: Date;

  @Column({ nullable: true })
  nationality: string;

  @Column()
  countryofbirth: string;

  @Column()
  stateofbirth: string;

  @Column()
  Townofbirth: string;

  @Column({ nullable: true })
  Residenceaddress: string;

  @Column()
  Profession: string;

  @JoinColumn()
  @OneToOne(type => Identity, identity => identity.citizen)
  identity: Identity;
}
