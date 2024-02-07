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
    
        update: async (parent, args) => {
            const { id } = args;
            const updatedTask = await Task.findByIdAndUpdate(id, args);
            if (!updatedTask) {
                throw new Error(`Task with ID ${id} not found`);
            }
            return updatedTask;
        },
        delete: async (parent, args) => {
            const { id } = args;
            const deletedTask = await Task.findByIdAndDelete(id);
            if (!deletedTask) {
                throw new Error(`Task with ID ${id} not found`);
            }
            return deletedTask;
        },
    }
  };
  
  module.exports = { resolvers };