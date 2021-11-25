import * as yup from "yup";
import { VehicleStatus } from "../domain/schema/IVehicle";

export const updateVehicleValidation = yup.object().shape({
  identification: yup.string().optional(),
  brand: yup.string().optional(),
  model: yup.string().optional(),
  color: yup.string().optional(),
  status: yup.mixed().oneOf<VehicleStatus>(Object.values(VehicleStatus)).optional(),
  news: yup.string().optional(),
  date_ingress: yup.date().optional(),
});
