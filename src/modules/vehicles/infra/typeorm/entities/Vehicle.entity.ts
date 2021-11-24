import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IVehicle, VehicleStatus } from "../../../domain/schema/IVehicle";

@Entity("vehicles")
export class VehicleEntity implements IVehicle {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public identification: string;

  @Column()
  public brand: string;

  @Column()
  public model: string;

  @Column()
  public color: string;

  @Column()
  public date_ingress: Date;

  @Column()
  public status: VehicleStatus;

  @Column({ nullable: true })
  public assigned: boolean;
}
