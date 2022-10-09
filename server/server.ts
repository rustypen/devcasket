export const typeDefs = /* GraphQL */ `
  type Query {
    users: [User!]!
  }
  type User {
    name: String
  }
`

export const resolvers = {
  Query: {
    users() {
      return [{ name: 'Nextjs' }]
    },
  },
}