export const allPropKeys = candidates =>
  Reflect.ownKeys(candidates).filter(p => typeof candidates[p] === 'object').slice(1)
