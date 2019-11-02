export const resolver = {
  Query: {
    // Identity
    floatIdentity: async (_, { x }) => x,
    floatIdentityOpt: async (_, { x }) => x,

    // NONULL coercion
    floatCoerceFromOpt: async (_, { x }) => x || {},
    floatCoerceToOpt: async (_, { x }) => x,

    // String de/serialization
    floatParse: async (_, { x }) => parseFloat(x),
    floatToString: async (_, { x }) => x.toString(),

    // Lists
    floatListUnion: async (_, { a, b }) => [...new Set([...a, ...b])],
    floatListConcat: async (_, { a, b }) => [...a, ...b],
    floatListReverse: async (_, { x }) => x.reverse(),
    floatListUnique: async (_, { x }) => [...new Set(x)],
    floatListFilterNulls: async (_, { x }) =>
      x ? x.filter(y => y !== null) : [],

    // Operations
    floatEqual: async (_, { a, b }) => a === b,
    floatGreaterThan: async (_, { x, min }) => x > min,
    floatLessThan: async (_, { x, max }) => x < max
  }
}
