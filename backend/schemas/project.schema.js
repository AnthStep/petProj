const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title : {type: String, require: true, index : {unique: true}},
    code: {type: String, require: true, index : {unique: true}},
    participants: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

projectSchema.on('index',(err)=>{
    console.log(err);
})

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;