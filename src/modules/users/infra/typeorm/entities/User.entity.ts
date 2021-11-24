import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "../../../domain/schema/IUser";

@Entity("users")
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public full_name: string;

  @Column()
  public email: string;

  @Column({ select: false })
  public password: string;
}
