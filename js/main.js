function userProgress(time) {
	var start = 0;
	var time = Math.round(time*10);
	var progressElement = document.getElementById('user-progress');
	var intervalId = setInterval(function(){
		if(start>100) {
		  clearInterval(intervalId);
		  userProgressCallBack();
		}
		else {
		progressElement.value = start;
		}
		start++;
	}, time);
}

function userProgressCallBack() {
	document.querySelector('.hidden-block').style.display = 'flex';
}
userProgress(5);