import { flop } from '@aryth/rand'
import { getObjectKeys } from '../../../utils/getKeys'

export const flopObjectKey = o => o|> getObjectKeys|> flop

export const flopObject = o => o[o |> flopObjectKey]


