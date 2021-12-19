type Trunc<T extends string | number> = `${T}` extends `${infer L}.${infer _}`
  ? L 
  : `${T}`