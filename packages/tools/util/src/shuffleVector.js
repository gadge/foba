import { HEAD, LEAP, RAND, TAIL } from '@vect/enum-select-styles'
import { rand } from '@aryth/rand'
import { leap, shuffle } from '@vect/vector-select'

export function shuffleVector (vec) {
  let { size, start, mode } = this
  mode = mode || RAND
  start = start || rand(vec?.length ?? 0), size = size || 3
  if (mode === RAND) return shuffle(vec, size)
  if (mode === LEAP) return leap(vec, start, size)
  if (mode === HEAD) return vec.slice(0, size)
  if (mode === TAIL) return vec.slice(-size)
  return vec
}
