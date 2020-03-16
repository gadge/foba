import { shuffleVector } from '../../src/shuffleVector'
import { shuffleObject } from '../../src/shuffleObject'

export function shuffle (o) {
  return Array.isArray(o)
    ? shuffleVector.call(this, o)
    : shuffleObject.call(this, o)
}

