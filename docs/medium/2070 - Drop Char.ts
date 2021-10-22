type DropChar<S extends string, C extends string> =
  S extends `${infer K}${C}${infer T}` ? DropChar<`${K}${T}`, C> : S