import { ValidationError } from "yup";
import { ErrorResponse } from "../../errors/BaseError";

const processSingleError = (error: ValidationError): ErrorResponse => {
  const value = (error.params && (error.params.value as string)) ?? null;

  return [
    {
      message: error.message,
      path: error.path,
      value,
    },
  ];
};

const yupValidationParserForArray = (error: ValidationError): ErrorResponse => {
  const errors = error.inner.map((err) => {
    const value = (err.params && (err.params.value as string)) ?? null;

    return {
      message: err.message,
      field: err.path,
      value,
    };
  });

  return errors;
};

export const yupValidationParser = (error: ValidationError): ErrorResponse => {
  return error.inner.length > 0 ? yupValidationParserForArray(error) : processSingleError(error);
};
