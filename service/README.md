# maana-q-scalars service

## Build and Deploy

```
cd service
npm i
npm run docker-build
cd ..
gql mdeploy
```

- `Private Docker Registry`
- name: `maana-q-scalars`
- Dockerfile: `./service`
- Container registry: `services.azurecr.io`
- Exposing port: `8500`
