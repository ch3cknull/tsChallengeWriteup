type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer K}${From}${infer T}`
  ? `${K}${To}${T}`
  : S
