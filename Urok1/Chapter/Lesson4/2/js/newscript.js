var trg = new Event();
var x = new Event();
var Obj;
var timpl;
var count = 0;
var counter = 0;
// Получаем с сервера объет
function getTpl(url, success, error) {
    var a = new XMLHttpRequest();
    a.open('GET', url, true);
    a.send();
    a.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                success(a.responseText);
                // console.log(a.responseText);
            } else {
                error();
            }
        }
    };
}

// Находим наш темплей
function getTpl_1(url, success, error) {
    var b = new XMLHttpRequest();
    b.open('GET', url, true);
    b.send();

    b.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                success(b.responseText);
            } else {
                error();
            }
        }

    };
}


var btn = document.querySelector('.btn');

    getTpl('http://localhost:3333/entry/', function(a) {
        Obj = a;
        trg.trigger("dataIsHere");
          x.trigger("dataHere");
    });
    getTpl_1('http://127.0.0.1:8080/tpl/tpl.html', function(b) {
        timpl = b;
        trg.trigger("dataIsHere");
          x.trigger("dataHere");
    });
    x.regEv("dataHere", function() {
        counter++;
        console.log(counter);

            var editEntry = document.querySelectorAll('.editEntry');
            counter++;
            for (var i = 0; i < editEntry.length; i++) {
                 btnsChange = editEntry[i].addEventListener("click", function() {
                     console.log(this.dataset.entryid);
                      suc();
                   });
              counter = 0;
            }

    });
function suc() {
  getTpl_1('http://127.0.0.1:8080/tpl/change.html', function(b) {
      timpl = b;
      trg.trigger("dataIsHere");
        x.trigger("dataHere");
        trg.trigger("dataIsHere");
          x.trigger("dataHere");
  });
}
trg.regEv("dataIsHere", function() {
    count++;

    if (count === 2) {
        var parseObj = JSON.parse(Obj);
        var temp = new Template(timpl, parseObj);
        temp.render();
        var result = temp.getTpl();
        document.querySelector(".cl").innerHTML = result;
        count = 0;
    }
});
