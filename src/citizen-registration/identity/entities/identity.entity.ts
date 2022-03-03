import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Identity {
  
  @PrimaryGeneratedColumn()
  NIN: number; 

  @Column({ nullable: true })
  BVN: number;

  @Column()
  mobileNumber: number;
}