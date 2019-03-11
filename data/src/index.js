const { prisma } = require('../generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')
const Query = require('../resolvers/Query')

const resolvers = {
  Query,
  Mutation: {
    createCustomer(root, args, context) {
      return context.prisma.createCustomer(
        { email: args.email, password: args.password }
      )
    }
  }
}

const server = new GraphQLServer({
  typeDefs: '../data/schema.graphql',
  resolvers,
  context: {
    prisma
  },
})
server.start(() => console.log('Server is running on http://localhost:4000'))