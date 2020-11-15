const models = require('../models/models');

exports.getAllStops = async function(){
    return await models.Stop.findAll()
}