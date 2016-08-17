var products = [{
    id: 1,
    title: 'apple',
    image: 'http://clv.h-cdn.co/assets/cm/15/08/54ea7c172bb74_-_fresh-apple-relish-3328-200.jpg',
    description: 'fdfdfdf',
    price: 12
}, {
    id: 2,
    title: 'pineapple',
    image: 'http://foodstruct.com/img/foods/09266.png',
    description: 'bla bla bla bla bla bla',
    price: 7
}];

module.exports.getAllProductsApi = function getAllProductsApi(req, res) {
    res.send(products);
};

module.exports.postNewProductsApi = function postNewProductsApi(req, res) {
    var title = req.body.title;
    console.log(req.body);
    var image = req.body.image;
    var description = req.body.description;
    var price = req.body.price;
    products.push({
        id: products.length + 1,
        title: title,
        image: image,
        description: description,
        price: price
    });
    res.send('succes');
};
module.exports.deleteProductApi = function deleteProductApi(req, res) {
    var id = req.params.id;
    for (var i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products.splice(i, 1);
        }
    }
    res.send('Ok');
};
