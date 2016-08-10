angular.module('app', []);

(function() {
    'use strict';

    angular.module('app').controller('TaskCtrl', [TaskCtrl]);

    function TaskCtrl() {
        var self = this;
        self.array = [];
        self.obj = {
            done: false
        };

        self.someFunc = function someFunc() {
            self.array.push(self.obj);
            console.log(self.obj);
            self.obj = {};
        };

        self.deleteFunc = function deleteFunc(index) {
            console.log("del");
            self.array.splice(index, 1);
        };
        self.checked = false;
    }

}());
