type MyPick<T, K extends keyof T> = {
  [R in K]: T[R]
}
