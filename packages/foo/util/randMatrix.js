import { Ziggurat } from 'roulett'

const DEFAULT_SIZE = 3

export const randMatrix = ({ h, w, fn } = {}) => {
  let l = (h = h || DEFAULT_SIZE) * (w = w || h)
  let zigg
  fn = fn || (zigg = new Ziggurat(l, ~~(l * 2 / 3)), () => Math.abs(~~zigg.next()))
  const ar = Array(l), mx = Array(h)
  for (--l; l >= 0; l--) ar[l] = fn(l)
  ar.sort((a, b) => a - b)
  for (let i = 0, j, r; i < h; i++)
    for (mx[i] = r = Array(w), j = 0; j < w; j++)
      r[j] = ar[++l]
  return mx
}


