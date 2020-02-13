import { shuffle } from './shuffle'

export const Shuffler = ({ mode, size, start }) => shuffle.bind({ mode, size, start })
