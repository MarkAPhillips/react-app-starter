import express from 'express';
import graphqlHTTP  from 'express-graphql';
import uuidv4 from 'uuid/v4';
import cors from 'cors';
import _ from 'lodash';
import { schema } from './graphql/schema';
import { loadFile } from './utils/fileHandler';

const data = loadFile('./data/db.json');

// TODO:  Requires rework as currently mutates the array
// Need to implement persistent back end layer
const root = {
  todos: () => data.todos,
  deleteTodo: ( { id }) =>  {
    _.remove(data.todos, item => item.id === id);
    return true;
  },
  updateTodo: ( { id, input }) => {
    const { item, completed } = input;
    const todo = data.todos.find(item => item.id === id);
    if(item != null) {
      todo.item = item;
    }
    if(completed != null) {
      todo.completed = completed;
    }
    return todo;
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
