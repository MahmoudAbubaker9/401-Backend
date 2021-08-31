const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app= express();
app.use(cors());
app.use(express.json());
PORT = process.env.PORT

const {getCrypto,addFav, deleteFav,getFav,updateFav} = require('./controller/crypto.controller')

const mongoose = require("mongoose");
mongoose.connect('mongodb://database:test123@cluster0-shard-00-00.szzjg.mongodb.net:27017,cluster0-shard-00-01.szzjg.mongodb.net:27017,cluster0-shard-00-02.szzjg.mongodb.net:27017/examdata?ssl=true&replicaSet=atlas-aqiklb-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true });

app.get('/',
 function (req, res) {
  res.send('Hello World')
})

app.get('/getall' , getCrypto)
app.post('/addFav/:email', addFav)
app.delete('/deleteFav/:title/:email',deleteFav)
app.put('/updateFav',updateFav)
app.get('/getFav/:email',getFav)

app.listen(PORT || 8000 , () => {
    console.log(`Im Connected to ${PORT}`);
})