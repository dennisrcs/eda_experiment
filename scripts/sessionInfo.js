$(document).ready(function(){
	localStorage.clear();
	$('#txtparticipant').change(function () {
		var participantID = $(this).val();
		localStorage.setItem("part_id", participantID);
		localStorage.setItem("task_number", 1);
	});
});