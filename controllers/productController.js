const {Category, Product} = require('../models/index');

class ControllerProduct {
  static getProductAdd(req, res) {
    Category.findAll()
    .then(dataCategory => {
      // console.log(dataCategory);
      res.render("productAddPage", { dataCategory })
    })
    .catch(err => {
      console.log(err);
      res.send(err)
    })
  }

  static postProductAdd(req, res) {
    // console.log(req.body);
    const {name, price, stock, imageUrl, description, CategoryId} = req.body
    Product.create({name, price, stock, imageUrl, description, CategoryId})
    .then(newData => {
      // console.log(newData);
      res.redirect("/") //! lempar ke home (home: mas susila)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static getProductDetail(req, res) {
    // console.log(req.params);
    const { productId } = req.params
    // console.log(productId);
    Product.findByPk(productId, {
      include: {
        model: Category
      }
    })
    .then(productById => {
      // console.log(productById);
      res.render("productDetailPage", {productById})
    })
    .catch(err => {
      res.send(err)
    })
  }

  static fiturDelete (req,res){
    let id = req.params.productId
    Product.destroy({
      where: {
        id: id
      }
    })
    .then(()=> {
      res.redirect(`/`)
    })
    .catch(err => {
      res.send(err)
    })
  }
}
module.exports = ControllerProduct