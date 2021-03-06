const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.static("views"));

app.get('/stats', (req, res) => {
  let stats = require('/views/stats.html')
  res.set(stats)
})

app.get('/', function(req, res){
    res.render('index.ejs')
});
app.set('view engine', 'ejs')

app.post('/shortUrls', (req, res) =>{

})

app.listen(process.env.PORT || 5000);
