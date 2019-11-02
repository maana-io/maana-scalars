var falsy = /^(?:f(?:alse)?|no?|0+)$/i
Boolean.parse = function(val) {
  return !falsy.test(val) && !!val
}

export const resolver = {
  Query: {
    // Identity
    booleanIdentity: async (_, { a }) => a,
    booleanIdentityOpt: async (_, { a }) => a,

    // NONULL coercion
    booleanCoerceFromOpt: async (_, { a }) => a || false,
    booleanCoerceToOpt: async (_, { a }) => a,

    // String de/serialization
    booleanParse: async (_, { string }) => Boolean.parse(string),
    booleanToString: async (_, { a }) => a.toString(),

    // Lists
    booleanListUnion: async (_, { a, b }) => [...new Set([...a, ...b])],
    booleanListConcat: async (_, { a, b }) => [...a, ...b],
    booleanListReverse: async (_, { a }) => a.reverse(),

    // Operations
    booleanOr: async (_, { a, b }) => a || b,
    booleanAnd: async (_, { a, b }) => a && b,
    booleanXor: async (_, { a, b }) => (a ? !b : b),
    booleanNot: async (_, { a }) => !a
  }
}
