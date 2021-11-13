type Merge<F, S> = {
  [T in keyof (F & S)] : T extends keyof S ? S[T] : T extends keyof F ? F[T] : never 
}