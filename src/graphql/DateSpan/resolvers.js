const construct = fields => ({ id: JSON.stringify(fields), ...fields })

const constructFromId = id => ({ id, ...JSON.parse(id) })

export const resolver = {
  Query: {
    // Identity
    dateSpanIdentity: async (_, { x }) => x,
    dateSpanIdentityOpt: async (_, { x }) => x,

    // NONULL coercion
    dateSpanCoerceFromOpt: async (_, { x }) =>
      x || construct({ start: null, end: null }),
    dateSpanCoerceToOpt: async (_, { x }) => x,

    // String de/serialization
    dateSpanParse: async (_, { x }) => JSON.parse(x),
    dateSpanToString: async (_, args) => JSON.stringify(args),

    // Lists
    dateSpanListUnion: async (_, { a, b }) => [...new Set([...a, ...b])],
    dateSpanListConcat: async (_, { a, b }) => [...a, ...b],
    dateSpanListReverse: async (_, { x }) => x.reverse(),
    dateSpanListUnique: async (_, { x }) => [...new Set(x)],
    dateSpanListFilterNulls: async (_, { x }) =>
      x ? x.filter(y => y !== null) : [],

    // Operations

    // Projectors
    dateSpanStart: async (_, { x }) => x.start,
    dateSpanEnd: async (_, { x }) => x.end
  },
  Mutation: {
    // Operations
    // Constructors
    dateSpanConstruct: async (_, args) => construct(args),
    dateSpanConstructFromId: async (_, { id }) => constructFromId(id)
  }
}
