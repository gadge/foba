import { FlopShuffleMaker } from '@foba/util-quotes'
import { Quotes }           from './src/Quotes'

FlopShuffleMaker.defineFlopShuffle(Quotes)
FlopShuffleMaker.defineFlop(Quotes)

export { Quotes }
