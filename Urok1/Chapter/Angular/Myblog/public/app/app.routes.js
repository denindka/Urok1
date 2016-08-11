(function () {
    'use strict';
    angular
        .module('blog')
        .config(routes);

    function routes ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                controller: 'HomeCtrl',
                controllerAs: 'home',
                templateUrl: 'app/components/home/templates/home.tpl.html'
            })
            .state('home.main', {
                url: '/main',
                controller: 'MainCtrl',
                controllerAs: 'main',
                templateUrl: 'app/components/main/templates/main.tpl.html'
            })
            .state('home.blog', {
                url: '/blog',
                controller: 'BlogCtrl',
                controllerAs: 'blog',
                templateUrl: 'app/components/blog/templates/blog.tpl.html'
            })
            .state('home.contacts', {
                url: '/contacts',
                controller: 'ContactsCtrl',
                controllerAs: 'contacts',
                templateUrl: 'app/components/contacts/templates/contacts.tpl.html'
            });

        $urlRouterProvider.otherwise("/home");
    }
}());
