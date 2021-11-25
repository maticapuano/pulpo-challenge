import { Like, Repository } from "typeorm";

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
        // @ts-ignore
        options.where[key] = Like(`%${query[key]}%`);
      }
    });
  }

  return await repository.find(options);
};
