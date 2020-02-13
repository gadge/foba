import { flopPropKey } from '../flop/flopProp'
import { shuffle } from '../shuffle/shuffle'

export function flopShuffleProp (o) {
  let { p, mode, size, start, keyValuePair } = this
  p = p || (o|> flopPropKey)
  const shuffled = shuffle.call({ mode, size, start }, o[p])
  let ro
  return keyValuePair
    ? (ro = {}, ro[p] = shuffled, ro)
    : shuffled
}
