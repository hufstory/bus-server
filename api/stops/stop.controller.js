const UserService = require('../../services/user.service');

exports.getAll = async (req, res) => {
    let stops = await UserService.getAllStops()
    res.json(stops)
};