import { flopObjectKey } from './flopObject'
import { shuffle } from '../shuffle'
import { pair } from '@vect/object-init'

export function flopShuffle (o) {
  let { p, mode, size, start, keyed } = this
  p = p || (o|> flopObjectKey)
  const shuffled = shuffle.call({ mode, size, start }, o[p])
  return keyed ? pair(p, shuffled) : shuffled
}


