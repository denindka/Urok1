(function() {
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
                templateUrl: 'app/componets/main/templates/main.tpl.html'
            });

        $urlRouterProvider.otherwise('/main');
    }

}());
