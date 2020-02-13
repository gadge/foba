import { sizeOscillator } from '@foba/util'
import { FobaNum, FobaStr } from '@foba/vector'

const keyValuePair = true

export const simpleVectors = ({ h = 7 } = {}) => {
  return Object.assign({ empty: [], },
    FobaNum.flop({ size: h |> sizeOscillator, keyValuePair }),
    FobaNum.flop({ size: h |> sizeOscillator, keyValuePair }),
    FobaStr.flop({ size: h |> sizeOscillator, keyValuePair }),
    FobaStr.flop({ size: h |> sizeOscillator, keyValuePair }),
  )
}

export const SimpleVectors = simpleVectors()
