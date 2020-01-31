export const resolver = {
  Query: {
    // Identity
    floatIdentity: async (_, { x }) => x,
    floatIdentityOpt: async (_, { x }) => x,

    // NONULL coercion
    floatCoerceFromOpt: async (_, { x }) => x || {},
    floatCoerceToOpt: async (_, { x }) => x,

    // Int coercion
    floatFromInt: async (_, { x }) => x,

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
    floatListsAdd: async ( _, { x, y }) => x.slice(0,y.length).map( (a,i) => a+y[i]),  

    // Operations
    floatEqual: async (_, { a, b }) => a === b,
    floatGreaterThan: async (_, { x, min }) => x > min,
    floatLessThan: async (_, { x, max }) => x < max,

    // Constants
    floatZero: async () => 0.0,
    floatOne: async () => 1.0,
    floatTwo: async () => 2.0,
    floatThree: async () => 3.0,
    floatFour: async () => 4.0,
    floatFive: async () => 5.0,
    floatSix: async () => 6.0,
    floatSeven: async () => 7.0,
    floatEight: async () => 8.0,
    floatNine: async () => 9.0,
    floatTen: async () => 10.0
  }
}
