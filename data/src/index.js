import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

const { prisma } = require('../generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')
const Query = require('../resolvers/Query')
const Mutation = require('../resolvers/Mutation')

const resolvers = {
  Query,
  Mutation
}

const server = new GraphQLServer({
  typeDefs: '../data/schema.graphql',
  resolvers,
  context: {
    prisma
  },
})
server.start(() => console.log('Server is running on http://localhost:4000'))