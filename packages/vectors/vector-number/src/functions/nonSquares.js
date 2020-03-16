import { seq } from '../../utils/seq'

const sqrt = Math.sqrt
const isSquare = n => (n = sqrt(n), n === ~~n)
export const nonSquares = (l) => {
  const HALF = 1 / 2
  let nonSquare = n => n + ~~(HALF + sqrt(n))
  return seq(l, i => nonSquare(++i))
}





