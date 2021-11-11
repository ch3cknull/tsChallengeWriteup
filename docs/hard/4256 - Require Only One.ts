type Map<T> = {
  [P in keyof T]: T[P]
} 
  
type RequireOnlyOne<T, K extends keyof T> = Map<{
  [R in keyof T as `${R & string}` extends K ? never : R ]?: T[R]
} & {
  [R in K]-? : T[R]
}>;

type RequireOnlyOne2<T, K extends keyof T> = Map<Exclude<T, K> & Required<Pick<T, K>>>;
