type StringToUnion<T extends string, Rest extends any[] = []> = T extends `${infer K}${infer R}`
? StringToUnion<R, [...Rest, K]>
: Rest[number]

type StringToUnion<T extends string> = T extends `${infer L}${infer R}`
? L | StringToUnion<R>
: never