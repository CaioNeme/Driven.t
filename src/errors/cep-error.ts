import { ApplicationError } from '@/protocols';

export function cpfError(message: string): ApplicationError {
  return {
    name: 'CEPInvalid',
    message,
  };
}
