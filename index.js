const express =require("express")
const app = express()
const indexRouter =require("./Router/index")
const usersRouter =require("./Router/users")
const DeshboardRouter =require("./Router/Deshboard")

app.use(express.json())
app.use('/',indexRouter)
app.use('/users',usersRouter)
app.use('/Deshboard',DeshboardRouter)


app.listen(3100,()=>console.log("App running in the port 3100"))