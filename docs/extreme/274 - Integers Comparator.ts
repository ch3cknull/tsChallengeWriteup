enum Comparison {
  Greater,
  Equal,
  Lower,
}

type NumberType = string | number

type NumberToArray<T extends NumberType, R extends any[] = []> =
`${T}` extends `${R['length']}` ? R : NumberToArray<T, [0, ...R]>

type Comparator<A extends number, B extends number> = A extends B 
? Comparison.Equal
: `${A}` extends `-${infer K}`
  ? `${B}` extends `-${infer T}`
    ? BaseComparator<NumberToArray<T>, NumberToArray<K>>
    : Comparison.Lower
  : `${B}` extends `-${infer _}`
    ? Comparison.Greater
    : BaseComparator<NumberToArray<A>, NumberToArray<B>>

type BaseComparator<A extends any[], B extends any[]> =
A extends [infer _, infer _, infer _, ...infer R]
  ? B extends [infer _, infer _, infer _, ...infer K]
    ? BaseComparator<R, K>
    : Comparison.Greater
  : A extends [infer _, ...infer R]
    ? B extends [infer _, ...infer K]
      ? BaseComparator<R, K>
      : Comparison.Greater
    : Comparison.Lower
