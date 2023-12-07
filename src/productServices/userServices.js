const { Users } = require("../database/models");

const userServices = {
    // getAllUser: () => {
    //     return Users.findAllUsers()
    // },

    getUserId: (id) => {
        return Users.findByPk(id)
    },

    // findUserEmail: (email, text) => {
    //     return Users.findByField(email, text)
    // },

    findUserEmail: (text) => {
        return Users.findOne({where: {email: text}})
    },

    createUser: (nuevoUsuario) => {
      console.log(nuevoUsuario.id);
        return Users.create({
            id: nuevoUsuario.id,
            name: nuevoUsuario.name,
            last_name: nuevoUsuario.lastName,
            email: nuevoUsuario.email,
            password: nuevoUsuario.password,
            profile_picture: nuevoUsuario.profile_picture
        })
    }
}

module.exports = userServices

