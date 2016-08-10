angular.module('calc', []);
(function() {
    'use strict';

    angular.module('calc').controller('CalculatorCtrl', [CalculatorCtrl]);

    function CalculatorCtrl() {
        var self = this;


        self.plus = function plus() {
            self.result = self.first + self.second;
        };
        self.minus = function minus() {
            self.result = self.first - self.second;
        };
        self.multiply = function multiply() {
            self.result = self.first * self.second;
        };
        self.del = function del() {
            self.result = self.first / self.second;
        };

    }
}());
