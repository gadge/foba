import { randBetw } from '@aryth/rand'

export const sizeOscillator = (size, stdev = 1) => randBetw(size - stdev, size + stdev)
