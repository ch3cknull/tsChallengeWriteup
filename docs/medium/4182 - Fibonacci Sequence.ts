type ArrayFill<C extends number, R extends any[] = []> =
`${C}` extends `-${number}` 
  ? []
  : R['length'] extends C ? R : ArrayFill<C, [...R, 0]>

// only fit positive number :(
// since fibonacci start from 1
type subOne<T extends number> = ArrayFill<T> extends [infer _, ...infer U] ? U['length'] : never

type Add<a extends number, b extends number> = [...ArrayFill<a>, ...ArrayFill<b>]['length']

type Fibonacci<T extends number> =
T extends 1 | 2
  ? 1
  : Add<Fibonacci<subOne<T>>, Fibonacci<subOne<subOne<T>>>>
