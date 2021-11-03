type originNumber = 1 | 2

type getLength<T extends readonly any[]> = T['length']

type ArrayFill<C extends number, R extends any[] = []> =
`${C}` extends `0` | `-${number}` 
  ? []
  : R['length'] extends C ? R : ArrayFill<C, [...R, 0]>

// only fit positive number :(
// since fibonacci start from 1
type subOne<T extends number> = ArrayFill<T> extends [infer _, ...infer U] ? getLength<U> : never

type Add<a extends number, b extends number> = getLength<[...ArrayFill<a>, ...ArrayFill<b>]>

type Fibonacci<T extends number> =
T extends originNumber 
  ? 1
  : Add<Fibonacci<subOne<T>>, Fibonacci<subOne<subOne<T>>>>
