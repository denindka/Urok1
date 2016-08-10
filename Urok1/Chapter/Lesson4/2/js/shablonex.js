(function() {


    function Template(str, list) {
        this.str = str;
        this.list = list;
        this.res = '';

        this.render = function() {
            this.a(str, list);
        };
        this.getTpl = function() {
            return this.res;
        };
        this.parse = function(str, obj) {
            var s = str;
            var result = '';
            var currentKey = '';
            var atStart = null;
            var atEnd = null;

            while (s.length > 0) {
                atStart = s.indexOf('{{');
                result += s.slice(0, atStart);
                s = s.slice(atStart + 2);
                atEnd = s.indexOf('}}');
                currentKey = s.slice(0, atEnd);
                result += obj[currentKey];
                s = s.slice(atEnd + 2);
                if (s.indexOf('{{') == -1) {
                    result += s;
                    s = "";
                }
                atStart = null;
                atEnd = null;
                currentKey = '';
            }

            return result;
        };

        this.a = function() {
            for (var i = 0; i < this.list.length; i++) {
                this.res += this.parse(this.str, this.list[i]);
            }
        };
    }

    window.Template = Template;

})();
