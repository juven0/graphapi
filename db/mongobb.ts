import mongoose from 'mongoose'

const MONGOURI = "mongodb://localhost:27017/grapgapi"
export const dbConn = mongoose.connect(MONGOURI,
   
)
.then(()=> console.log("connected to mongodb"))
.catch(err => console.log(err))