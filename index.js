const express = require('express');

const app = express();

app.get('/',(req,res) =>{ 
    res.send('I know how to run node Yay port change ')
})
app.listen(4200,()=> console.log('listening to the port 3000'));
