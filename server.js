const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const sendMail = require('./mail');


// const log=console.log;
const app=express();
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mywebsite',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected',()=>{
    console.log('Mongoose is connected!!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('/build'));
}

//Schema
const Schema=mongoose.Schema;
const ContactFormSchema = new Schema({
    name: String,
    email: String,
    message: String,
    date:{
        type:String,
        default:Date.now()
    }
});

const ContactForm = mongoose.model('ContactForm',ContactFormSchema);

//HTTP request logger
app.use(morgan('tiny'));

//Routes
app.get('/api',(req,res)=>{
   
    ContactForm.find({  })
        .then((data)=>{
            console.log('Data: ',data);
            res.json(data);
        })
        .catch((error)=>{
            console.log('Error: ',daerrorta);
        });
    
});

app.post('/api/save',(req,res)=>{
    const {name, email, message} = req.body;
    console.log('Body: ', req.body);
    sendMail(name, email, message, function(err,data){
        if(err){
            res.status(500).json({msg:'Sorry, internal server errors'});
            return;
        }
        return res.json({
                msg:'Email sent'
        });
    });
    const data = req.body;
    const newContactForm = new ContactForm(data);
    newContactForm.save((error) =>{
        if(error){
            res.status(500).json({msg:'Sorry, internal server errors'});
            return;
        }
        return res.json({
                msg:'We received your data'
        });
    });    
});

app.get('/api/name',(req,res)=>{
    const data = {
        username:'kcklchong',
        age: 5
    };
    res.json(data);
});



app.listen(PORT, console.log(`Server is starting on PORT at ${PORT}`));