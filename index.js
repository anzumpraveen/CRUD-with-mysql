const mysql=require("mysql");
const express=require("express");
const bodyParser = require("body-parser");
var app=express();
const bodyparser=("body-parser");
app.use(bodyParser.json())
var mysqlConnection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Praveen@123",
    database:"sys"
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("DB connection succeded");
    }
    else{
        console.log("DB connection failed \n Error: "+JSON.stringify(err,undefined,2));
    }
})
app.listen(4000,()=>console.log("express server is running at port 4000"))

// get all employees
app.get("/employees",(req,res)=>{
    mysqlConnection.query("SELECT * FROM student_info",(err,rows,fields)=>{
        if(!err){
            res.send(rows)
            // console.log(rows);
        }
        else{
            console.log(err);
        }
    })
})

// get an employees

app.get("/employees/:id",(req,res)=>{
    mysqlConnection.query("SELECT * FROM student_info WHERE id=?",[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
})

// delete employees

app.delete("/employees/:id",(req,res)=>{
    mysqlConnection.query("DELETE  FROM student_info WHERE id=?",[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send("Delete successful !");
        }
        else{
            console.log(err);
        }
    })
})

