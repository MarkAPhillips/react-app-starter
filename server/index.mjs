import express from 'express';
import graphqlHTTP  from 'express-graphql';
import uuidv4 from 'uuid/v4';
import cors from 'cors';
import _ from 'lodash';
import { schema } from './graphql/schema';
import { loadFile } from './utils/fileHandler';

const data = loadFile('./data/db.json');

// The root provides a resolver function for each API endpoint
const root = {
  todos: () => data.todos,
  deleteTodo: ( { input }) => {
    const { id } = input;
    return _.remove(data.todos, item => item.id === id);
  },
  updateTodo: ( { input }) => {
    const { item, completed, id } = input;
    return data.todos.map(todo => { 
        if(todo.id === id ) {
          return { ...todo, item, completed }
        }
        return todo;
      });
  },
  createTodo: ( { input }) => {
    const { item } = input;
    const todo = {
      item,
      completed: false,
      id: uuidv4(),
      createdDate: new Date().toISOString(),
    }
    data.todos.push(todo);
    return todo;
    },
};

const app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');
