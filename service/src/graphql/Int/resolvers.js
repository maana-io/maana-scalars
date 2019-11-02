export const resolver = {
  Query: {
    // Identity
    intIdentity: async (_, { a }) => a,
    intIdentityOpt: async (_, { a }) => a,

    // NONULL coercion
    intCoerceFromOpt: async (_, { a }) => a || {},
    intCoerceToOpt: async (_, { a }) => a,

    // String de/serialization
    intParse: async (_, { string }) => parseInt(string),
    intToString: async (_, { a }) => a.toString(),

    // Lists
    intListUnion: async (_, { a, b }) => [...new Set([...a, ...b])],
    intListConcat: async (_, { a, b }) => [...a, ...b],
    intListReverse: async (_, { a }) => a.reverse()

    // Operations
  }
}
