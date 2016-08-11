(function () {
    'use strict';

    angular
        .module('blog')
        .controller('MainCtrl', ['$state', MainCtrl]);

    function MainCtrl ($state) {
        var self = this;

        self.header = 'Home';
    }
}());
