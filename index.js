const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
dotenv.config();

require('./DBConnect')
const app=express()
const port=process.env.PORT

app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("hello")
})
app.use('/api/user',require('./routes/user'))
app.use('/api/task',require('./routes/task'))


app.listen(port,()=>{
    console.log(`conected sucessfully to http://localhost:${port}`);
})
