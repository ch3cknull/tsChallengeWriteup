type Reverse<T> = T extends [infer K, ...infer R] ? [...Reverse<R>, K] : T
type FlipArguments<T> = T extends (...args: infer A) => infer R ? (...args: Reverse<A>) => R : T
