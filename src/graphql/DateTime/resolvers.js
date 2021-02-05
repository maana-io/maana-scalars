export const resolver = {
  Query: {
    // Identity
    dateTimeIdentity: async (_, { x }) => x,
    dateTimeIdentityOpt: async (_, { x }) => x,

    // NONULL coercion
    dateTimeCoerceFromOpt: async (_, { x }) => x || new Date().toISOString(),
    dateTimeCoerceToOpt: async (_, { x }) => x,

    // String de/serialization
    dateTimeParse: async (_, { x }) => Date.parse(x),
    dateTimeToString: async (_, { x }) => x.toString(),

    // Lists
    dateTimeListUnion: async (_, { a, b }) => [...new Set([...a, ...b])],
    dateTimeListConcat: async (_, { a, b }) => [...a, ...b],
    dateTimeListReverse: async (_, { x }) => x.reverse(),
    dateTimeListUnique: async (_, { x }) => [...new Set(x)],
    dateTimeListFilterNulls: async (_, { x }) =>
      x ? x.filter(y => y !== null) : [],

    // Default value resolution
    dateTimeValueOrDefault: async (_, { value, defaultValue }) =>
      value || defaultValue
  },
  Mutation: {
    dateTimeNow: async () => new Date().toISOString()
  }
}
