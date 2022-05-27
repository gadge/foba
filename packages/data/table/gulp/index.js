import gulp                   from 'gulp'
import { saveAoEIITable }     from './gulpfile.AoEII.table.save'
import { saveBigMacTable }    from './gulpfile.BigMac.table.save'
import { saveWorldbankTable } from './gulpfile.Worldbank.table.save'

export const saveTable = gulp.series(
  saveBigMacTable,
  saveAoEIITable,
  saveWorldbankTable
)