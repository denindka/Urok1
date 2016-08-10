	var tpl;
	var data;
	var count = 0;
	var Counter = 0;
	var formTpl;
	var addButton = document.querySelector(".add");
	var container = document.querySelector(".container");
	var e = new Event();

	function getTpl(url, success) {
	    var gtpl = new XMLHttpRequest();
	    gtpl.open("GET", url);
	    gtpl.send();
	    gtpl.onreadystatechange = function() {
	        if (this.readyState === 4 && this.status === 200) {

	            gtpl.addEventListener("load", function() {
	                success(gtpl.responseText);
	            });
	        } else {
	            gtpl.addEventListener("error", function() {
	                console.log("Error!!!");
	            });
	        }
	    };
	}

	getTpl("tpl.html", succesTpl);

	function getData(url, success) {
	    var gdata = new XMLHttpRequest();
	    gdata.open("GET", url);
	    gdata.send();
	    gdata.onreadystatechange = function() {
	        if (this.readyState === 4 && this.status === 200) {
	            gdata.addEventListener("load", function() {
	                success(gdata.responseText);
	            });
	        } else {
	            gdata.addEventListener("error", function() {
	                console.log("Error!!!");
	            });
	        }
	    };
	}

	getData("http://localhost:3333/entry", successData);

	function post(url, obj, postCall) {
	    var sendObj = JSON.stringify(obj);
	    var p = new XMLHttpRequest();
	    p.open("POST", url);
	    p.setRequestHeader("Content-type", "application/json");
	    p.onreadystatechange = function() {
	        if (this.readyState === 4 && this.status === 200) {
	            p.addEventListener("load", function() {
	                console.log("success");
	                postCall();

	            });
	        } else {
	            p.addEventListener("error", function() {
	                console.log(p.response);
	            });
	        }
	    };
	    p.send(sendObj);

	}


	function put(url, obj, putCall) {
	    var editObj = JSON.stringify(obj);
	    var pt = new XMLHttpRequest();
	    pt.open("PUT", url);
	    pt.setRequestHeader("Content-type", "application/json");
	    pt.onreadystatechange = function() {
	        if (this.readyState === 4 && this.status === 200) {
	            pt.addEventListener("load", function() {
	                console.log(pt.responseText);
	                putCall();
	            });
	        } else {
	            pt.addEventListener("error", function() {
	                console.log(pt.response);
	            });
	        }
	    };
	    pt.send(editObj);
	}

	function del(url, obj, deleteCal) {
	    var delObj = JSON.stringify(obj);
	    var d = new XMLHttpRequest();
	    d.open("DELETE", url);
	    d.setRequestHeader("Content-type", "application/json");
	    d.onreadystatechange = function() {
	        if (this.readyState === 4 && this.status === 200) {
	            d.addEventListener("load", function() {
	                console.log(d.responseText);
	                deleteCal();
	            });
	        } else {
	            d.addEventListener("error", function() {
	                console.log(d.response);
	            });
	        }
	    };
	    d.send(delObj);
	}

	function succesTpl(text) {
	    tpl = text;
	    e.trigger("Data");
	}

	function successData(text) {
	    data = JSON.parse(text);
	    e.trigger("Data");

	}

	function rquest() {
	    getTpl("tpl.html", succesTpl);
	    getData("http://localhost:3333/entry", successData);
	}

	e.regEvent("newPage", function() {
	    rquest();
	});


	function drawsForm(text) {
	    formTpl = text;
	    e.trigger("formTpl");
	}


	function drawsPage() {
	    addButton.addEventListener("click", function() {
	        addButton.style.display = "none";
	        getTpl("add.html", drawsForm);
	        e.regEvent("formTpl", function() {
	            Counter++;
	            if (Counter === 1) {
	                container.innerHTML = formTpl;
	                var drawsButton = document.querySelector("#addNew");
	                drawsButton.addEventListener("click", addNewObject);
	                Counter = 0;
	            }
	        });
	    });
	}
	drawsPage();

	function addNewObject() {
	    var obj = {
	        Author: document.querySelector("#author").value,
	        Title: document.querySelector("#title").value,
	        Text: document.querySelector("#text").value
	    };
	    addButton.style.display = "block";
	    post("http://localhost:3333/entry", obj, function() {
	        e.trigger("newPage");
	    });
	}



	function deleteObject() {
	    var deleteButtons = document.querySelectorAll("#deleteBtn");
	    for (var i = 0; i < deleteButtons.length; i++) {
	        deleteButtons[i].addEventListener("click", function() {
	            var delObject = {
	                EntryId: this.dataset.entryid
	            };
	            del("http://localhost:3333/entry", delObject, function() {
	                e.trigger("newPage");
	            });
	        });
	    }
	}


	function succesTplNew(text) {
			data = [];
			data.push(JSON.parse(text));
			e.trigger("Data");
			e.trigger("loadingEnd");
		}


	function edit() {
		var editButtons = document.querySelectorAll("#editBtn");
		for (var i = 0; i < editButtons.length; i++) {
			editButtons[i].addEventListener("click", function() {
				addButton.style.display = "none";

				getTpl("change.html", succesTpl);
				getData("http://localhost:3333/entry/" + this.dataset.entryid, succesTplNew);
				console.log(this.dataset.entryid);
			});
		}
	}


		e.regEvent("loadingEnd", function() {
			saveChanges();
		});


		function saveChanges() {
			var Okbtn = document.querySelector("#Okbtn");
			Okbtn.addEventListener("click", function() {
				console.log('ok');
				var putObj = {
					Author: document.querySelector("#author").value,
					Title: document.querySelector("#title").value,
					Text: document.querySelector("#text").value,
					EntryId: document.querySelector("#entryid").value
				};
				addButton.style.display = "block";
				put("http://localhost:3333/entry", putObj, function() {
					e.trigger("newPage");
				});
			});
		}
	e.regEvent("Data", function() {
	    count++;
	    if (count === 2) {
	        var parseTpl = new TemplateEngine();
	        parseTpl.collection = data;
	        parseTpl.template = tpl;
	        parseTpl.render();
	        var res = parseTpl.getTemplate();
	        container.innerHTML = res;
	        deleteObject();
	        edit();
	        count = 0;
	    }
	});
