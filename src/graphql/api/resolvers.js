import { version } from '../../../package'

export const resolver = {
  Query: {
    info: async () => {
      return {
        id: 'io.maana.q.scalars',
        name: `Maana Q Scalars v${version}`,
        description:
          'Maana Q service for scalar identities, coercions, serialization / deserialization, list operation, and scalar-specific operations'
      }
    }
  }
}
