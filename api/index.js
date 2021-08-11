const { ApolloServer } = require('apollo-server')
const userSchema = require('./user/schema/user.graphql')

const users = [
    {
        nome: "Ana",
        ativo: true
    },
    {
        nome: "Paula",
        ativo: false
    }
]

const typeDefs = [userSchema]
const resolvers = {}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen({ port: 4001 }).then(({ url }) => {
    console.log(`Servidor rodando na porta ${ url }`);
})