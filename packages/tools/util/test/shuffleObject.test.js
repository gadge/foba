import { ObjectCollection } from '@foba/object-string'
import { decoObject, says } from '@spare/logger'
import { HEAD, TAIL }       from '@vect/enum-select-styles'
import { shuffleObject }    from '../src/shuffleObject'

const candidates = {
  'filmActors': ObjectCollection.FilmActors
}

for (let [key, obj] of Object.entries(candidates)) {
  shuffleObject.call({ mode: TAIL, size: 7 }, obj) |> decoObject |> says[key]
}