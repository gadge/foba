import { shuffle } from '@vect/vector-select'
import { randInt } from '@aryth/rand'
import { TrimDigit } from '../../utils/td'

const Specials = {
  PI: Math.PI,
  E: Math.E,
  SQR_2: Math.sqrt(2),
  SQR_3: Math.sqrt(3),
  SQR_5: Math.sqrt(5),
  GOLDEN: 1.61803398874989484820,
  MP10_3: 10 / 3,
  MP10_6: 10 / 6,
  GRAVITY: 6.67430,
  FEIGENBAUM: 4.669201609102990671853203821578,
  GAUSS_STDEV_1: 68.2689492137,
  GAUSS_STDEV_2: 95.4499736104,
  GAUSS_STDEV_3: 99.7300203937,
  LIGHT: 299792458, //m/s**2
  MOL: 6.02214076e+23,
  LOSCHMIDT: 2.6867811e+25,
  ABSOLUTE_ZERO: -273.15
}

const randF = () => 2 ** randInt(1, 12) - 1

export const absoluteMirror = (l = 5, d = 3) => {
  if (l < 4) l = 4
  let h = ~~(l / 2), r = l % 2
  let positives = shuffle(Object.values(Specials), --h)
  positives.push(randF())
  positives = positives.map(Math.abs).sort((a, b) => a - b)
  let negatives = positives.map(x => -x).reverse()
  if (r) negatives.push(0)
  const result = negatives.concat(positives)
  let td
  return d
    ? (td = TrimDigit(d), result.map(td))
    : result
}
