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

		gtpl.addEventListener("load", function() {
			success(gtpl.responseText);
		});

		gtpl.addEventListener("error", function() {
			console.log("Error!!!");
		});

	}

	getTpl("tpl.html", writeTpl);

	function getData(url, success) {
		var gdata = new XMLHttpRequest();
		gdata.open("GET", url);

		gdata.send();

		gdata.addEventListener("load", function() {
			success(gdata.responseText);
		});

		gdata.addEventListener("error", function() {
			console.log("Error!!!");
		});

	}


	getData("http://localhost:3333/entry", writeData);


	function post(url, obj, postCallBack) {
		var sendObj = JSON.stringify(obj);

		var p = new XMLHttpRequest();
		p.open("POST", url);
		p.setRequestHeader("Content-type", "application/json");

		p.addEventListener("load", function() {
			console.log("Post Done!");
			postCallBack();
		});

		p.addEventListener("error", function() {
			console.log(p.response);
		});

		p.send(sendObj);

	}


	function put(url, obj, putCallBack) {
		var editObj = JSON.stringify(obj);

		var pt = new XMLHttpRequest();

		pt.open("PUT", url);
		pt.setRequestHeader("Content-type", "application/json");

		pt.addEventListener("load", function() {
			console.log(pt.responseText);
			putCallBack();
		});

		pt.addEventListener("error", function() {
			console.log(pt.response);
		});

		pt.send(editObj);
	}


	function deleteRquest(url, obj, deleteCallBack) {
		var delObj = JSON.stringify(obj);
		var d = new XMLHttpRequest();

		d.open("DELETE", url);
		d.setRequestHeader("Content-type", "application/json");

		d.addEventListener("load", function() {
			console.log(d.responseText);
			deleteCallBack();
		});

		d.addEventListener("error", function() {
			console.log(d.response);
		});

		d.send(delObj);
	}


	function writeTpl(text) {
		tpl = text;
		e.trigger("recievedData");
	}


	function writeData(text) {
		data = JSON.parse(text);
		e.trigger("recievedData");
	}

	function writeDataId(text) {
		data = [];
		data.push(JSON.parse(text));
		e.trigger("recievedData");
		e.trigger("editLoaded");
	}

	e.regEvent("recievedData", function() {
		count ++;
		if (count === 2) {
			var parseTpl = new TemplateEngine();

			parseTpl.collection = data;
			parseTpl.template = tpl;
			parseTpl.render();
			var res = parseTpl.getTemplate();
			container.innerHTML = res;
			deleteThatEntry();
			Edit();
			count = 0;
		}
	});


	function renderMainPage() {
		getTpl("tpl.html", writeTpl);
		getData("http://localhost:3333/entry", writeData);
	}


	function writeFormTpl(text) {
		formTpl = text;
		e.trigger("formTpl");
	}


	function addNewEntry() {

		addButton.addEventListener("click", function() {

			addButton.style.display = "none";

			getTpl("add.html", writeFormTpl);

			e.regEvent("formTpl", function() {
				Counter++;

				if (Counter === 1) {
					container.innerHTML = formTpl;

					var addNewEntryButton = document.querySelector("#addNewEntryButton");
					addNewEntryButton.addEventListener("click", addNew);
					Counter = 0;
				}

			});
		});
	}

	addNewEntry();


	function addNew() {

		var obj = {
			Author: document.querySelector("#author").value,
			Title: document.querySelector("#title").value,
			Text: document.querySelector("#text").value
		}

		addButton.style.display = "block";

		post("http://localhost:3333/entry", obj, function() {
			e.trigger("newPage");
		});
	}

	e.regEvent("newPage", function() {
		renderMainPage();
	});


	function deleteThatEntry() {
		var deleteButtons = document.querySelectorAll(".deleteEntry");

		for (var i = 0; i < deleteButtons.length; i++) {
			deleteButtons[i].addEventListener("click", function() {
				var delObject = {
					EntryId: this.dataset.entryid
				}

				deleteRquest("http://localhost:3333/entry", delObject, function() {
					e.trigger("newPage");
				});

			});
		}
	}


	function Edit() {
		var editButtons = document.querySelectorAll(".editEntry");

		for (var i = 0; i < editButtons.length; i++) {
			editButtons[i].addEventListener("click", function() {
				addButton.style.display = "none";

				getTpl("change.html", writeTpl);
				getData("http://localhost:3333/entry/" + this.dataset.entryid, writeDataId);
			});
		}
	}

	e.regEvent("editLoaded", function() {
		saveChanges();

	});


	function saveChanges() {
		var Okbtn = document.querySelector("#Okbtn");

		Okbtn.addEventListener("click", function() {
			var putObj = {
				Author: document.querySelector("#author").value,
				Title: document.querySelector("#title").value,
				Text: document.querySelector("#text").value,
				EntryId: document.querySelector("#entryid").value
			}

			addButton.style.display = "block";
			put("http://localhost:3333/entry", putObj, function() {
				e.trigger("newPage");
			});
		});
	}
