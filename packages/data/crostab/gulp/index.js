import gulp                  from 'gulp'
import { saveAoEIICrostab }     from './gulpfile.AoEII.crostab.save'
import { saveBigMacCrostab }    from './gulpfile.BigMac.crostab.save'
import { saveWorldbankCrostab } from './gulpfile.Worldbank.crostab.save'

export const saveCrostab = gulp.series(
  saveAoEIICrostab,
  saveBigMacCrostab,
  saveWorldbankCrostab
)