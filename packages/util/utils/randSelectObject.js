import { Roulett } from 'roulett'

const { index: randIndex } = Roulett

export const randSelectObject = (ob, size) => {
  const keys = Object.keys(ob), l = keys.length
  size = Math.min(l, size)
  const o = {}
  for (let i = 0, set = new Set(), rand, key; i < size; i++) {
    do { rand = l |> randIndex } while (set.has(rand))
    set.add(rand)
    o[key = keys[rand]] = ob[key]
  }
  return o
}
