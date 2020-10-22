import { flop } from '@aryth/rand'
import { getFunctionKeys } from '../../../utils/getKeys'

export const flopFunctionKey = candidates =>
  candidates|> getFunctionKeys|> flop

export const flopFunction = candidates =>
  candidates[candidates |> flopFunctionKey]
