const express = require('express')
const router =express.Router()

const users=[
    {
        name:"viki",
        email:"viki@gmail.com",
        password:"admin@1",
        role:"Teacher"
    },
    {
        name:"deva",
        email:"dava@gmail.com",
        password:"admin@1",
        role:"student"

    },
    {
        name:"mathi",
        email:"mathi@gmail.com",
        password:"admin@1",
        role:"student"
    },
    {
        name:"maran",
        email:"maran@gmail.com",
        password:"admin@1",
        role:"student"
    },
]

router.get('/',(req,res)=>{
    res
    .status(200)
    .send({
        massage:"All Users data fatch sucessfully",
        data:users
    })
})

router.get('/:id',(req,res)=>{
    if (Number(req.params.id)<users.length){
        res
        .status(200)
        .send({
            massage:"Users Data Fatch sucessfully",
            data:users[req.params.id] 
         })
    }
    else{
        res
        .status(400)
        .send({
            massage:"User Not Found"
        })
    }
})

router.post('/',(req,res)=>{
    console.log(req.body)
    users.push(req.body)
    res
    .status(200)
    .send({
            massage:"Users Data Save Sucessfully",
            
    })
   
  
})
router.put('/:id',(req,res)=>{
    users.splice(req.params.id,1,req.body)
    if (Number(req.params.id)<users.length){
        res
        .status(200)
        .send({
            massage:"Users Data Update sucessfully",
            data:users[req.params.id] 
         })
    }
    else{
        res
        .status(400)
        .send({
            massage:"User Not Found"
        })
    }
  
})


router.delete('/:id',(req,res)=>{
    users.splice(req.params.id,1)
    if (Number(req.params.id)<users.length){
        res
        .status(200)
        .send({
            massage:"Users Data Deleted sucessfully",
            data:users 
         })
    }
    else{
        res
        .status(400)
        .send({
            massage:"User Not Found"
        })
    }
  
})

module.exports =router