import { flopProp } from '@foba/util'
import { BistroDutyRoster } from '../resources/unreal/BistroDutyRoster'
import { ChinaConceptFirms } from '../resources/real/ChinaConceptFirms'
import { USTechFirms } from '../resources/real/USTechFirms'
import { TopBoxOffice } from '../resources/real/TopBoxOffice'
import { Covid19Casualties } from '../resources/real/Covid19Casualties'
import { shuffleTable } from './shuffleTable'

export class Foba {
  static BistroDutyRoster = BistroDutyRoster
  static ChinaConceptFirms = ChinaConceptFirms
  static USTechFirms = USTechFirms
  static TopBoxOffice = TopBoxOffice
  static Covid19Casualties = Covid19Casualties
  static flop () {
    return Foba |> flopProp
  }
  static flopShuffle ({ p, h, w } = {}) {
    let { head, rows } = p ? Foba[p] : (Foba|> flopProp)
    return shuffleTable({ head, rows, p, h, w })
  }
}













