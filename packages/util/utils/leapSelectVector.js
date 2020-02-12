import { Roulett } from 'roulett'

export const leapSelectVector = (ar, { min, dif }) => {
  const l = ar.length, vec = Array(dif = Math.min(dif, l))
  min = min || Roulett.rand(0, l)
  for (let i = min, j = 0; i < min + dif; i++)
    vec[j++] = ar[i < l ? i : i % l]
  return vec
}




