import { shuffleVector } from './utils/shuffleVector'
import { shuffleObject } from './utils/shuffleObject'

export function shuffle (o) {
  return Array.isArray(o)
    ? shuffleVector.call(this, o)
    : shuffleObject.call(this, o)
}

