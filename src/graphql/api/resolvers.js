import { name, version, description } from '../../../package'

export const resolver = {
  Query: {
    info: async () => {
      return {
        id: name,
        version,
        name,
        description
      }
    }
  }
}
