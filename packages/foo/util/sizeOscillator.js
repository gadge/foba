import { Roulett } from 'roulett'

export const sizeOscillator = (size, stdev = 1) => Roulett.between(size - stdev, size + stdev)
