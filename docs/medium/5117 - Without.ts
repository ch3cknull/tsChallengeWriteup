type toUnion<T> = T extends any[] ? T[number] : T

type Without<T extends any[], U extends any> = 
T extends [infer K, ...infer R]
  ? K extends toUnion<U>
    ? Without<R, U>
    : [K, ...Without<R, U>]
  : []