type If<C, T, F> = C extends boolean ? (C extends true ? T : F) : never
