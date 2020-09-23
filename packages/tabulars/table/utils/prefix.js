export const Prefix = (de, to) => prefix.bind({ de, to })
export const prefix = function (x) {
  const { de, to } = this
  const index = x.indexOf(de)
  x = index >= 0 ? x.slice(0, index) : x
  if (to) x = to(x)
  return x
}

