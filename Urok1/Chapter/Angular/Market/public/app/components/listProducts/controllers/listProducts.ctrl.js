(function () {
    'use strict';
    angular
     .module('app')
     .controller('ListCtrl', ['$http', '$state', ListCtrl]);

     function ListCtrl ($http, $state) {
         var self = this;
         self.head = 'Main Ctrl';
         self.cart = [];
         self.addBasket = function addBasket (title, price) {
            self.cart.push({
                title: title,
                price: price
            });
            self.total = 0;
            for(var i = 0; i < self.cart.length; i++){
                self.total += self.cart[i].price;
            }

         };

         self.deleteProduct = function deleteProduct (index, id) {
                console.log(id);
                $http.delete('/deleteProduct/'+ id)
                    .then(function success (res) {
                        console.log(res.data);
                        self.products.splice(index, 1);
                    }, function error (err) {
                        console.log(err);
                    });

         };

         self.getProducts = function getProducts () {

            $http.get('/getProducts')
                .then(function success (res) {
                    console.log(res);
                    self.products = res.data;
                }, function errorr (error) {
                    console.log(error);
                });

         };
         self.getProducts();
     }
}());
