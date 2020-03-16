export function * fiboGen () {
  let [prev, curr] = [0, 1]
  for (; ;) {
    yield curr;
    [prev, curr] = [curr, prev + curr]
  }
}

export const fibonacci = (l) => {
  const gen = fiboGen()
  const ar = Array(l)
  for (let i = 0; i < l; i++) ar[i] = gen.next().value
  return ar
}



