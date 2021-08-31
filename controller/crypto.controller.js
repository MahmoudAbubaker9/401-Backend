const axios = require('axios');
const CryptoModel = require('../models/crypto.model')

const getCrypto = (req,res) =>{
    axios.get('https://crypto-explorer.herokuapp.com/crypto-list/')
    .then(result => {
        res.status(200).json(result.data)
    })
    .catch(error =>{
        res.status(500).json(error.message)
    })
}

const addFav = (req,res) =>{
    const{title,description,toUSD,image_url,email,id}=req.body
    CryptoModel.findOne({id:id ,email:req.params.email })
    .then(found => {
        if(found === null){
            const newFav = new CryptoModel ({
                title:title,
                description:description,
                toUSD:toUSD,
                image_url:image_url,
                email:req.params.email,
                id:id
            })
            newFav.save()
            .then(result => {
                res.status(200).json('Done')
            })
            .catch(error => {
                res.status(500).json(error.message)
            })
        }else{
            res.status(404).json('already exist')
        }
    }).catch(error => {
        res.status(500).json(error.message)
    })

}

const deleteFav = (req,res) =>{
    CryptoModel.findOneAndDelete({title:req.params.title , email:req.params.email })
    .then(result=>{
        if(result !== null){
            res.status(200).json('deleted')
        }else{
            res.status(404).json('NOt Found')
        }
    })
    .catch(error => {
        res.status(500).json(error.message)
    })
}

const updateFav = (req,res) =>{
    const{title,description,toUSD,image_url,email,id}=req.body
    CryptoModel.findOneAndUpdate({id:id , email:email})
    .then(result=>{
        if(result !== null){
            result.title=title,
            result.description=description,
            result.toUSD=toUSD,
            result.image_url=image_url,
            result.id=id

            result.save()
            res.status(200).json('Updated')
        }else{
            res.status(404).json('Not Found')
        }
    })
    .catch(error => {
        res.status(500).json(error.message)
    })

}

const getFav = (req,res) =>{
    CryptoModel.find({email:req.params.email})
    .then(result => {
        if(result.length !== 0){
        res.status(200).json(result)
    }else{
        res.status(404).json('Not exist')
    }
    })
    .catch(error =>{
        res.status(500).json(error.message)
    })

}
module.exports = {getCrypto,addFav, deleteFav,getFav,updateFav}