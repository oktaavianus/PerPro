const {User, Profile} = require('../models/index');

class ControllerRegister {

  static getRegisterForm(req,res){
    res.render('registerPage')
  }

  static postRegister (req, res) {
    console.log(req.body);
    const { email, name, dateOfBirth, password, roles } = req.body

    User.create({email, password, roles}) // User Create
    .then(dataUser => {
      console.log(dataUser);
      Profile.create({fullName: name, dateOfBirth, email, UserId: dataUser.dataValues.id})
    })
    .then(data => {
      res.redirect('/login')
    })
    .catch(err => {
      res.send(err)
    })
  }
}
module.exports = ControllerRegister