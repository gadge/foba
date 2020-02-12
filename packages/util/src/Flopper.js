import { selectAndShuffle } from './selectAndShuffle'

export class Flopper {
  static flop ({ p, mode, size, start } = {}) {
    return selectAndShuffle.call({ p, mode, size, start }, this)
  }
}
