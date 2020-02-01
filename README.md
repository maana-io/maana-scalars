# Maana Scalars (maana-scalars)

Maana Q service for scalar identities, coercions, serialization / deserialization, list operation, and scalar-specific operations.

## Build

```
# update version in package.json
npm i
npm run docker-build
```

## Deployment

1. Make sure you have [GraphQL CLI](https://www.npmjs.com/package/graphql-cli) and [Q CLI](https://www.npmjs.com/package/graphql-cli-maana) installed by running
   `npm install -g graphql-cli graphql-cli-maana`
2. Login to your docker registry of choice using `docker login` or `az acr login`
3. From the root of `maana-q-scalars`, run
   `gql mdeploy`
4. Choose `Private Docker Registry`
5. Service name: `maana-q-scalars` (the default value)
6. Path to the docker file: select the default value
7. Provide the path to your container registry - the default is `services.azurecr.io`
8. Provide a version name (e.g. `v1.0`, same as in `package.json`)
9. and number of pods - the default value is `1`.
10. Provide the port for your application - the default is `8050`
11. Wait for the deployment to complete.
