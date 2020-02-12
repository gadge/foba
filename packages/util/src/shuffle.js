import { shuffleVector } from './shuffleVector'
import { shuffleObject } from './shuffleObject'

export function shuffle (o) {
  return Array.isArray(o)
    ? shuffleVector.call(this, o)
    : shuffleObject.call(this, o)
}

export const Shuffler = ({ mode, size, start }) => shuffle.bind({ mode, size, start })

