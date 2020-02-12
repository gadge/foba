import { HEAD, LEAP, RAND, TAIL } from '../resources/enums/SelectMode'
import { randSelectVector } from '../utils/randSelectVector'
import { leapSelectVector } from '../utils/leapSelectVector'
import { Roulett } from 'roulett'

export function shuffleVector (ar) {
  let { mode, size, start } = this
  start = start || Roulett.rand(0, ar && ar.length)
  size = size || 3
  switch (mode || RAND) {
    case RAND:
      return randSelectVector(ar, size)
    case LEAP:
      return leapSelectVector(ar, { min: start, dif: size })
    case HEAD:
      return ar.slice(0, size)
    case TAIL:
      return ar.slice(-size)
  }
}
