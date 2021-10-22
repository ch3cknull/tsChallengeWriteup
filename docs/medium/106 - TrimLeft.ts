type whitespace = ' ' | '\t' | '\n'
type TrimLeft<S extends string> = S extends `${whitespace}${infer T}`
  ? TrimLeft<T>
  : S
