export const resolver = {
  Query: {
    // Identity
    timeIdentity: async (_, { a }) => a,
    timeIdentityOpt: async (_, { a }) => a,

    // NONULL coercion
    timeCoerceFromOpt: async (_, { a }) => a || new Date().toLocaleTimeString(),
    timeCoerceToOpt: async (_, { a }) => a,

    // String de/serialization
    timeParse: async (_, { string }) => Date.parse(string),
    timeToString: async (_, { a }) => a.toString(),

    // Lists
    timeListUnion: async (_, { a, b }) => [...new Set([...a, ...b])],
    timeListConcat: async (_, { a, b }) => [...a, ...b],
    timeListReverse: async (_, { a }) => a.reverse(),

    // Operations
    timeNow: async () => new Date().toLocaleTimeString()
  }
}
