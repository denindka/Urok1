var elementList = document.querySelectorAll("button");

// for (var i = 0; i < elementList.length; i++) {
//     elementList[i].addEventListener("click", function () {
//
//         var tplName = this.dataset.ev;
//         getTpl(tplName, setText);
//         get('url', setText2);
//     });
// };

var but = document.getElementById("bt2");
but.addEventListener("click", function(){
  getTpl('url', function(text){
   window.dataTpl = text;

 });
  get('url', function(text){
   window.dataServ = text;

 });
});
var parTp = new Template();

var c = new Event();
var count = 0;
function getTpl(tplNam, success, error) {
    var a = new XMLHttpRequest();
    a.open('GET', "tpl.html", true);
    a.send();
    a.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                c.trigger('setTrig');
                success(a.response);

            } else {
                error();
            }
        }
    };
}
    function get(url, success, error) {
        var b = new XMLHttpRequest();

        b.open('GET', 'http://localhost:3333/entry', true);
        b.send();
        b.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    c.trigger('setTrig');
                    success(b.responseText);
                } else {
                    error();
                }
            }
        };

    }

     get('url', function(resp){
        dataServ = resp;

    });

     getTpl('url', function(resp){
        dataTpl = resp;

    });

c.regEv("setTrig", function(){
  count++;
  if(count === 2){
    var dat = JSON.parse(dataServ);
    parTp.str = dat;
		parTp.list = dataTpl;
		parTp.render();
		var res = parTp.getTpl();
    var rend = document.getElementById("cl");
    rend.innerHTML = res;
    count = 0;
  }
});
