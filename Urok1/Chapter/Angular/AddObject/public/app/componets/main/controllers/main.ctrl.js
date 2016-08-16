(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainCtrl', ['$http', MainCtrl]);

    function MainCtrl($http) {
        var self = this;

        self.obj = {};

        self.getData = function getData() {
            self.nameBtn = 'Add';
            $http.get('/main')
                .then(function success(res) {
                    self.result = res.data;
                    console.log(res);
                }, function error(error) {
                    console.log(error);
                });

        };

        self.getData();

        self.addPost = function addPost() {
            if (!self.obj.title) {
                self.results = 'Write something';
            } else {
                $http.post('/main', self.obj)
                    .then(function success(resp) {
                        self.getData();
                        self.obj.title = '';
                    }, function error(er) {
                        console.log(er);
                    });
            }
        };
        self.changeNotes = function changeNotes(titles, id) {
            self.obj.title = titles;
            self.newId = id;
            // self.my_class = true;
        };
        self.changeData = function changeData() {
            var objData = {
                id: self.newId,
                title: self.obj.title
            };
            console.log(objData);
            $http.put('/main', objData)
                .then(function success(res) {
                    self.getData();
                }, function error(error) {
                    console.log(error);
                });
        };
        self.deleteTopicsNote = function deleteTopicsNote(i) {
            $http.delete('/main/' + i)
                .then(function success(res) {
                    console.log(res);
                    self.getData();
                }, function error(err) {
                    console.log(err);
                });
        };
    }

}());
