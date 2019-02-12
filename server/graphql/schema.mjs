import buildSchema from '../utils/req';

export const schema = buildSchema(`
    type Todo {
        item: String!,
        completed: Boolean!,
        createdDate: String!
        id: ID!
    }

    input CreateTodoInput {
        item: String,
    }

    input UpdateTodoInput {
        item: String!,
        completed: Boolean!,
    }


    type Query {
        todos: [Todo]
    }

    type Mutation {
    createTodo(input: CreateTodoInput): Todo
    deleteTodo(id: ID!): Boolean
    updateTodo(id: ID!, input: UpdateTodoInput): Todo
}
`);