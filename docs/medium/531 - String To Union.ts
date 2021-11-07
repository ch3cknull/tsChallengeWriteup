type StringToUnion<T extends string, Rest extends any[] = []> = T extends `${infer K}${infer R}`
? StringToUnion<R, [...Rest, K]>
: Rest[number]