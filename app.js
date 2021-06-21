const express=require ('express')
const mongoose = require("mongoose");
const url = "mongodb+srv://emp:emp12345@cluster0.xwprx.mongodb.net/bank-db";

const app=express()

mongoose.connect(url,{useNewUrlParser:true}).then(()=>{
    console.log('database connected');
})

// const con = mongoose.connection

// con.on('open',Function())
// {
//     
// }

app.use(express.json())


const accountsRouter = require('./routes/accounts')
app.use('/accounts', accountsRouter)

app.listen(5000,Function());
console.log('server started')

    



   


