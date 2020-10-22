import { delogNeL }                         from '@spare/deco'
import { CO, LF, SP, UL }                   from '@spare/enum-chars'
import { decoString, logger, logNeL, says } from '@spare/logger'
import { tapBy }                            from '@spare/tap'
import { promises }                         from 'fs'
import path                                 from 'path'

const SRC = 'packages/quotes'
const test = async () => {
  const folders = await promises.readdir(SRC)
  folders |> delogNeL
  for (let folder of folders) {
    'list' |> says[folder]
    const src = SRC + '/' + folder + '/resources'
    const figures = (await promises.readdir(src)).map(filename => path.basename(filename, '.js'))
    for (let name of figures) {
      `import ${ name.replace(/\W+/g, UL) } from '../resources/${ name }'` |> decoString |> logger
    }
    tapBy(LF,
      'export const Quotes = {',
      ...figures.map(x => (SP + x.replace(/\W+/g, UL) + CO)),
      '}'
    ) |> logNeL
  }

}

test()
