export const resolver = {
  Query: {
    // Identity
    dateTimeIdentity: async (_, { a }) => a,
    dateTimeIdentityOpt: async (_, { a }) => a,

    // NONULL coercion
    dateTimeCoerceFromOpt: async (_, { a }) => a || new Date().toISOString(),
    dateTimeCoerceToOpt: async (_, { a }) => a,

    // String de/serialization
    dateTimeParse: async (_, { string }) => Date.parse(string),
    dateTimeToString: async (_, { a }) => a.toString(),

    // Lists
    dateListTimeUnion: async (_, { a, b }) => [...new Set([...a, ...b])],
    dateListTimeConcat: async (_, { a, b }) => [...a, ...b],
    dateListTimeReverse: async (_, { a }) => a.reverse(),

    // Operations
    dateTimeNow: async () => new Date().toISOString()
  }
}
