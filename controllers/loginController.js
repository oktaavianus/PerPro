const { User } = require('../models/index');
const bcrypt = require("bcryptjs");

class ControllerLogin {
  static getLogin(req, res) {
    res.render("loginPage")
  }

  static postLogin(req, res) {
    console.log(req.body);
    const { email, password } = req.body
    User.findOne({
      where: {
        email
      }
    })
      .then(user => {
        if (user) {
          const isValidPassword = bcrypt.compareSync(password, user.password)
          if (isValidPassword) {
            req.session.userId = user.id
            return res.redirect('/')
          } else {
            const error = `Invalid username or password`
            return res.redirect(`/login?error=${error}`)
          }
        }
      })
      .catch(err => {
        res.send(err)
      })
    // const {}
    // User.
  }
}
module.exports = ControllerLogin