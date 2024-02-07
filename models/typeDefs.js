const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    greetings: String
    welcome(name: String): String
    tasks: [Task] #return array of tasks
    task(id: ID): Task #return task by id
  }

  # Task object
  type Task {
    id: ID
    title: String
    isComplete: Boolean
  }

  # Mutation
  type Mutation {
    create(title: String, isComplete: Boolean): Task
    update(id: ID, title: String, isComplete: Boolean): Task
    delete(id: ID): Task
  }
`;

module.exports = { typeDefs };