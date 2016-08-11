(function () {
    'use strict';

    angular
        .module('blog')
        .controller('HomeCtrl', ['$state', HomeCtrl]);

    function HomeCtrl ($state) {
        var self = this;

        self.header = 'My Block';

    }
}());
