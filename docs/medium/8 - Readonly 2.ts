type MyReadonly2<T, K extends keyof T = keyof {}> = [K] extends [never]
? Readonly<T>
: Readonly<Pick<T, K>> & Exclude<T, K>