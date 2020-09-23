import gulp                        from 'gulp'
import { saveAgeOfEmpiresIIUnits } from '../test/AOEII.test'
import { saveBigMacIndexes }       from './gulpfile.bigMacIndex.save'

export const saveTabulars = gulp.series(
  saveBigMacIndexes,
  saveAgeOfEmpiresIIUnits
)