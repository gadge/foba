import { TrimDigit } from '../../utils/td'
import { seq } from '../../utils/seq'

export const balanceByCompInterest = (l, r = 0.1, d = 3) => {
  r++
  let n = 1, td = TrimDigit(d)
  return seq(l, () => td(n *= r), d)
}
