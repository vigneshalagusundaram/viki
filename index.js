const express =require("express")
const app = express()
const indexRouter =require("./Router/index")
const usersRouter =require("./Router/users")
const DeshboardRouter =require("./Router/Deshboard")
const PORT=process.env.PORT || 3100
app.use(express.json())
app.use('/',indexRouter)
app.use('/users',usersRouter)
app.use('/Deshboard',DeshboardRouter)


app.listen(PORT,()=>console.log(`App running in the port ${PORT}`))