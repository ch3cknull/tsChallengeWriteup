type StrLength<T extends string | number, L extends any[] = []> =
`${T}` extends `${infer _}${infer R}` ? StrLength<R, [...L, 0]> : L['length']

type IsPalindrome<T extends string | number> = StrLength<T> extends 1 | 0
? true
: `${T}` extends `${infer L}${infer Rest}${infer R}`
  ? `${L}` extends `${R}`
    ? IsPalindrome<Rest>
    : false
  : false

// Another Way
type Reverse<T, R extends string = ''> = T extends `${infer K}${infer Rest}` ? Reverse<Rest, `${K}${R}`> : R

type IsPalindrome2<T extends string | number> = Equal<`${T}`, Reverse<`${T}`>>