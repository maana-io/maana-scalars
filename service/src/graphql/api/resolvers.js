export const resolver = {
  Query: {
    info: async () => {
      return {
        id: 'io.maana.q.scalars',
        name: 'Maana Q Scalars',
        description:
          'Maana Q service for scalar identities, coercions, serialization / deserialization, list operation, and scalar-specific operations'
      }
    }
  }
}
