export enum VehicleStatus {
  Active,
  Inactive,
}

export interface IVehicle {
  id: string;
  identification: string;
  brand: string;
  model: string;
  color: string;
  date_ingress: Date;
  status: VehicleStatus;
  assigned: boolean;
}
