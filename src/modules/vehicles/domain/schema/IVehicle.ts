export enum VehicleStatus {
  Active = "active",
  Inactive = "inactive",
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
