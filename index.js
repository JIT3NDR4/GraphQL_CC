import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

//db
import db from './_db.js'

//types
import { typeDefs } from './schema.js'

const resolvers = {
    Query: {
        games(){
            return db.games
        },
        reviews(){
            return db.reviews
        },
        authors(){
            return db.authors
        },
    }
}

// Server
const server = new ApolloServer({
    //typeDefs -- definitions of data types
    typeDefs,
     //resolvers -- handle incoming requests and return data to the clients
    resolvers

})

const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}

})

console.log('Server running at port', 4000)