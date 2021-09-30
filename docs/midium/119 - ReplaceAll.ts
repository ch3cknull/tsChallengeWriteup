type Add<S extends string, T extends string> = `${S}${T}`
type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer K}${From}${infer T}`
  ? Add<Add<K, To>, ReplaceAll<T, From, To>>
  : S
