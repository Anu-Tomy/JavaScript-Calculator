var box = document.getElementById("display");

function addtoScreen(x){
	box.value += x;
	if(x==="C"){
	box.value="";
   }
}

function answer(x){
	x = box.value;
	box.value = eval(x);
}

function power(x){
	x = box.value;
	box.value = eval(x*x);
}
//clear last entry
function backspace(){
	var num = box.value;
	var len = num.length-1;
	var newNum = num.substring(0,len);
	box.value = newNum;
}

	