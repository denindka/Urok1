(function() {
         var newArr = [1,2,3,4,5]
           var obj = {
                   each: function(arr, func) {
                       for (var i = 0; i < arr.length; i++) {
                           func(arr[i]);
                       }
                   },

                       map: function(arr, func) {
                       var newArr = [];
                       for (var i = 0; i < arr.length; i++) {
                           func(arr[i]);
                           newArr.push(arr[i]);
                       }
                       return newArr;
                   },


                  filter: function(arr, func) {
                       var newArr = [];
                       for (var i = 0; i < arr.length; i++) {
                           if (func(arr[i])) {
                               newArr.push(arr[i]);
                           }
                       }
                       return newArr;
                   },


                    pluck: function(a, b) {
                       var arr = [];
                       for (var i = 0; i < a.length; i++) {
                           arr.push(a[i][b]);
                       };
                       return arr;
                   },
                    values: function(a) {
                       var newArr = [];
                       for (var key in a) {

                           newArr.push(key);
                       }

                       return newArr;
                   },

                   contains: function(list, value) {
                       var rez = false;
                       for (var i = 0; i < list.length; i++) {
                           if (list[i] === value) {
                               rez = true;
                           }
                       }
                       return rez;
                   },

                   find: function(arr, func) {
                       var newArr = [];
                       for (var i = 0; i < arr.length; i++) {
                           if (func(arr[i])) {
                               newArr.push(arr[i]);
                               break;
                           }
                       }
                       return newArr;
                   },

                   where: function(a, b) {
                       var arr = [];
                       var count = 0;
                       var count_2 = 0;
                       for (var i = 0; i < a.length; i++) {
                           for (var key in b) {
                               if (a[i][key] === b[key]) {
                                   count_2++;
                                   count++;
                               } else {
                                   count_2++;
                               }
                           }
                           if (count_2 === count) {
                               arr.push(a[i])
                           }
                           count = 0;
                           count_2 = 0;

                       }
                       return arr;
                   },

                   findWhere: function(a, b) {
                       var arr = [];
                       var count = 0;
                       var count_2 = 0;
                       for (var i = 0; i < a.length; i++) {
                           for (var key in b) {
                               if (a[i][key] === b[key]) {
                                   count_2++;
                                   count++;
                               } else {
                                   count_2++;
                               }
                           }
                           if (count_2 === count) {
                               arr.push(a[i]);
                               return arr;

                           }
                           count = 0;
                           count_2 = 0;
                       }
                   }
               } //end object obj;
           window._ = obj;
}());