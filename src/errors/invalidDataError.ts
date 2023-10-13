import { ApplicationError } from "protocols/protocols";

export function invalidDataError(details: string): ApplicationError {
  return {
    name: 'InvalidDataError',
    message: `Invalid data: ${details}`,
  };
}
