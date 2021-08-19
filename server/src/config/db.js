const mongoose= require('mongoose')
require("dotenv").config();
const connect=()=>{
    return mongoose.connect(`mongodb+srv://twitter:${process.env.PASSWORD}@cluster0.qd9w5.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:true,
    })
}
module.exports =connect