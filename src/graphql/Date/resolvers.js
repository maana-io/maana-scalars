export const resolver = {
  Query: {
    // Identity
    dateIdentity: async (_, { x }) => x,
    dateIdentityOpt: async (_, { x }) => x,

    // NONULL coercion
    dateCoerceFromOpt: async (_, { x }) => x || new Date().toLocaleDateString(),
    dateCoerceToOpt: async (_, { x }) => x,

    // String de/serialization
    dateParse: async (_, { x }) => new Date(x).toLocaleDateString(),
    dateToString: async (_, { x }) => x.toString(),

    // Lists
    dateListUnion: async (_, { a, b }) => [...new Set([...a, ...b])],
    dateListConcat: async (_, { a, b }) => [...a, ...b],
    dateListReverse: async (_, { x }) => x.reverse(),
    dateListUnique: async (_, { x }) => [...new Set(x)],
    dateListFilterNulls: async (_, { x }) =>
      x ? x.filter(y => y !== null) : []

    // Operations
  },
  Mutation: {
    dateNow: async () => new Date().toLocaleDateString()
  }
}
