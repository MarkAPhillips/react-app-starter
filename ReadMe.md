# React App Starter

<center>

[![CircleCI](https://circleci.com/gh/MarkAPhillips/react-app-starter/tree/master.svg?style=svg)](https://circleci.com/gh/MarkAPhillips/react-app-starter/tree/master)

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

</center>

## Introduction

React starter application using React Apollo Client for GraphQL (WIP)

CSS using styled components.

Unit tests using Jest.

e2e tests using Cypress.

CI provided by circleci.com

## Prerequisites

Install [Docker](https://www.docker.com/get-started)

### Running with Docker

Create image for client

```cd client```
```docker build . -t react-app-starter```

Create image for server

```cd server```
```docker build . -t react-app-api```

Run container image

```docker-compose up```


## Unit Tests

Run tests:

```npm test```

Run tests in watch mode:

```npm test:dev```

Run tests with coverage:

```npm test:coverage```

## e2e Tests

``` npm run e2e ```
