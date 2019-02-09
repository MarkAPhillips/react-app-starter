# React App Starter

<center>

[![CircleCI](https://circleci.com/gh/MarkAPhillips/react-app-starter/tree/master.svg?style=svg)](https://circleci.com/gh/MarkAPhillips/react-app-starter/tree/master)

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

</center>

## Introduction

React starter application using Webpack, Redux, Redux Sagas, and Reselect.

CSS using styled components.

Unit tests using Jest.

e2e tests using Cypress.

CI provided by circleci.com

## Prerequisites

Install Node and Docker

### Running with Docker

Create image

```docker build . -t react-app-starter```

Run container image

```docker run --rm -it -p 8080:8080 react-app-starter:latest```


## Installation

```npm i```

## Development

``` npm start ```

## CI Build

```npm run build```

## Unit Tests

Run tests:

```npm test```

Run tests in watch mode:

```npm test:dev```

Run tests with coverage:

```npm test:coverage```

## e2e Tests

``` npm run e2e ```

### Running with Docker

Create image

```docker build . -t react-app-starter```

Run API Server

```docker run --rm -it -p 8080:8080 react-app-starter:latest```
