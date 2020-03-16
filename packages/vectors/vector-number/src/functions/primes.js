function isPrime (n) {
  if (n < 2) return false
  if (!(n % 2)) return n === 2
  if (!(n % 3)) return n === 3
  let d = 5
  while (d * d <= n) {
    if (!(n % d)) return false
    d += 2
    if (!(n % d)) return false
    d += 4
  }
  return true
}

export const primes = (l) => {
  const ar = Array(l)
  for (let n = 2, i = 0; ; n++) {
    if (isPrime(n))
      ar[i++] = n
    else if (i >= l)
      break
  }
  return ar
}
