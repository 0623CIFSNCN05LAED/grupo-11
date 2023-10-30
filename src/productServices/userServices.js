const db = require("../data/db")

const userServices = {

    getAllUser: () => {
        return db.users.findAllUsers()
    },
    getUserId: (id) => {
        return db.users.findByPk(id)
    },
    findUserEmail: (email, text) => {
        return db.users.findByField(email, text)
    },

}

module.exports = userServices