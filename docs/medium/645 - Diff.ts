type Diff<O, O1> = {
    [K in keyof Omit<O1, keyof O>]: O1[K]
}
  