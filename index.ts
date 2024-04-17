import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone";
import {readFileSync} from "fs"

const typeDefs = readFileSync('./schema.graphql', {encoding: 'utf-8'})
const resolvers  = {

}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const port = 1212
await startStandaloneServer(server, {
    listen: {port}
})

console.log(`🚀  Server ready at: http://localhost:${port}/graphql`);

