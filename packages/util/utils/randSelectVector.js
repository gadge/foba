import { Roulett } from 'roulett'

const { index: randIndex } = Roulett

export const randSelectVector = (ar, size) => {
  const l = ar.length, vec = Array(size = Math.min(size, l))
  for (let i = 0, set = new Set(), rand; i < size; i++) {
    do { rand = l |> randIndex } while (set.has(rand))
    set.add(rand)
    vec[i] = ar[rand]
  }
  return vec
}
