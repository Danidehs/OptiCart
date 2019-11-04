const express = require('express'),
    path = require('path');

const app = express();

app.use(express.static('./dist/tfjs-object-detection'));

app.get('/*', (req,res)=>{
    res.sendFile(path.join(__dirname, '/dist/tfjs-object-detection/src/index.html'));
});

app.listen(process.env.PORT || 8080, ()=>{
    console.log('Server started');
})