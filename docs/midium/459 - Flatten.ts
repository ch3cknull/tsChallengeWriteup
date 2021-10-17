type Flatten<T extends any[]> = T extends [infer K, ...infer R]
? K extends any[]
  ? Flatten<[...K, ...R]>
  : [K, ...Flatten<R>]
: T