export type Resolver<T> = (values: T) => Partial<T>;

export interface UseForm<T> {
  resolver?: Resolver<T>;
  initialState?: Partial<T>;
}

export interface UseFormReturn<T> {
  register: Register<T>;
  values: T;
  errors: Partial<T>;
  isSubmitting: boolean;
  setValue: (fieldName: keyof T, value: T[keyof T]) => void;
  handleSubmit: (arg: (data: T) => void) => React.FormEventHandler;
}

export interface RegisterReturn<T> {
  name: keyof T;
  onChange: React.ChangeEventHandler;
}

export type Register<T> = (fieldName: keyof T) => RegisterReturn<T>;
