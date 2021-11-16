type toArray<U extends number, R extends any[] = []> =
R['length'] extends U ? R : toArray<U, [0, ...R]>

type SubGreaterThan<T extends any[], U extends any[]> = 
T extends [infer _, ...infer L]
? U extends [infer _, ...infer R]
  ? SubGreaterThan<L, R>
  : true
: false

type GreaterThan<T extends number, U extends number> = SubGreaterThan<toArray<T>, toArray<U>>
