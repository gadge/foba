export const namesToBrief = names =>
  names.map(name => {
    name = name.split(' ')
    let last = ''
    do { last = name.pop() + last } while (last === 'Jr.')
    return name.map(([initial]) => initial + '.').join('') + last
  })
