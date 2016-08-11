(function() {
    'use strict';

    angular
        .module('blog')
        .controller('ContactsCtrl', [ContactsCtrl]);

    function ContactsCtrl() {
        var self = this;

        self.header = 'ContactsCtrl';
        self.array = [];
        self.obj = {};
        self.addFunc = function addFunc() {
          self.array.push(self.obj);
          console.log(self.obj);
          self.obj = {};
        };
        
        self.deleteFunc = function deleteFunc(index) {
            console.log("del");
            self.array.splice(index, 1);
        };
    }
}());
