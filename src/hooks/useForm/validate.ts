interface Validation {
  func: (...args: any[]) => boolean;
  message: string;
  args: any[];
}

type Validate = {
  add(func: (...args: any[]) => boolean, message: string, ...args: any[]): Validate;
  exec(input: unknown): string;
  required(message: string): Validate;
  email(message: string): Validate;
  max(n: number, message: string): Validate;
  min(n: number, message: string): Validate;
};

type Schema<T> = {
  [key in keyof T]: Validate;
};

const min = (n: number, input: unknown) => {
  switch (typeof input) {
    case 'string':
      return input.length >= n;
    case 'number':
      return input >= n;
    default:
      return false;
  }
};

const max = (n: number, input: unknown) => {
  switch (typeof input) {
    case 'string':
      return input.length <= n;
    case 'number':
      return input <= n;
    default:
      return false;
  }
};

const required = (input: unknown) => Boolean(input);

const email = (input: unknown) => {
  return typeof input === 'string'
    ? /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input)
    : false;
};

export const validate = function (): Validate {
  const validations: Validation[] = [];
  return {
    add(func: (...args: any[]) => boolean, message: string, ...args: any[]) {
      validations.push({ func, message, args });
      return this;
    },
    exec(input: unknown) {
      for (const { args, func, message } of validations) {
        if (!func(...args, input)) {
          return message;
        }
      }
      return '';
    },
    required(message: string) {
      return this.add(required, message);
    },
    email(message: string) {
      return this.add(email, message);
    },
    max(n: number, message: string) {
      return this.add(max, message, n);
    },
    min(n: number, message: string) {
      return this.add(min, message, n);
    },
  };
};

type Errors = {
  [key: string]: string;
};

export const resolver =
  <T>(schema: Schema<T>) =>
  (input: any) => {
    const errors: Errors = {};
    for (const key in schema) {
      errors[key] = schema[key].exec(input[key]);
    }
    return errors;
  };
