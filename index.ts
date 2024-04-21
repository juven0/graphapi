import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone";
import {readFileSync} from "fs"
import mongoose from "mongoose";


await mongoose.connect(`mongodb+srv://${process.env["DB_USER_NAME"]}:${process.env["PASSWORD"]}@graphcluster.ajalihu.mongodb.net/`)
.then(()=> console.log("connected to mongodb"))
.catch(err => {
    console.log(err)
    return
})
const typeDefs = readFileSync('./schema.graphql', {encoding: 'utf-8'})
const resolvers  = {

}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const port = process.env["PORT"]
await startStandaloneServer(server, {
    listen: {port}
}).then(()=>{
    console.log(`🚀  Server ready at: http://localhost:${port}/graphql`);
}).catch((err:Error)=>{
    console.log(err)
    return
})



