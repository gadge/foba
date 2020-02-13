import { flopShuffleProp } from './flopShuffleProp'

export class Flopper {
  static flop ({ p, mode, size, start, keyValuePair } = {}) {
    return flopShuffleProp.call({ p, mode, size, start, keyValuePair }, this)
  }
}
