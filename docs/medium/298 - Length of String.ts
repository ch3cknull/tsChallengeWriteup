type LengthOfString<S extends string, T extends readonly any[] = []> =
S extends `${infer K}${infer R}`
  ? LengthOfString<R, [...T, K]>
  : T['length']
