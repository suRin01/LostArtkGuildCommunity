import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_idx: number;

  @Column()
  username: string;

  @Column()
  name: string;
  @Column()
  password: string;
  @Column()
  sexdstnCd: number;
  @Column({ nullable: true})
  mobilePhone: string;
  @Column({ nullable: true})
  mainServer: string;
  @Column({ nullable: true})
  mainCharacter: number;

  @Column({ default: true })
  isActive: boolean;
}








