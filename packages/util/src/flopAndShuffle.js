import { randPropertyKey } from './randProperty'
import { shuffle } from './shuffle'

export function flopAndShuffle (o) {
  let { p, mode, size, start, keyValuePair } = this
  p = p || (o|> randPropertyKey)
  const shuffled = shuffle.call({ mode, size, start }, o[p])
  let ro
  return keyValuePair
    ? (ro = {}, ro[p] = shuffled, ro)
    : shuffled
}
