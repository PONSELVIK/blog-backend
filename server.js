const express= require('express');
const  app= express()
const data1=require ("./Routes/Bollywood")
const data2= require("./Routes/Fitness")
const data3= require("./Routes/Hollywood")
const data4= require("./Routes/Food")
const data5= require("./Routes/Technology")

app.use('./Home',data1)
app.use('./Fitness',data2)
app.use('./Hollywood',data3)
app.use('./Food',data4)
app.use('./Technology',data5)



app.listen(4000,()=>{
    console.log("server started");
})