$( document ).ready(function(){
	var task_number = parseInt(localStorage.getItem("task_number"));
	var audio = document.getElementById('pacing-signal');
	
	alert("You are about to start the PACED BREATHING task. Please, click OK when you are ready to start");

	var timestamp = getFormattedDate();
	localStorage.setItem("pb_" + task_number + "_start_time", timestamp);
	
	audio.play();
	breath_cycle();
	setInterval(() => breath_cycle(), 10000);
	

	function breath_cycle(){
		var pb_wrapper_element = $(".pb-wrapper");
		var pb_text_element = $(".pb-wrapper h1");
		
		pb_text_element.text("Inhale");
		pb_wrapper_element.removeClass("exhaling")
		pb_wrapper_element.addClass("inhaling");
		
		setTimeout(() => {
			pb_text_element.text("Exhale");
			pb_wrapper_element.removeClass("inhaling")
			pb_wrapper_element.addClass("exhaling");
		}, 4000);
	}
	
	setTimeout(() => {
		var timestamp = getFormattedDate();
		localStorage.setItem("pb_" + task_number + "_end_time", timestamp);
		localStorage.setItem("task_number", task_number + 1);
		
		if (task_number != 5) {
			window.location.href = "cat.html"
		} else {
			window.location.href = "end.html"
		}
		
	}, 1000 * 60 * 3);
	
	const lerp = (x, y, a) => x * (1 - a) + y * a;
	const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));
	const invlerp = (x, y, a) => clamp((a - x) / (y - x));
	const range = (x1, y1, x2, y2, a) => lerp(x2, y2, invlerp(x1, y1, a));
	
});
