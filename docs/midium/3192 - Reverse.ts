type Reverse<T> = T extends [infer K, ...infer R] ? [...Reverse<R>, K] : T
