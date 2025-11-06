const express = require('express');
const pagesRoutes=require("./routes/pages");

const app = express();
app.use('/',pagesRoutes());

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.redirect('/page1');
})

const port=3300;

app.listen(port,()=>{
    console.log(`Servidor: http://127.0.0.1:${port}`);
});
