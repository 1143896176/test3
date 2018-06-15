const expres=require('express')
const app=expres()

app.use('/aaa',(req, res)=>{
console.log(req)
res.end();
})
app.listen(8080 ,()=>{
console.log(8080)
})