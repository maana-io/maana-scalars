export const resolver = {
  Query: {
    // Identity
    idIdentity: async (_, { x }) => x,
    idIdentityOpt: async (_, { x }) => x,

    // NONULL coercion
    idCoerceFromOpt: async (_, { x }) => x || {},
    idCoerceToOpt: async (_, { x }) => x,

    // String de/serialization
    idParse: async (_, { x }) => JSON.parse(x),
    idToString: async (_, { x }) => JSON.stringify(x),

    // Lists
    idListUnion: async (_, { a, b }) => [...new Set([...a, ...b])],
    idListConcat: async (_, { a, b }) => [...a, ...b],
    idListReverse: async (_, { x }) => x.reverse(),
    idListUnique: async (_, { x }) => [...new Set(x)],
    idListFilterNulls: async (_, { x }) => (x ? x.filter(y => y !== null) : [])

    // Operations
  }
}
