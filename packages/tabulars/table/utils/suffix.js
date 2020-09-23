export const Suffix = (de, to) => suffix.bind({ de, to })
export const suffix = function (x) {
  const { de, to } = this
  const lastIndex = x.lastIndexOf(de)
  x = lastIndex >= 0 ? x.slice(lastIndex + 1) : x
  if (to) x = to(x)
  return x
}
