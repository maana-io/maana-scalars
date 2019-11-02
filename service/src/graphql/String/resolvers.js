var falsy = /^(?:f(?:alse)?|no?|0+)$/i
Boolean.parse = function(val) {
  return !falsy.test(val) && !!val
}

export const resolver = {
  Query: {
    // Identity
    stringIdentity: async (_, { a }) => a,
    stringIdentityOpt: async (_, { a }) => a,

    // NONULL coercion
    stringCoerceFromOpt: async (_, { a }) => a || '',
    stringCoerceToOpt: async (_, { a }) => a,

    // Lists
    stringListUnion: async (_, { a, b }) => [...new Set([...a, ...b])],
    stringListConcat: async (_, { a, b }) => [...a, ...b],
    stringListReverse: async (_, { a }) => a.reverse()

    // Operations
  }
}
