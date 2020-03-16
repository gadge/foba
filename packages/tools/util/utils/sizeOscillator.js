import { randIntBetw } from '@aryth/rand'

export const sizeOscillator = (size, stdev = 1) => randIntBetw(size - stdev, size + stdev)
