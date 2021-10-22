type Capitalize<S extends string> = S extends `${infer K}${infer R}` ? `${Uppercase<K>}${R}` : S
