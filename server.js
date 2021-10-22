const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); 

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://admin:123@cluster0.vqybw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    UseUnifiedTopology: true
})

//create a schema

const noteSchema ={
    title: String,
    content: String
}

const Note = mongoose.model("Note", noteSchema);

app.get("/", function(req, res){
    res.sendFile(__dirname + "/app.html");

})

//app.post
app.post('/', function(req, res){
    let newNote = new Note({
        title: req.body.title,
        content: req.body.content
    });
    newNote.save();
    res.redirect('/');
})

app.listen(3000, function(){
    console.log("Server is running on 3000");
})