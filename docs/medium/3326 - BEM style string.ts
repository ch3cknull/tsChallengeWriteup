type Prefix<T extends string[], P extends string> = T extends [] ? `` : `${P}${T[number]}`

type BEM<B extends string, E extends string[], M extends string[]> =
`${B}${Prefix<E, '__'>}${Prefix<M, '--'>}`