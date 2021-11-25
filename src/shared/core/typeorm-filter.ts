import { Like, Repository } from "typeorm";
import { dateToString, isDate } from "./utils";

export type ExpressQuery<T = any> = Record<keyof T, any>;

export const typeormFilterHelper = async <T = any>(
  repository: Repository<T>,
  query?: Partial<ExpressQuery<T>>,
) => {
  const columns = repository.metadata.columns.map((column) => column.propertyName);
  const options: any = {
    where: {},
  };

  if (query) {
    Object.keys(query).forEach((key) => {
      if (columns.includes(key)) {
        const value = (query as any)[key];
        const isDateValue = isDate(value);
        const transformValue = isDateValue ? dateToString(value) : Like(`%${value}%`);
        console.log(`${key} = ${transformValue}`);

        options.where[key] = transformValue;
      }
    });
  }

  return await repository.find(options);
};
