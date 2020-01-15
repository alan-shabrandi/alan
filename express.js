const express = require('express');
const hbs = require('hbs');
const path = require('path');
const fs = require('fs')

const app = express();

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname , 'public')));

app.use((req,res,next)=>{
    let date = new Date().toString();
    let log = `${date} : ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('./MyFiles/serverlog.txt', log + '\n' , (err)=>{
        console.log(err);
    } );
    next(); 
})

app.use((req,res,next)=>{
    if(req.url==='/'){
        res.send("NOOOOO");
    }
    else{
        next();
    }
})

hbs.registerPartials(path.join(__dirname , "Views/partials"));
hbs.registerHelper("date" , ()=>{
    return new Date().getFullYear();
});

hbs.registerHelper("uppercase" , (text)=>{
    return text.toUpperCase();
})

app.get('/', (req,res)=>{
    // res.send('Welcome to my website');
    res.render("home" , {
        pageTitle : "Node js learn",
        title : "Alan shabrandi",
        // date : new Date().getFullYear()
    });
});
app.get('/api/sayHello', (req,res)=>{
    res.send("Hello dear user");
});

app.listen(4000,()=>{
    console.log("sever is running on port 4000");
})