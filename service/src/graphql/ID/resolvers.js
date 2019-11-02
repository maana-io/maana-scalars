export const resolver = {
  Query: {
    // Identity
    idIdentity: async (_, { a }) => a,
    idIdentityOpt: async (_, { a }) => a,

    // NONULL coercion
    idCoerceFromOpt: async (_, { a }) => a || {},
    idCoerceToOpt: async (_, { a }) => a,

    // String de/serialization
    idParse: async (_, { string }) => JSON.parse(string),
    idToString: async (_, { a }) => JSON.stringify(a),

    // Lists
    idListUnion: async (_, { a, b }) => [...new Set([...a, ...b])],
    idListConcat: async (_, { a, b }) => [...a, ...b],
    idListReverse: async (_, { a }) => a.reverse()

    // Operations
  }
}
