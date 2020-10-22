import { HEAD, LEAP, RAND, TAIL } from '@vect/enum-select-styles'
import { rand }                   from '@aryth/rand'
import { min }                    from '@aryth/comparer'
import { leap, select, shuffle }  from '@vect/object-select'

export function shuffleObject(ob) {
  let { keys, size, start, mode } = this
  keys = keys || Object.keys(ob)
  mode = mode || RAND
  start = start || rand(keys?.length)
  size = size || min(keys.length, 3)
  if (mode === RAND) return shuffle.call({ keys }, ob, size)
  if (mode === LEAP) return leap.call({ keys }, ob, start, size)
  if (mode === HEAD) return select.call({ keys: keys.slice(0, size) }, ob)
  if (mode === TAIL) return select.call({ keys: keys.slice(-size) }, ob)
  return ob
}


