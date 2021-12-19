type TupleToNestedObject<T, U> = T extends [infer K, ...infer R]
? Record<K & string, TupleToNestedObject<R, U>>
: U