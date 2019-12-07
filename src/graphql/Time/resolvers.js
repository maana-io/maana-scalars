export const resolver = {
  Query: {
    // Identity
    timeIdentity: async (_, { x }) => x,
    timeIdentityOpt: async (_, { x }) => x,

    // NONULL coercion
    timeCoerceFromOpt: async (_, { x }) => x || new Date().toLocaleTimeString(),
    timeCoerceToOpt: async (_, { x }) => x,

    // String de/serialization
    timeParse: async (_, { x }) => Date.parse(x),
    timeToString: async (_, { x }) => x.toString(),

    // Lists
    timeListUnion: async (_, { a, b }) => [...new Set([...a, ...b])],
    timeListConcat: async (_, { a, b }) => [...a, ...b],
    timeListReverse: async (_, { x }) => x.reverse(),
    timeListUnique: async (_, { x }) => [...new Set(x)],
    timeListFilterNulls: async (_, { x }) =>
      x ? x.filter(y => y !== null) : []

    // Operations
  },
  Mutation: {
    timeNow: async () => new Date().toLocaleTimeString()
  }
}
