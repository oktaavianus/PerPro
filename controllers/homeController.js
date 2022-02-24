const {Product,Category} = require ('../models')

class homeController{
  static landingPage (req,res){
    Product.findAll({
      include : Category
    })
    .then(data =>{
      // res.send(data)
      res.render("productPage",{data})
    })
    .catch(err =>{
      res.send(err)
      console.log(err)
    })
  }
}
module.exports = homeController