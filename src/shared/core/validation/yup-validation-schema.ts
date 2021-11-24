import { BaseSchema } from "yup";

export const yupValidationSchema = async <T = any>(
  schema: BaseSchema<T>,
  data: any,
): Promise<T> => {
  const result = await schema.validateSync(data, {
    abortEarly: false,
    stripUnknown: true,
  });

  return result;
};
