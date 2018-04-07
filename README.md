# code spliting with CRA
How if we can split our code, so we can component for mobile and desktop app, with smaller code?

this is just experiment

## Config

default .env
```
NODE_PATH=src/
REACT_APP_SERVER_PORT=8080
```

## RUN
```sh
yarn start
yarn watch-css:mobile
yarn watch-css:web
yarn scripts/copy-css
```

for server
```sh
yarn build
yarn start:server
```
