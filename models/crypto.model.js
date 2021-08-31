const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CryptoSchema = new Schema({
    title:String,
    description:String,
    toUSD:String,
    image_url:String,
    id:String,
    email:String
});

const CryptoModel = mongoose.model("cryptos", CryptoSchema);

module.exports = CryptoModel;

// function SeddFunction() {
//     let yahya = new CryptoModel {
//         title:"Ethereum"
//         description:'Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. After Bitcoin, it is the largest cryptocurrency by market capitalization. Ethereum was invented in 2013 by programmer Vitalik Buterin',
//         toUSD:'3,288.49',
//         image_url:'https://media.wired.com/photos/598a36a7f15ef46f2c68ebab/master/pass/iStock-696221484.jpg',
//         id:'1',
//         email:'v.salvatore7.gs@gmail.com'
//     }
//     yahya.save()
// }

// SeddFunction()