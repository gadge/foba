import { saveAgeOfEmpiresIICrosTab } from '@foba/crostab/gulp/gulpfile.AgeOfEmpiresII.crosTab.save'
import { saveAgeOfEmpiresIIUnits } from '@foba/table/gulp/gulpfile.ageOfEmpiresII.save'
import { saveBigMacIndexes }       from '@foba/table/gulp/gulpfile.bigMacIndex.save'

import gulp from 'gulp'


export {
  saveBigMacIndexes,
  saveAgeOfEmpiresIIUnits,
  saveAgeOfEmpiresIICrosTab
}

export default gulp.series(
  saveBigMacIndexes,
  saveAgeOfEmpiresIIUnits,
  saveAgeOfEmpiresIICrosTab
)
