type Chunk<T extends any[], N extends number, Swap extends any[] = []> =
Swap['length'] extends N
  ? [Swap, ...Chunk<T, N>]
  : T extends [infer K, ...infer L]
    ? Chunk<L, N, [...Swap, K]>
    : Swap extends [] ? Swap : [Swap]