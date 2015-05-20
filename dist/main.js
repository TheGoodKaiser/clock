var counter = document.getElementById('counter');
var counterContainer = document.getElementById('counterContainer');
var count = 0;
var myDate = new Date;
setColor();
if (myDate.getSeconds()<10) {
	counter.innerHTML = myDate.getHours() + ":" + myDate.getMinutes() + ":0" + myDate.getSeconds();
} else {
	counter.innerHTML = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
}
var colorCount = 0;
function setColor() {
	colorCount++;
	if(colorCount%5 == 0) {
		var col = Math.random();
		if (col<0.33) {
			counterContainer.style.background = "red";
			counter.style.color = "blue";
		} else if (col>0.66) {
			counterContainer.style.background = "blue";
			counter.style.color = "red";
		} else {
			counterContainer.style.background = "violet";
			counter.style.color = "white";
		}
	}
}
counter.count = function () {
	count++;
	var myDate = new Date;
	if (myDate.getSeconds()<10) {
		setColor();
		counter.innerHTML = myDate.getHours() + ":" + myDate.getMinutes() + ":0" + myDate.getSeconds();
	} else {
		setColor();
		counter.innerHTML = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
	}
	if(counter.innerHTML==0) {
		clearInterval(intervalId);
	}
}

var intervalId = setInterval(counter.count, 1000);
