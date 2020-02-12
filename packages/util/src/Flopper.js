import { flopAndShuffle } from './flopAndShuffle'

export class Flopper {
  static flop ({ p, mode, size, start, keyValuePair } = {}) {
    return flopAndShuffle.call({ p, mode, size, start, keyValuePair }, this)
  }
}
