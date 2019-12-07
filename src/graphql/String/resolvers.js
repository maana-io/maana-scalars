var falsy = /^(?:f(?:alse)?|no?|0+)$/i
Boolean.parse = function(val) {
  return !falsy.test(val) && !!val
}

export const resolver = {
  Query: {
    // Identity
    stringIdentity: async (_, { x }) => x,
    stringIdentityOpt: async (_, { x }) => x,

    // NONULL coercion
    stringCoerceFromOpt: async (_, { x }) => x || '',
    stringCoerceToOpt: async (_, { x }) => x,

    // Lists
    stringListUnion: async (_, { a, b }) => [...new Set([...a, ...b])],
    stringListConcat: async (_, { a, b }) => [...a, ...b],
    stringListReverse: async (_, { x }) => x.reverse(),
    stringListUnique: async (_, { x }) => [...new Set(x)],
    stringListFilterNulls: async (_, { x }) =>
      x ? x.filter(y => y !== null) : [],

    // Operations
    stringLength: async (_, { x }) => x.length,
    stringReverse: async (_, { x }) => [...x].reverse().join(''),
    stringConcat: async (_, { a, b }) => a + b,
    stringEqual: async (_, { a, b }) => a === b,
    stringReplace: async (_, { source, search, replace }) =>
      source.replace(search, replace)
  }
}
