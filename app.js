// jshint esversion:6

// downloaded two package the body-parser and express through npm

const express = require("express");
const bodyParser = require("body-parser");
const date =require(__dirname + "/date.js");

const app = express();
const items=[];
const workItems = [];
app.use(bodyParser.urlencoded({extended:true}));  // to get app post
app.use(express.static("public"));
app.set("view engine", 'ejs');
 
// will send the browser 'hello'

app.get("/", function(req, res)
{   //var a = 3+5;          // we send like we wend hello
    //res.send("hello");    // response and send 'hello' to the web page

     let day= date.getDate();
    

    //if(currentDay === 6 || currentDay === 0){
      // day = "Weekend";
      
      // res.write("<h1>Yay it's the weekend!</h1>"); 
   // } 
    //else{
       // day = "Weekday";
       // res.write("<p>It is not weekend.</p>");
        // res.write("<h1>Boo! I have to work!</h1>");
        // res.send();


        //res.sendFile(__dirname + "/index.html");   to send whole files
    //}
    
    res.render("list",{listTitle: day, newListItems: items});

});


// to get value which is enter by user on web page

app.post("/", function(req, res){
    
   // console.log(req.body);
    let item=req.body.newItem;

    if(req.body.list === "Work"){
         workItems.push(item);
         res.redirect("/work")
    } else{
        items.push(item);

         res.redirect("/");
    }

    
    

});

app.get("/work", function(req,res){
    res.render("list",{listTitle:"Work List", newListItems: workItems});
});

app.get("/about", function(req,res){
    res.render("about");
});



// listen on port 3000

app.listen(3000,function(){
    console.log("Server started on port 3000");
})