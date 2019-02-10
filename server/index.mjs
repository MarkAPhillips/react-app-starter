import express from 'express';
import graphqlHTTP  from 'express-graphql';
import uuidv4 from 'uuid/v4';
import buildSchema from './utils/req';
import { loadFile } from './utils/fileHandler';

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Todo {
    item: String!,
    completed: Boolean!,
    createdDate: String!
    id: ID!
  }

  input TodoInput {
    item: String,
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
     createTodo(input: TodoInput): Todo
  }
`);

const data = loadFile('./data/db.json');

// The root provides a resolver function for each API endpoint
const root = {
  todos: () => data.todos,
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
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');
