type IsNever<T> = [never, T] extends [T, never] ? true : false
