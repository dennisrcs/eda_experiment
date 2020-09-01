$( document ).ready(function(){
    $("#btn_agree").click(function(e){
		var startTime = (new Date).getTime();
		localStorage.setItem("startTime",startTime);
        return true;
    });
});
