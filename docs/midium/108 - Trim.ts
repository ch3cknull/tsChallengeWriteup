type whiteSpace = ' ' | '\t' | '\n'

type Trim<S extends string> = S extends `${whiteSpace}${infer T}`
  ? Trim<T>
  : S extends `${infer K}${whiteSpace}`
  ? Trim<K>
  : S
