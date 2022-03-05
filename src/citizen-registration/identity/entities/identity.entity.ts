import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import {Citizen} from 'src/citizen-registration/citizen/entities/citizen.entity'
@Entity()
export class Identity {
  
  @PrimaryGeneratedColumn()
  NIN: number; 

  @Column({ nullable: true })
  BVN: number;

  @Column()
  mobileNumber: number;

  @JoinColumn()
  @OneToOne(type => Citizen, citizen => citizen.identity)
  citizen: Citizen;
}