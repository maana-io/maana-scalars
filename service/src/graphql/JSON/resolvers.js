export const resolver = {
  Query: {
    // Identity
    jsonIdentity: async (_, { a }) => a,
    jsonIdentityOpt: async (_, { a }) => a,

    // NONULL coercion
    jsonCoerceFromOpt: async (_, { a }) => a || {},
    jsonCoerceToOpt: async (_, { a }) => a,

    // String de/serialization
    jsonParse: async (_, { string }) => JSON.parse(string),
    jsonToString: async (_, { a }) => JSON.stringify(a),

    // Lists
    jsonListUnion: async (_, { a, b }) => [...new Set([...a, ...b])],
    jsonListConcat: async (_, { a, b }) => [...a, ...b],
    jsonListReverse: async (_, { a }) => a.reverse()

    // Operations
  }
}
