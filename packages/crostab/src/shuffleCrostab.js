import { randIntBetw } from '@aryth/rand'
import { LEAP, RAND, shuffleVector } from '@foba/util'
import { CrosTab } from 'crostab'

const MEAN_LEN = 4

export function shuffleCrostab ({ side, banner, matrix, h, w } = {}) {
  const oside = side, obanner = banner
  h = h || randIntBetw(MEAN_LEN - 1, MEAN_LEN + 1)
  w = w || randIntBetw(MEAN_LEN - 1, MEAN_LEN + 1)
  side = shuffleVector.call({ mode: LEAP, size: h }, side)
  banner = shuffleVector.call({ mode: RAND, size: w }, banner)
  return CrosTab
    .from({ side: oside, banner: obanner, matrix })
    .select({ side, banner })
    .toJson
}
