import React from 'react';
import { Main, Header } from './common/styles/components';
import { TodoContainer } from './todos/components';

const App = () => <Main><Header> Todo List </Header><TodoContainer /></Main>;

export default App;
