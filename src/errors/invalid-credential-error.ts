import { ApplicationError } from "@/protocols/protocols";

export function validationError(): ApplicationError {
    return {
        name: 'ValidationError',
        message: 'Validation failed',
    };
}