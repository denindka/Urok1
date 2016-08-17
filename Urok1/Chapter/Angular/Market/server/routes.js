module.exports = function (app) {
    var main = require('./app/controllers/main');
    app.get('/getProducts', main.getAllProductsApi);
    app.post('/postNewProduct', main.postNewProductsApi);
    app.delete('/deleteProduct/:id', main.deleteProductApi);
};
