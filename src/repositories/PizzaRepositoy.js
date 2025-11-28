const Pizza = require('../models/Pizza');

async function create(data){
    return await Pizza.create(data);
}

async function findAll(){
    return await Pizza.find();
}

async function findById(id, data){
    return await Pizza.findById(id);
}

async function update(id, data) {
    return await Pizza.findByIdAndUpdate(id, data, { new: true });
}

async function remove(id) {
    return await Pizza.findByIdAndDelete(id);
}

module.exports = {
    create,
    findAll,
    findById,
    update,
    remove

}