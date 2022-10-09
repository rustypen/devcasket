import { createServer } from '@graphql-yoga/node'
import { resolvers, typeDefs } from "@/server/server";

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
  endpoint: '/api/graphql',
})

export default server