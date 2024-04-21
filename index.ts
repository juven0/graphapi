import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone";
import {readFileSync} from "fs"
import mongoose, { Query } from "mongoose";


await mongoose.connect(`mongodb+srv://${process.env["DB_USER_NAME"]}:${process.env["PASSWORD"]}@graphcluster.ajalihu.mongodb.net/`)
.then(()=> console.log("connected to mongodb"))
.catch(err => {
    console.log(err)
    return
})
const typeDefs = readFileSync('./schema.graphql', {encoding: 'utf-8'})
const resolvers  = {
    Query:{
        users:() =>{
            
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

await startStandaloneServer(server, {}).then((url)=>{
    console.log(`🚀  Server ready at: ${url.url}graphql`);
}).catch((err:Error)=>{
    console.log(err)
    return
})




