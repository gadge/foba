import { saveCrostab }          from '@foba/crostab/gulp'
import { saveAoEIICrostab }     from '@foba/crostab/gulp/gulpfile.AoEII.crostab.save'
import { saveBigMacCrostab }    from '@foba/crostab/gulp/gulpfile.BigMac.crostab.save'
import { saveWorldbankCrostab } from '@foba/crostab/gulp/gulpfile.Worldbank.crostab.save'
import { saveTable }            from '@foba/table/gulp'
import { saveAoEIITable }       from '@foba/table/gulp/gulpfile.AoEII.table.save'
import { saveBigMacTable }      from '@foba/table/gulp/gulpfile.BigMac.table.save'
import { saveWorldbankTable }   from '@foba/table/gulp/gulpfile.Worldbank.table.save'


import gulp from 'gulp'


export {
  saveTable,
  saveAoEIITable,
  saveBigMacTable,
  saveWorldbankTable,
  saveCrostab,
  saveAoEIICrostab,
  saveBigMacCrostab,
  saveWorldbankCrostab
}

export default gulp.series(
  saveTable,
  saveAoEIITable,
  saveBigMacTable,
  saveWorldbankTable,
  saveCrostab,
  saveAoEIICrostab,
  saveBigMacCrostab,
  saveWorldbankCrostab
)
