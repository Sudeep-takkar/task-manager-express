const { Task } = require("./models/Task.js");
const resolvers = {
    Query: {
        greetings: () => "GraphQL is Awesome",
        welcome: (parent, args) => `Hello ${args.name}`,
        tasks: async () => await Task.find({}),
        task: async (parent, args) => await Task.findById(args.id),
    },
    Mutation: {
        create: async (parent, args) => {
          const { title, isComplete } = args;
          const newTask = new Task({
            title,
            isComplete
          });
          await newTask.save();
          return newTask;
        },
      },
  };
  
  module.exports = { resolvers };