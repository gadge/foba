import { min }                    from '@aryth/comparer'
import { flopKey, rand }          from '@aryth/rand'
import { HEAD, LEAP, RAND, TAIL } from '@vect/enum-select-styles'
import { pair }                   from '@vect/object-init'
import { leap, select, shuffle }  from '@vect/object-select'

export class FlopShuffle {
  /**
   *  @param {Object|Class} collection
   *  @param {{[p],[size],[start],[keyed],[mode]}} options
   */
  static object(collection, options = {}) {
    const key = options.p ?? flopKey(collection)
    const rs = shuffleObject.call(options, collection[key])
    return options.keyed ? pair(key, rs) : rs
  }
  /**
   *  @param {Object|Class} collection
   *  @param {{[p],[size],[keyed],[mode]}} options
   */
  static vector(collection, options = {}) {
    const key = options.p ?? flopKey(collection)
    const rs = shuffleVector.call(options, collection[key])
    return options.keyed ? pair(key, rs) : rs
  }
  /**
   *  @param {Object|Class} collection
   * @param {{[p],[size],[start],[keyed],[mode]}} options
   */
  static numericVector(collection, options = {}) {
    const key = options.p ?? flopKey(collection)
    const size = options.size ?? 6
    const start = options.start ?? 0
    let matrix = start
      ? collection[key].call(null, start + size).slice(-size)
      : collection[key].call(null, size)
    return options.keyed ? pair(key, matrix) : matrix
  }
}

export function shuffleObject(ob) {
  let { keys, size, start, mode } = this
  keys = keys ?? Object.keys(ob)
  mode = mode ?? RAND
  start = start ?? rand(keys?.length)
  size = size ?? min(keys.length, 3)
  if (mode === RAND) return shuffle.call({ keys }, ob, size)
  if (mode === LEAP) return leap.call({ keys }, ob, start, size)
  if (mode === HEAD) return select.call({ keys: keys.slice(0, size) }, ob)
  if (mode === TAIL) return select.call({ keys: keys.slice(-size) }, ob)
  return ob
}

export function shuffleVector(vec) {
  let { size, start, mode } = this
  mode = mode ?? RAND
  start = start ?? rand(vec?.length ?? 0), size = size ?? 3
  if (mode === RAND) return shuffle(vec, size)
  if (mode === LEAP) return leap(vec, start, size)
  if (mode === HEAD) return vec.slice(0, size)
  if (mode === TAIL) return vec.slice(-size)
  return vec
}