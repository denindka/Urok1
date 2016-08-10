// Подключаем библиотеки
var trg = new Event();
var x = new Event();
var Obj;
var timpl;
var count = 0;
var counter = 0;
var btnsChange;
var btn = document.querySelector('.btn');
var container = document.querySelector('.container');
var addBtn = document.querySelector('.container .add');
var cl = document.querySelector('.cl');
var Okbtn = document.querySelector('#Okbtn');
addBtn.style.display = "none";
// Получаем с сервера объет
function getTpl(url, success, error) {
    var a = new XMLHttpRequest();
    a.open('GET', url, true);
    a.send();
    a.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                success(a.responseText);

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
//Находим форму Addform
function addForm(url, success, error) {
    var addF = new XMLHttpRequest();
    addF.open('GET', url, true);
    addF.send();
    addF.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                success(addF.responseText);
            } else {
                error();
            }
        }
    };
}
//start function successAdd
function successAdd(c) {
    addBtn.style.display = "none";
    var addF = document.querySelector('.cl');
    addF.innerHTML = c;
    var ok = document.querySelector('.Ok');
    ok.addEventListener('click', function() {

        var newObj = {
            Author: document.querySelector('#a').value,
            Title: document.querySelector('#b').value,
            Text: document.querySelector('#c').value
        };

        // start function post to addForm
        function sentForm(url, success, error) {
            var e = new XMLHttpRequest();
            var obj = JSON.stringify(newObj);
            console.log(obj);
            e.open('POST', url, true);
            e.setRequestHeader("Content-type", "application/json");
            e.send(obj);
            e.onreadystatechange = function() {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        success(e.response);
                    } else {
                        error();
                    }
                }
            };
        }

        sentForm('http://localhost:3333/entry', function(b) {
            // trg.trigger("add");
            alert("succes");
            startRqusts();
        }, function() {
            alert("error");
        });
        // endfunction post to addForm

    });
}
//end function successAdd
var errorAdd = function() {
    alert("error");
};

addBtn.addEventListener('click', function() {
    addForm('http://127.0.0.1:8080/tpl/add.html', successAdd, errorAdd);
});

// .addEventListener('click', function(){alert("losi")});

function startRqusts() {
    getTpl('http://localhost:3333/entry/', function(a) {
        window.Obj = a;
        trg.trigger("dataIsHere");
        x.trigger("dataHere");
        addBtn.style.display = "block";
    });
    getTpl_1('http://127.0.0.1:8080/tpl/tpl.html', function(b) {
        window.timpl = b;
        trg.trigger("dataIsHere");
        x.trigger("dataHere");

    });

}
startRqusts();


//end function successAdd
var errorAdd = function() {
    alert("error");
};
x.regEv("dataHere", function() {
    counter++;
    console.log(count);

        var editEntry = document.querySelectorAll('.editEntry');
        for (var i = 0; i < editEntry.length; i++) {
             btnsChange = editEntry[i].addEventListener("click", function() {
                 console.log(this.dataset.entryid);
                  suc();
               });
          counter = 0;
        }

});
function suc(){
  addForm('http://127.0.0.1:8080/tpl/change.html', successAdd, errorAdd);

  Okbtn.addEventListener('click', function(){
    console.log("ds");
  });
}

trg.regEv("dataIsHere", function() {
    count++;
    console.log(count);
    if (count === 2) {
        var parseObj = JSON.parse(Obj);
        var temp = new Template(timpl, parseObj);
        temp.render();
        var result = temp.getTpl();
        document.querySelector(".cl").innerHTML = result;
        count = 0;
    }
});
