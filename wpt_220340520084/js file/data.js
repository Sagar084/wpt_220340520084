//express package
const express=require('express');
//expreess object
const app=express();
//static html files
app.use(express.static('sf'));


//import mysql2 module
const no=require('mysql2');
//database para
let para=
{
    host: 'localhost',
    user: 'sagar',
    password: 'cdac',
    database: 'sagar',
	port:3306
}; // 
let con=no.createConnection(para);//connection for database


//get requewst
app.get("/register",(req,res)=>{
//console.log(req);
let x=req.query.name;
let y=req.query.username;
let z=req.query.password;

console.log(x+"  "+y+"  "+z);

//let obj={status:false};
//for inserting into databses
con.query(insert into jay value ('jay','bediskar','bediskar5050'),[x,y,z],(err,data)=>{
if(err){
    console.log(err);
}
else{
    if(data.affectedRows>0){
        console.log("data is inserted");

    }
}
})
})

//starting the server
app.listen(500,()=>{
    console.log("server is running");
})