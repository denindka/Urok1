(function () {
    'use strict';

    angular
        .module('app')
        .config(routes);

        function routes($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state('main', {
                url: '/main',
                controller: 'MainCtrl',
                controllerAs: 'main',
                templateUrl: 'app/components/main/templates/main.tpl.html'
            })
            .state('main.add', {
                url: '/addProduct',
                controller: 'AddProductCtrl',
                controllerAs: 'addProduct',
                templateUrl: 'app/components/addNewProduct/templates/addNewProduct.ctrl.html'
            })
            .state('main.list', {
                url: '/listProducts',
                controller: 'ListCtrl',
                controllerAs: 'list',
                templateUrl: 'app/components/listProducts/templates/listProducts.tpl.html'
            });

            $urlRouterProvider.otherwise('main');
        }
}());
