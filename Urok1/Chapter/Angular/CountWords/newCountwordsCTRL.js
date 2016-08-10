angular.module('app', []);

(function() {
    'use strict';

    angular.module('app').controller('CountCtrl', [CountCtrl]);

    function CountCtrl() {
        var self = this;

        self.obj = {
            letters: 0,
            words: 0,
            whitespace: 0
        };

        self.someFunc = function someFunc() {
            self.obj.letters = self.a.length;
            self.obj.words = self.a.split(' ').length;
            self.obj.whitespace = self.a.split(' ').length - 1;
            self.s = (100 - self.a.length);
            if (self.obj.letters >= 100) {
                self.message = "Вы привасили количесвто символов";
            } else {
                self.message = "";
            }
        };
    }
}());
