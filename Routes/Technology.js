const express =require('express');
const app =express();
const data5= require("../Controllers/Technology");




const dataRouter5=express.Router();
dataRouter5.route('/Tecnology')

.get(data5.technologyData);

module.exports=dataRouter5