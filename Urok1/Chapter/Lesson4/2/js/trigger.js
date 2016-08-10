(function () {
      function Event () {
          this.newArr = [];
          this.regEv = function (even, fun){
            this.newArr.push({event: even, func: fun});
          };

          this.trigger = function(str){
            var a = _.where(this.newArr, {event: str});
            a[0].func();
          };

          this.delEv = function(str){
                  for(var i = 0; i < this.newArr.length; i++){
                	if(this.newArr[i].event === str){
                  delete this.newArr[i];
                }
            }
          };
           this.show = function() {
                console.log(this.newArr);
            };
      }

      var obj = new Event();
        window.Event = Event;
}());
