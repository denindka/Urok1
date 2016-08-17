(function () {
    'use strict';
    angular
    .module('app')
    .controller('AddProductCtrl', ['$http', '$state', AddProductCtrl]);
    function AddProductCtrl ($http, $state) {
        var self = this;
        self.obj = {};
        self.postProduct = function postProduct () {
            self.obj = {
                title: self.obj.title,
                description: self.obj.description,
                image: self.obj.image,
                price: self.obj.price
            };
            console.log(self.obj);

            $http.post('/postNewProduct', self.obj)
                .then(function success (res) {
                    console.log(res.data);
                    self.obj = {};
                     $state.go('main.list');
                }, function error (err) {
                    console.log(err);
                });
        };
    }

}());
