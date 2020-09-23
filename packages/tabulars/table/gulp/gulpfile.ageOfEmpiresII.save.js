import { Acq }                     from '@acq/acq'
import { samplesToTable, toTable } from '@analys/convert'
import { IMMUT, MUT }              from '@analys/enum-mutabilities'
import { esvar }                   from '@flua/utils'
import { Vinylize }                from '@flua/vinylize'
import { SP }                      from '@spare/enum-chars'
import { decoTable, logger }       from '@spare/logger'
import { snakeToPascal }           from '@spare/phrasing'
import { Verse }                   from '@spare/verse'
import { STR }                     from '@typen/enum-data-types'
import gulp                        from 'gulp'
import { Prefix }                  from '../utils/prefix'
import { Suffix }                  from '../utils/suffix'

const STATIC = 'packages/tabulars/table/static'
const RESOURCES = 'packages/tabulars/table/resources/real'
const FILENAME = 'AgeOfEmpiresIIUnits'

export const saveAgeOfEmpiresIIUnits = async () => {
  /** @type {Table}  */ const table = await Acq.fetch({
    url: 'https://age-of-empires-2-api.herokuapp.com/api/v1/units',
    prep: ({ units }) => units |> samplesToTable |> toTable
  })
  const fieldMapping = [
    ['id', 'id'],
    ['name', 'name'],
    ['created_in', 'building'],
    ['cost', 'cost'],
    ['build_time', 'buildTime'],
    ['hit_points', 'hp'],
    ['attack', 'attack'],
    ['range', 'range'],
    ['line_of_sight', 'los'],
    ['armor', 'armor'],
    ['accuracy', 'accuracy'],
    ['movement_rate', 'moveRate'],
    ['attack_delay', 'attackDelay'],
    ['reload_time', 'reloadTime'],
    ['age', 'age'],
    ['expansion', 'expansion'],
    ['description', 'description'],
  ]
  table
    .select(fieldMapping, MUT)
    .mutate(x => x ?? null)
    .mutateColumn('building', Suffix('/', x => snakeToPascal(x, SP)))
    .mutateColumn('accuracy', x => typeof x === STR ? (x |> Prefix('%')) : x)
    .proliferateColumn({
      key: 'range',
      to: x => typeof x === STR ? (x |> Suffix('-') |> Prefix(' ')) : x,
      as: 'maxRange'
    }, { nextTo: 'range', mutate: true })
    .deleteColumn('range', MUT)
    .find({ cost: ({ Cost, info }) => !info && !Cost }, MUT)
  table |> decoTable |> logger
  await Vinylize(FILENAME + '.js')
    .p(esvar(FILENAME))
    .p(table |>Verse.table)
    .asyncPipe(gulp.dest(STATIC))
  const briefTable = table
    .find({ building: x => ['Archery Range', 'Barracks', 'Siege Workshop', 'Stable'].includes(x) }, IMMUT)
    .select(['id', 'name', 'building', 'cost', 'buildTime', 'hp', 'attack', 'maxRange', 'los', 'armor', 'accuracy', 'moveRate', 'attackDelay', 'age'])
  await Vinylize(FILENAME + '.js')
    .p(esvar(FILENAME))
    .p(briefTable |>Verse.table)
    .asyncPipe(gulp.dest(RESOURCES))
}