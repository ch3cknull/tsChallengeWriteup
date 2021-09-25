type Includes<T extends readonly any[], U> = T extends [infer K, ...infer Rest]
  ? [U, K] extends [K, U]
    ? Equal<K, U>
    : Includes<Rest, U>
  : false

// Equal in '@type-challenges/utils'
type Equal<X, Y> = <T>() => T extends X
  ? 1
  : 2 extends <T>() => T extends Y ? 1 : 2
  ? true
  : false
