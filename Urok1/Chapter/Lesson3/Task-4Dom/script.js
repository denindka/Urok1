function getTpl(url, success, error) {
    var a = new XMLHttpRequest();
    a.open('GET', url, true);
    a.send();
    a.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                success(a.response);
            } else {
                error();
            }
        }
    };
}
var success = function(a) {
    var elem = document.getElementById('my');
    elem.innerHTML = a;
};
var error = function() {
    alert("error");
};


var foundBtns = function() {
    var btns = document.querySelectorAll('.btn');
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function() {
            console.log(this.dataset.tpl);
            getTpl('http://127.0.0.1:8080/tpl/' + this.dataset.tpl + '.html', success, error);
        });
    }
};

function clean() {
    var a = document.getElementById('my');
    a.innerHTML = ' ';
    alert("body is clean");
}
var clear = document.querySelector('.clear');
clear.addEventListener('click', clean);

foundBtns();
