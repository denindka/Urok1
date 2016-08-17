(function () {
    'use strict';
    angular
     .module('app')
     .controller('MainCtrl', ['$http', '$state', MainCtrl]);

     function MainCtrl ($http, $state) {
         var self = this;
         self.head = 'Main Ctrl';
         
         $state.go('main.list');
     }
}());
