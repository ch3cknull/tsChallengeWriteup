type Zip<T extends any[], U extends any[]> =
[T, U] extends [[infer L, ...infer RestT], [infer R, ...infer RestU]]
  ? [[L, R], ...Zip<RestT, RestU>]
  : []
