(function() {

	function Event() {

		this.arrEvents = [];

		this.regEvent = function (eventName, funtionToCall) {
			this.arrEvents.push({event: eventName, handler: funtionToCall});
		}

		this.trigger = function(string) {
			var a = _.findWhere(this.arrEvents, {event: string});
			a[0].handler();
		}

		this.deleteEvent = function(string) {
			for (var i = 0; i < this.arrEvents.length; i++) {
				if (this.arrEvents[i].event === string) {
					this.arrEvents.splice(i, 1);
				}
			}
		}
	}
	window.Event = Event;
})();