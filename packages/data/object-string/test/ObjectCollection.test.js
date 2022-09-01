import { deco }             from '@spare/deco'
import { ObjectCollection } from '../index.js'

const ob = ObjectCollection.flopShuffle({ entry: true })

deco(ob, { vert: 2 }) |> console.log