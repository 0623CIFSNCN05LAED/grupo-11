const userServices = require("../../productServices/userServices");

module.exports = {

    list: async (req, res) => {
    const users = await userServices.getAllUser();
    console.log(users)
    res.json({
      meta: {
        status: 201,
        url: req.originalUrl,
      },
      data: users,
    })},

    userDetail: async (req, res) => {
      const user = await userServices.getUserId(req.params.id);
      res.json({
        meta: {
          status: 201,
          id: req.params.id,
        },
        data: user,
      })},
  
     
};