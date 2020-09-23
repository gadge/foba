import { saveAgeOfEmpiresIIUnitsCrosTab }   from '@foba/crostab/gulp/gulpfile.AgeOfEmpiresIIUnits.crosTab.save'
import { saveBigMacAdjustedIndexesCrostab } from '@foba/crostab/gulp/gulpfile.BigMacAdjustedIndexes.crosTab.save'
import { saveAgeOfEmpiresIIUnits }          from '@foba/table/gulp/gulpfile.ageOfEmpiresIIUnits.save'
import { saveBigMacAdjustedIndexes }        from '@foba/table/gulp/gulpfile.bigMacAdjustedIndexes.save'


import gulp from 'gulp'


export {
  saveAgeOfEmpiresIIUnits,
  saveBigMacAdjustedIndexes,
  saveAgeOfEmpiresIIUnitsCrosTab,
  saveBigMacAdjustedIndexesCrostab
}

export default gulp.series(
  saveBigMacAdjustedIndexes,
  saveAgeOfEmpiresIIUnits,
  saveAgeOfEmpiresIIUnitsCrosTab,
  saveBigMacAdjustedIndexesCrostab
)
