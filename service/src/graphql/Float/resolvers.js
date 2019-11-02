export const resolver = {
  Query: {
    // Identity
    floatIdentity: async (_, { a }) => a,
    floatIdentityOpt: async (_, { a }) => a,

    // NONULL coercion
    floatCoerceFromOpt: async (_, { a }) => a || {},
    floatCoerceToOpt: async (_, { a }) => a,

    // String de/serialization
    floatParse: async (_, { string }) => parseFloat(string),
    floatToString: async (_, { a }) => a.toString(),

    // Lists
    floatListUnion: async (_, { a, b }) => [...new Set([...a, ...b])],
    floatListConcat: async (_, { a, b }) => [...a, ...b],
    floatListReverse: async (_, { a }) => a.reverse()

    // Operations
  }
}
