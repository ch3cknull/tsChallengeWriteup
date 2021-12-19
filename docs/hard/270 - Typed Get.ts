type Head<T extends string> = T extends `${infer L}.${infer _}` ? L : T
type Rest<T extends string> = T extends `${infer _}.${infer L}` ? L : T

type Get<T, K extends string> = Head<K> extends keyof T
? Get<T[Head<K>], Rest<K>>
: K extends Head<K> ? T : never