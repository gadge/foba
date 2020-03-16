import { CrostabCollection } from '@foba/crostab'
import { flopKey } from '@aryth/rand'

export const crosXMatricesRobust = ({ h, w } = {}) => {
  let key = CrostabCollection|> flopKey
  const { side, head, rows } = CrostabCollection.flopShuffle({ p: key, h, w })
  return {
    null: null,
    undefined: undefined,
    numeric: key.length,
    string: key,
    emptyVector: [],
    emptyEntry: [,],
    side: side,
    head: head,
    oneRow: [head.slice()],
    oneColumn: side.map((x) => [x]),
    rows: rows
  }
}

export const CrosXMatricesRobust = crosXMatricesRobust()


