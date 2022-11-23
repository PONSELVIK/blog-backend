const express =require('express');
const app =express();
const data4= require("../Controllers/Food");




const dataRouter4=express.Router();
dataRouter4.route('/Food')

.get(data4.foodData);

module.exports=dataRouter4
