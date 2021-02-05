var falsy = /^(?:f(?:alse)?|no?|0+)$/i
Boolean.parse = function(val) {
  return !falsy.test(val) && !!val
}

export const resolver = {
  Query: {
    // Identity
    booleanIdentity: async (_, { x }) => x,
    booleanIdentityOpt: async (_, { x }) => x,

    // NONULL coercion
    booleanCoerceFromOpt: async (_, { x }) => x || false,
    booleanCoerceToOpt: async (_, { x }) => x,

    // String de/serialization
    booleanParse: async (_, { x }) => Boolean.parse(x),
    booleanToString: async (_, { x }) => x.toString(),

    // Lists
    booleanListUnion: async (_, { a, b }) => [...new Set([...a, ...b])],
    booleanListConcat: async (_, { a, b }) => [...a, ...b],
    booleanListReverse: async (_, { x }) => x.reverse(),
    booleanListUnique: async (_, { x }) => [...new Set(x)],
    booleanListFilterNulls: async (_, { x }) =>
      x ? x.filter(y => y !== null) : [],

    // Operations
    booleanOr: async (_, { a, b }) => a || b,
    booleanAnd: async (_, { a, b }) => a && b,
    booleanXor: async (_, { a, b }) => (a ? !b : b),
    booleanNot: async (_, { x }) => !x,

    // Constants
    booleanTrue: async () => true,
    booleanFalse: async () => false,

    // Default value resolution
    booleanValueOrDefault: async (_, { value, defaultValue }) =>
      value || defaultValue
  }
}
