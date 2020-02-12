export const embed = o => {
  const embedded = {}
  for (let [k, v] of Object.entries(o))
    embedded[k] = [v]
  return embedded
}
