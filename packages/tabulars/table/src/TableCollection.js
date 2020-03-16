import { FLOP_SHUFFLE } from '@foba/util'
import { tableShuffle } from '@analys/table-select'
import { flopKey } from '@aryth/rand'
import { pair } from '@vect/object-init'
import { BistroDutyRoster } from '../resources/unreal/BistroDutyRoster'
import { ChinaConceptFirms } from '../resources/real/ChinaConceptFirms'
import { USTechFirms } from '../resources/real/USTechFirms'
import { TopBoxOffice } from '../resources/real/TopBoxOffice'
import { AeroEngineSpecs } from '../resources/real/AeroEngineSpecs'

/**
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.h
 * @param flopShuffle.w
 * @param flopShuffle.keyed
 * @param flopShuffle.oscillate
 */
export const TableCollection = {
  get AeroEngineSpecs () { return AeroEngineSpecs },
  get BistroDutyRoster () { return BistroDutyRoster },
  get ChinaConceptFirms () { return ChinaConceptFirms },
  get TopBoxOffice () { return TopBoxOffice },
  get USTechFirms () { return USTechFirms },
}

Reflect.defineProperty(TableCollection, FLOP_SHUFFLE, {
  value ({ p, h, w, keyed, oscillate = true } = {}) {
    const key = p ?? flopKey(this)
    const rs = tableShuffle(this[key], { h, w, oscillate })
    return keyed ? pair(key, rs) : rs
  },
  enumerable: false
})

/**
 * @typedef {{head:*[],rows:*[][]}} TableObject
 */












