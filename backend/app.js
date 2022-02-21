const mongoose = require('mongoose');

const dbUrl = "mongodb://localhost:27017/full-stack" 

mongoose.connect(dbUrl)
    .then(()=>{
        console.log('have been connected to the database')
    }).catch((err)=>{
        console.log('error in connecting ' + err );
    })