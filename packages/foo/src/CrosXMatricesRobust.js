import { Foba as FobaCX } from '@foba/crostab'
import { randPropertyKey } from '@foba/util'

export const crosXMatricesRobust = ({ h, w } = {}) => {
  let key = FobaCX|> randPropertyKey
  const { side, banner, matrix } = FobaCX.flopShuffle({ p: key, h, w })
  return {
    null: null,
    undefined: undefined,
    numeric: key.length,
    string: key,
    emptyVector: [],
    emptyEntry: [,],
    side: side,
    banner: banner,
    oneRow: [banner.slice()],
    oneColumn: side.map((x) => [x]),
    matrix: matrix
  }
}

export const CrosXMatricesRobust = crosXMatricesRobust()


