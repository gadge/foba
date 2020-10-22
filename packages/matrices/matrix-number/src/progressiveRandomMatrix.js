import { abs }      from '@aryth/math'
import { Ziggurat } from 'roulett'

export const progressiveRandomMatrix = (h, w, fn) => {
  let l = (h = h ?? 5) * (w = w ?? h)
  let zigg
  fn = fn ?? (zigg = new Ziggurat(l, ~~(l * 2 / 3)), () => abs(~~zigg.next()))
  const ar = Array(l), mx = Array(h)
  for (--l; l >= 0; l--) ar[l] = fn(l)
  ar.sort((a, b) => a - b)
  for (let i = 0, j, r; i < h; i++)
    for (mx[i] = r = Array(w), j = 0; j < w; j++)
      r[j] = ar[++l]
  return mx
}