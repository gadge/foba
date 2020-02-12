import { randProperty } from '@foba/util'
import { BistroDutyRoster } from '../resources/unreal/BistroDutyRoster'

export class Foba {
  static BistroDutyRoster = BistroDutyRoster
  static flop () {
    return Foba |> randProperty
  }
}











