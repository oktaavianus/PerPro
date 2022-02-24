const {Product,Category} = require ('../models')
const formatRupiah = require('../helper/formatRupiah')

class homeController{
  static landingPage (req,res){
    Product.findAll({
      include : Category
    })
    .then(data =>{
      // res.send(data)
      res.render("productPage",{data,formatRupiah})
    })
    .catch(err =>{
      res.send(err)
      console.log(err)
    })
  }
}
module.exports = homeController 