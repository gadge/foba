import { flopShuffle } from './flopShuffle'

export class Flopper {
  /**
   *
   * @param p
   * @param mode
   * @param size
   * @param start
   * @param keyed
   */
  static flop ({ p, mode, size, start, keyed } = {}) {
    return flopShuffle.call({ p, mode, size, start, keyed }, this)
  }
}
