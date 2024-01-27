import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// Server
const server = new ApolloServer({
    //typeDefs -- definitions of data types
    //resolvers

})

const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log('Server running at port', 4000)