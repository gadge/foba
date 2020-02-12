import { Roulett } from 'roulett'

export const allStaticPropertyKeys = candidates =>
  Reflect.ownKeys(candidates).filter(p => typeof candidates[p] === 'object').slice(1)

export const randPropertyKey = candidates =>
  candidates|> allStaticPropertyKeys|> Roulett.element

export const randProperty = candidates =>
  candidates[candidates |> randPropertyKey]

