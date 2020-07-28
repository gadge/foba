import { FlopShuffleMaker } from '@foba/util-quotes'
import { Quotes }           from './src/Quotes'

FlopShuffleMaker.defineFlopShuffle(Quotes)
FlopShuffleMaker.defineFlop(Quotes)

/**
 * @property {Function} flop
 * @property {Function} flopShuffle
 * @param {string} flop.key
 * @param {string} flopShuffle.key
 * @param {number} flopShuffle.size
 */
export { Quotes }
