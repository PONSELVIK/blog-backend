const express =require('express');
const app =express();
const data3= require("../Controllers/Hollywood");




const dataRouter3=express.Router();
dataRouter3.route('/Hollywood')

.get(data3.hollywoodData);

module.exports=dataRouter3