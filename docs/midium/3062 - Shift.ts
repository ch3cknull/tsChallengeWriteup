type Shift<T> = T extends [infer K, ...infer R] ? R : never
