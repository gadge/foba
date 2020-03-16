import { FUN, OBJ } from '@typen/enum-data-types'

export const getFunctionKeys = o =>
  Reflect.ownKeys(o).filter(p => typeof o[p] === FUN)

export const getObjectKeys = o =>
  Reflect.ownKeys(o).filter(p => typeof o[p] === OBJ)

export const getKeys = function (o) {
  const { excludes, type } = this
  const keys = Reflect.ownKeys(o)
    .filter(p => typeof o[p] === type)
  return excludes?.length
    ? keys.filter(p => !excludes.includes(p))
    : keys
}
