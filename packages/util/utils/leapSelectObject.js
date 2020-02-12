import { Roulett } from 'roulett'

export const leapSelectObject = (ob, { min, dif }) => {
  const keys = Object.keys(ob), l = keys.length, o = {}
  min = min || Roulett.rand(0, l)
  dif = Math.min(dif, l)
  for (let i = min, key; i < min + dif; i++) {
    o[key = keys[i < l ? i : i % l]] = ob[key]
  }
  return o
}
