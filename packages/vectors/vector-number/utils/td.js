export const round = x => (x + (x > 0 ? 0.5 : -0.5)) << 0

function trimDigit (n) {
  return round(n * this.m) / this.m
}

/**
 *
 * @param {number} d - digits
 * @returns {function(number):number}
 * @constructor
 */
export const TrimDigit = d => trimDigit.bind({ m: 10 ** d })

export const td2 = TrimDigit(2)

export const td4 = TrimDigit(4)
