import gulp                        from 'gulp'
import { saveAgeOfEmpiresIIUnits }   from '../test/AOEII.test'
import { saveBigMacAdjustedIndexes } from './gulpfile.bigMacAdjustedIndexes.save'

export const saveTabulars = gulp.series(
  saveBigMacAdjustedIndexes,
  saveAgeOfEmpiresIIUnits
)