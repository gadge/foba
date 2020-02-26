import { LEAP, RAND, shuffleVector } from '@foba/util'
import { randIntBetw } from '@aryth/rand'
import { select as selectColumns } from '@vect/columns-select'

const MEAN_LEN = 5

export function shuffleTable ({ head, rows, h, w } = {}) {
  const ohead = head
  h = h || randIntBetw(MEAN_LEN - 1, MEAN_LEN + 1)
  w = w || randIntBetw(MEAN_LEN + 1, MEAN_LEN + 5)
  head = shuffleVector.call({ mode: LEAP, size: h }, head)
  const indexes = head.map(x => ohead.indexOf(x))
  rows = shuffleVector.call({ mode: RAND, size: w }, rows)
  rows = selectColumns(rows, indexes)
  return { head: head, rows }
}
