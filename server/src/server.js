const express=require('express')
const connect=require("./config/db")
const cors=require("cors")
const app=express()



const start=async()=>{
    try{
        await connect()
        app.listen(8000,()=>{
            console.log("listening to port 8000")
        })
    }
    catch(e){
        console.log(e)
    }
}
module.exports=start
