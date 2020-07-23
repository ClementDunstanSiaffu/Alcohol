const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
require('./models/db.js')
var routes = require('./routes/index')

app.get('/give/:level',routes.level)
app.get('/alcohol/pata',routes.getLevel)
app.listen(PORT,()=>{
    console.log(`listening to the PORT:${PORT}`)
})