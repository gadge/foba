export const allFuncKeys = candidates =>
  Reflect.ownKeys(candidates).filter(p => typeof candidates[p] === 'function')
