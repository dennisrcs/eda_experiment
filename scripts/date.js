function getFormattedDate() {
	var today = new Date();
	var date = today.getFullYear()+'-'+(pad2(today.getMonth()+1))+'-'+pad2(today.getDate());
	var time = pad2(today.getHours()) + ":" + pad2(today.getMinutes()) + ":" + pad2(today.getSeconds()) + "." + pad3(today.getMilliseconds());
	var dateTime = date+' '+time;
	return dateTime;
}

function pad2(input) {
	return ('0'+input).slice(-2);
}

function pad3(input) {
	return ('00'+input).slice(-3);
}