(function(global) {
	var epoch = function(selector1, selector2) {
		if (!selector1) {
			throw "no selector specified to show UTS!";
		}
		if (!selector2) {
			throw "no placeholder selector specified!";
		}
		var msg = Math.floor(new Date().valueOf() / 1000);
		var empty = ' ';
		if (!window.jQuery) {
			document.getElementById(selector2).style.visibility = "hidden";
			document.getElementById(selector1).innerHTML = msg;
			document.getElementById(selector1).onmouseout = function() {
				document.getElementById(selector1).innerHTML = empty;
				document.getElementById(selector2).style.visibility = "visible";
			}
		} else {
			$(selector2).hide();
			$(selector1).html(msg);
			$(selector1).mouseout(function() {
				$(selector1).html(empty);
				$(selector2).show();
			});
		}
	}
	global.epoch = global.UTS$ = epoch;
}(window));
