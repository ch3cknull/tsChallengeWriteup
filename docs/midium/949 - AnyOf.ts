type False = [0, false, [], {}, '']

type Includes<T extends any[], U> = T extends [infer K, ...infer R]
? [K, U] extends [U, K] ? true : Includes<R, U>
: false

type AnyOf<T extends readonly any[]> = T extends [infer K, ...infer R]
? Includes<False, K> extends true
  ? AnyOf<R>
  : true
: false
