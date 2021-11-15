type Indexof<T extends readonly any[], E, Res extends any[] = []> =
T extends readonly [infer L, ...infer R]
  ? [E, L] extends [L, E]
    ? Res['length']
    : Indexof<R, E, [...Res, 0]>
  : never

type Enum<T extends readonly string[], N extends boolean = false> = {
  readonly [P in T[number] as Capitalize<P>]: N extends true ? Indexof<T, P> : P
}
