import { SP } from '@spare/enum-chars'

export const briefName = name => {
  name = name.split(SP)
  let last = ''
  do { last = name.pop() + last } while (last === 'Jr.')
  return name.map(([initial]) => initial + '.').join('') + last
}
