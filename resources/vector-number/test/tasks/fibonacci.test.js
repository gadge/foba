import { fiboGen } from '../../src/fibonacci'

for (let n of fiboGen()) {
  if (n > 20) break
  console.log(n)
}
