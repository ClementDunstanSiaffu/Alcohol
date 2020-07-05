const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
require('./models/db.js')
var routes = require('./routes/index')

app.get('/:level',routes.level)
app.listen(PORT,()=>{
    console.log(`listening to the PORT:${PORT}`)
})