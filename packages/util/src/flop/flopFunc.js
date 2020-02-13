import { Roulett } from 'roulett'
import { flopPropKey } from './flopProp'
import { allFuncKeys } from '../allKeys/allFuncKeys'

export const flopFuncKey = candidates =>
  candidates|> allFuncKeys|> Roulett.element

export const flopFunc = candidates =>
  candidates[candidates |> flopPropKey]
