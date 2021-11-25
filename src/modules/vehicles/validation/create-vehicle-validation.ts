import * as yup from "yup";
import { VehicleStatus } from "../domain/schema/IVehicle";

export const createVehicleValidation = yup
  .object()
  .shape({
    identification: yup.string().required(),
    brand: yup.string().required(),
    model: yup.string().required(),
    color: yup.string().required(),
    date_ingress: yup.date().required(),
    assigned: yup.boolean().optional(),
    news: yup.string().optional(),
    status: yup
      .mixed()
      .oneOf<VehicleStatus>(Object.values(VehicleStatus))
      .default(VehicleStatus.Active)
      .optional(),
  })
  .required();
