import { randPropertyKey } from './randProperty'
import { shuffle } from './shuffle'

export function selectAndShuffle (o) {
  let { p, mode, size, start } = this
  return shuffle
    .call(
      { mode, size, start },
      o[p || (o|> randPropertyKey)]
    )
}
