import { Roulett } from 'roulett'
import { allPropKeys } from '../allKeys/allPropKeys'

export const flopPropKey = candidates =>
  candidates|> allPropKeys|> Roulett.element

export const flopProp = candidates =>
  candidates[candidates |> flopPropKey]


