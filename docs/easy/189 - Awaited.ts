type MyAwaited<T> = T extends Promise<infer K> ? K : never
