# React Web Mobile Skeleton
How if we can split our code, so we can create component for mobile and desktop app, with smaller code?

this is just experiment

this script created with `create-react-app`

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

## Concept
in this app, i try to solve problem with mobile view site,
we usually create responsive, or separated web and mobile view.

one of reasons about separated view is to serve fast and full ui in mobile device,
so user with mobile device can interact with the web wit better speed and optimal UI UX on smaller device

for example `facebook.com` it have mobile site web at `m.facebook.com`.
but then we create 2 site the main site and sub domain site.
while we search in google and use mobile phone
we will redirected to the sub domain site, this concept have several disadvantages, ex:
1. need to redirect beetween main site and mobile site,
2. need to use 2 domain
3. project will separated into 2 main App

with this Skeleton i hope can solve that isues by combining web app and mobile app view in one project App.
So we can develop all the view Faster in one Project App, and have better code spliting concept.

web page with same concept
1. blibli.com
2. shopee.co.id

## Idea
please watch this
- https://www.youtube.com/watch?time_continue=683&v=bb6RCrDaxhw

## Folder Structure
please dont be confuse with the Capital Folder, the Capital folder mean its a component and can accessed directly

```
/src
  /App
  -> main App Route
  /mobile
  -> contain mobile specific view
  /web
  -> contain web specific view
  /shared
  -> contain shared Component, can accessed from both side
  /ssr
  -> Server site rendering magic
  /utils
  -> helper function
  /actions
  -> redux action
  /reducers
  -> reducer function
  index.js
```

## Todo
- cuncurent the npm script
