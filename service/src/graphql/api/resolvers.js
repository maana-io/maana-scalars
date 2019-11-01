const dateTime0 = new Date(0)
const date0 = dateTime0.getDate()
const time0 = dateTime0.getTime()

console.log('Date0: ', date0)
console.log('Time0: ', time0)

export const resolver = {
  Query: {
    info: async () => {
      return {
        id: 'maana-q-scalars',
        name: 'maana-q-scalars',
        description: 'Maana Q service for scalar identies and coercions'
      }
    },

    dateIdentity: async (_, { a }) => a,
    dateTimeIdentity: async (_, { a }) => a,
    floatIdentity: async (_, { a }) => a,
    idIdentity: async (_, { a }) => a,
    intIdentity: async (_, { a }) => a,
    jsonIdentity: async (_, { a }) => a,
    stringIdentity: async (_, { a }) => a,
    timeIdentity: async (_, { a }) => a,

    dateIdentityOpt: async (_, { a }) => a,
    dateTimeIdentityOpt: async (_, { a }) => a,
    floatIdentityOpt: async (_, { a }) => a,
    idIdentityOpt: async (_, { a }) => a,
    intIdentityOpt: async (_, { a }) => a,
    jsonIdentityOpt: async (_, { a }) => a,
    stringIdentityOpt: async (_, { a }) => a,
    timeIdentityOpt: async (_, { a }) => a,

    dateCoerceFromOpt: async (_, { a }) => a || date0,
    dateTimeCoerceFromOpt: async (_, { a }) => a || dateTime0,
    floatCoerceFromOpt: async (_, { a }) => a || 0.0,
    idCoerceFromOpt: async (_, { a }) => a || '',
    intCoerceFromOpt: async (_, { a }) => a || 0,
    jsonCoerceFromOpt: async (_, { a }) => a || {},
    stringCoerceFromOpt: async (_, { a }) => a || '',
    timeCoerceFromOpt: async (_, { a }) => a || time0,

    dateCoerceToOpt: async (_, { a }) => a,
    dateTimeCoerceToOpt: async (_, { a }) => a,
    floatCoerceToOpt: async (_, { a }) => a,
    idCoerceToOpt: async (_, { a }) => a,
    intCoerceToOpt: async (_, { a }) => a,
    jsonCoerceToOpt: async (_, { a }) => a,
    stringCoerceToOpt: async (_, { a }) => a,
    timeCoerceToOpt: async (_, { a }) => a,

    unionString: async (_, { a, b }) => [...new Set([...a, ...b])]
  }
}
