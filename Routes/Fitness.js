const express =require('express');
const app =express();
const data2= require("../Controllers/Fitness");




const dataRouter2=express.Router();
dataRouter2.route('/Fitness')

.get(data2.fitnessData);

module.exports=dataRouter2
