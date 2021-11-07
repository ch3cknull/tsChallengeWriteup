type DeepReadonly<T> = keyof T extends never
  ? T
  : {
      readonly [P in keyof T]: DeepReadonly<T[P]>
    }


    
type isPureObjet<T> = T extends object ? T extends Function ? false : true: false

type DeepReadonly2<T> = {
  readonly [P in keyof T] : 
    isPureObjet<T[P]> extends true ? DeepReadonly<T[P]> : T[P]
}