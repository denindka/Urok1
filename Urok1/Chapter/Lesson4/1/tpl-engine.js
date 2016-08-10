(function() {
	function TemplateEngine (collection, template) {
		this.collection = collection;
		this.template = template;
		this.resStr = "";

		this.parseString = function(string, object) {
			var s = string;
			var startPos = 0;
			var endPos = 0;
			var result = "";
			var curKey = "";

			while (s.length > 0) {
				endPos = s.indexOf("{{")

				result += s.slice(startPos, endPos);

				// startPos = 0;

				s = s.slice(endPos+2);

				endPos = s.indexOf("}}");

				curKey = s.slice(startPos, endPos);

				result += object[curKey];

				// startPos = 0;

				s = s.slice(endPos+2);

				if (s.indexOf("{{") === -1) {
					result += s.slice(startPos);
					s = "";
				}
				startPos = 0; endPos = 0; curKey = "";
			}
			return result;
		}

		this.render = function() {
			this.giveObj();
		}
		
		this.giveObj = function() {
			var arrOfObj = this.collection;
			var string = this.template;

			for (var i = 0; i < arrOfObj.length; i++) {
				this.resStr += this.parseString(string, arrOfObj[i]);
			}
		}

		this.getTemplate = function () {
			return this.resStr;
		}
	}
	window.TemplateEngine = TemplateEngine;
})();
