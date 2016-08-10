;
(function () {
        function Tmpl(str, arr) {
            this.str = str;
            this.arr = arr;
            this.parse = function(str, arr) {
                var keys_1 = [];
                var keys_2 = [];
                for (var key in arr) {
                    keys_1.push('{{' + key + '}}');
                    keys_2.push(key);
                    console.log(arr[key[i]])
                }
                for (var i = 0; i < keys_1.length; i++) {
                    str = str.replace(keys_1[i], ' ' + arr[keys_2[i]] + ' ');
                }
                return str
            };
            this.render = function(str, arr) {
                var result = '';
                for (var k = 0; k < arr.length; k++) {
                    result += this.parse(str, arr[k]);
                }
                return result;
            }
        }
        var obj = new Tmpl();
        var string_ = `
<div>
    <span>{{name}}</span>
    <span>{{text}}</span>
</div>`;
        var aray = [{
            name: 'Serghei',
            text: 'cto to tam',
        }, {
            name: 'Iahu',
            text: 'dsdsdsds'
        }, {
            name: 'Denis',
            text: 'ddddd'
        },{
           name: 'Leo',
            text: 'Messi'
        },{
           name: 'Jora',
            text: 'jjjj'
        }];
        console.log(obj.render(string_, aray));

}());
