const User = require('../models/userModel');

class UserController {
    async getUsers(req, res) {
        try {
            const { page, limit } = req.query;

            if (page && limit) {
                let lastIndex = +limit * +page;
                let firstIndex = lastIndex - +limit;
                let paginatedUsers = await User.find().limit(+limit).skip(+firstIndex);
                return res.json(paginatedUsers);
            }
            else {
                let users = await User.find()
                res.json(users)
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}

module.exports = new UserController();