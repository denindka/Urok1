(function() {
    'use strict';

    angular
        .module('blog')
        .controller('BlogCtrl', [BlogCtrl]);

    function BlogCtrl() {
        var self = this;

        self.array = [];
        self.obj = {};

        self.addAll = function addAll() {
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
