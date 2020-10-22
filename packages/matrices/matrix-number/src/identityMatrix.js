import { init } from '@vect/matrix-init'

export const identityMatrix = (h, w) =>
  init(h, (w ?? h), (x, y) => x === y ? 1 : 0)