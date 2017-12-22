const express = require('express');
const router = express.Router();
const Project = require("../schemas/project.schema");
const User = require("../schemas/user.schema");

const basicUrl = '/api/protected/projects'

router.post('/create', (req, res) => {
    const newProject = new Project(req.body);
    newProject.save((err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            User
                .where('_id')
                .in(req.body.participants)
                .update(
                    {
                        $push: {
                            projects: result._id
                        }
                    }
                )
                .exec((err,result) => {
                    if(result){
                        return res.status(200).send({success: true});
                    }else if(err){
                        return err.status(500).send(err);
                    }else {
                        return err.status(500).send();
                    }
                });
        }
    })
})

router.get('/getAll', (req,res)=>{
    Project
        .find()
        .populate('participants','username')
        .exec((err,result)=>{
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

