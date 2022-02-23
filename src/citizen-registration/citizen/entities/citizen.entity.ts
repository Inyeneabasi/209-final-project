import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
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
}
