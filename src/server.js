//
// External imports
//

// load .env into process.env.*
// routing engine
import express from 'express'
// middleware to allow cross-origin requests
import cors from 'cors'
// middleware to support GraphQL
import { ApolloServer } from 'apollo-server-express'
// GraphQL schema compilation
import { makeExecutableSchema } from 'graphql-tools'
// Keep GraphQL stuff nicely factored
import glue from 'schemaglue'
import path from 'path'
import http from 'http'

//
// Internal imports
//
import { log, print } from 'io.maana.shared'
import { name as SELF, version } from '../package'

require('dotenv').config()

const options = {
  mode: 'js' // default
  // ignore: '**/somefileyoudonotwant.js'
}
const schemaPath = path.join(
  '.',
  `${__dirname}`.replace(process.cwd(), ''),
  'graphql/'
)
const glueRes = glue(schemaPath, options)

// Compile schema
export const schema = makeExecutableSchema({
  typeDefs: glueRes.schema,
  resolvers: glueRes.resolver
})

//
// Server setup
//

// HTTP port
const PORT = process.env.PORT

const HOSTNAME = process.env.HOSTNAME || 'localhost'

// External DNS name for service
const PUBLICNAME = process.env.PUBLICNAME || 'localhost'

const main = async () => {
  const app = express()

  //
  // CORS
  //
  const corsOptions = {
    origin: `http://${PUBLICNAME}:${PORT}`,
    credentials: true // <-- REQUIRED backend setting
  }

  app.use(cors(corsOptions)) // enable all CORS requests
  app.options('*', cors()) // enable pre-flight for all routes

  app.get('/', (_, res) => {
    res.send(`${SELF} v${version}\n`)
  })

  const server = new ApolloServer({
    schema
  })

  server.applyMiddleware({
    app
  })

  const httpServer = http.createServer(app)
  httpServer.listen({ port: PORT }, () => {
    log(SELF).info(
      `${print.internal(`v${version}`)} listening on ${print.external(
        `http://${HOSTNAME}:${PORT}/graphql`
      )}`
    )
  })
}

main()
