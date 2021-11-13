type MyMap<T> = {
  [P in keyof T]: T[P];
};

type RequiredByKeys<T, K = never> = [K] extends [never]
  ? {
      [P in keyof T as P]-?: T[P];
    }
  : MyMap<
      T & {
        [P in keyof T as P extends K ? P : never]-?: T[P];
      }
    >;

// Another Way
type RequiredByKeys2<T, K = never> = [K] extends [never]
  ? Required<T>
  : MyMap<T & Required<Pick<T, K & keyof T>>>;
