export const resolver = {
  Query: {
    // Identity
    dateIdentity: async (_, { a }) => a,
    dateIdentityOpt: async (_, { a }) => a,

    // NONULL coercion
    dateCoerceFromOpt: async (_, { a }) => a || new Date().toLocaleDateString(),
    dateCoerceToOpt: async (_, { a }) => a,

    // String de/serialization
    dateParse: async (_, { string }) => new Date(string).toLocaleDateString(),
    dateToString: async (_, { a }) => a.toString(),

    // Lists
    dateListUnion: async (_, { a, b }) => [...new Set([...a, ...b])],
    dateListConcat: async (_, { a, b }) => [...a, ...b],
    dateListReverse: async (_, { a }) => a.reverse(),

    // Operations
    dateNow: async () => new Date().toLocaleDateString()
  }
}
