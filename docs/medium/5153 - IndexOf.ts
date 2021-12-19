type IndexOf<T extends any[], U, R extends any[] = []> = 
T extends [infer K, ...infer Rest]
  ? K extends U
    ? R['length']
    : IndexOf<Rest, U, [...R, 1]>
  : -1