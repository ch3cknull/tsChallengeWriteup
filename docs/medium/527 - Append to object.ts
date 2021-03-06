type AppendToObject<T, U, V> = {
    [K in (keyof T | U & string) ] : K extends keyof T ? T[K] : V
}
  