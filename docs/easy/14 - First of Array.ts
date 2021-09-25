// One Way
type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// Other Way
type First2<T extends any[]> = T extends [infer K, ...infer _] ? K : never
