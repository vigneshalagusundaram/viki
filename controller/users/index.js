const data=[
    {
        name:"viki"
    },
    {
        name:"deva"
    },
    {
        name:"mathi"
    },
    {
        name:"maran"
    },
]
exports.getUser= function(req,res){
    res.send({
        massage:"Data are fatching sucessfully",
        data
    })
}