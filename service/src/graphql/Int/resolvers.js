export const resolver = {
  Query: {
    // Identity
    intIdentity: async (_, { x }) => x,
    intIdentityOpt: async (_, { x }) => x,

    // NONULL coercion
    intCoerceFromOpt: async (_, { x }) => x || {},
    intCoerceToOpt: async (_, { x }) => x,

    // String de/serialization
    intParse: async (_, { x }) => parseInt(x),
    intToString: async (_, { x }) => x.toString(),

    // Lists
    intListUnion: async (_, { a, b }) => [...new Set([...a, ...b])],
    intListConcat: async (_, { a, b }) => [...a, ...b],
    intListReverse: async (_, { x }) => x.reverse(),
    intListUnique: async (_, { x }) => [...new Set(x)],
    intListFilterNulls: async (_, { x }) => (x ? x.filter(y => y !== null) : [])

    // Operations
  }
}
