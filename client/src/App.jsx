import React from 'react';
import { Main, Header } from './assets/styles/components';
import { TodoContainer } from './components/todos';

const App = () => (
  <Main>
    <Header> React Starter App - Todo list</Header>
    <TodoContainer />
  </Main>
);

export default App;
