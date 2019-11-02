export const resolver = {
  Query: {
    // Identity
    jsonIdentity: async (_, { x }) => x,
    jsonIdentityOpt: async (_, { x }) => x,

    // NONULL coercion
    jsonCoerceFromOpt: async (_, { x }) => x || {},
    jsonCoerceToOpt: async (_, { x }) => x,

    // String de/serialization
    jsonParse: async (_, { x }) => JSON.parse(x),
    jsonToString: async (_, { x }) => JSON.stringify(x),

    // Lists
    jsonListUnion: async (_, { a, b }) => [...new Set([...a, ...b])],
    jsonListConcat: async (_, { a, b }) => [...a, ...b],
    jsonListReverse: async (_, { x }) => x.reverse(),
    jsonListUnique: async (_, { x }) => [...new Set(x)],
    jsonListFilterNulls: async (_, { x }) =>
      x ? x.filter(y => y !== null) : []

    // Operations
  }
}
