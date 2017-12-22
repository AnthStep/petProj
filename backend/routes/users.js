const express = require('express');
const router = express.Router();
const User = require("../schemas/user.schema");

const basicUrl = '/api/protected/users'

router.get('/getUser', (req,res)=>{
    console.log(req);
    res.json("Success!")
})

router.get('/getAll', (req,res)=>{
    User
        .find()
        .select('-password')
        .exec(function(err,result){
            if(result){
                return res.status(200).send(result);
            }else if(err){
                return err.status(500).send(err);
            }else {
                return err.status(500).send();
            }

        })
    
})

module.exports = {
    router,
    basicUrl
}

