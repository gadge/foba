import { HEAD, LEAP, RAND, TAIL } from '../../../resources/enums/SelectMode'
import { randShuffleObject } from './randShuffleObject'
import { leapShuffleObject } from './leapShuffleObject'
import { Roulett } from 'roulett'

export function shuffleObject (ob) {
  let { mode, size, start } = this
  let keys = Object.keys(ob), o
  start = start || Roulett.rand(0, keys && keys.length)
  size = size || 3
  switch (mode || RAND) {
    case RAND:
      return randShuffleObject(ob, size)
    case LEAP:
      return leapShuffleObject(ob, { min: start, dif: size })
    case HEAD:
      o = {}
      keys.slice(0, size).forEach(key => o[key] = ob[key])
      return keys
    case TAIL:
      o = {}
      keys.slice(-size).forEach(key => o[key] = ob[key])
      return keys
  }
}


