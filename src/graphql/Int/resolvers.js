export const resolver = {
  Query: {
    // Identity
    intIdentity: async (_, { x }) => x,
    intIdentityOpt: async (_, { x }) => x,

    // NONULL coercion
    intCoerceFromOpt: async (_, { x }) => x || {},
    intCoerceToOpt: async (_, { x }) => x,

    // Float coercion
    intFromFloat: async (_, { x }) => Math.floor(x),

    // String de/serialization
    intParse: async (_, { x }) => parseInt(x),
    intToString: async (_, { x }) => x.toString(),

    // Lists
    intListUnion: async (_, { a, b }) => [...new Set([...a, ...b])],
    intListConcat: async (_, { a, b }) => [...a, ...b],
    intListReverse: async (_, { x }) => x.reverse(),
    intListUnique: async (_, { x }) => [...new Set(x)],
    intListFilterNulls: async (_, { x }) =>
      x ? x.filter(y => y !== null) : [],
    intListsAdd: async ( _, { x, y }) => x.slice(0,y.length).map( (a,i) => a+y[i]),  

    // Operations

    // Constants
    intZero: async () => 0,
    intOne: async () => 1,
    intTwo: async () => 2,
    intThree: async () => 3,
    intFour: async () => 4,
    intFive: async () => 5,
    intSix: async () => 6,
    intSeven: async () => 7,
    intEight: async () => 8,
    intNine: async () => 9,
    intTen: async () => 10
  }
}
