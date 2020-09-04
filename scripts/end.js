$( document ).ready(function(){
    
	const pb1starttime = localStorage.getItem("pb_1_start_time");
	const pb1endtime = localStorage.getItem("pb_1_end_time");
	
	const pb2starttime = localStorage.getItem("pb_3_start_time");
	const pb2endtime = localStorage.getItem("pb_3_end_time");
	
	const pb3starttime = localStorage.getItem("pb_5_start_time");
	const pb3endtime = localStorage.getItem("pb_5_end_time");
	
	const cwt1starttime = localStorage.getItem("cwt_2_start_time");
	const cwt1endtime = localStorage.getItem("cwt_2_end_time");
	
	const cwt2starttime = localStorage.getItem("cwt_4_start_time");
	const cwt2endtime = localStorage.getItem("cwt_4_end_time");
	
	var output = "";
	output += "pb1starttime," + pb1starttime + "\n";
	output += "pb1endtime," + pb1endtime + "\n";
	output += "pb2starttime," + pb2starttime + "\n";
	output += "pb2endtime," + pb2endtime + "\n";
	output += "pb3starttime," + pb3starttime + "\n";
	output += "pb3endtime," + pb3endtime + "\n";
	
	output += "cwt1starttime," + cwt1starttime + "\n";
	output += "cwt1endtime," + cwt1endtime + "\n";
	output += "cwt2starttime," + cwt2starttime + "\n";
	output += "cwt2endtime," + cwt2endtime + "\n";
	
	const part_id = localStorage.getItem("part_id");
	
	var hiddenElement = document.createElement('a');
	hiddenElement.href = 'data:attachment/text,' + encodeURI(output);
	hiddenElement.target = '_blank';
	hiddenElement.download = "Participant " + part_id + ".txt";
	hiddenElement.click();
});
