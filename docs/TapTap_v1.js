var lost = false;
var began = false;
var col;
var col2;
var col3;
var Score = 0;
var key = 0;
var ActiveBlock;
var strngScore;
var mode = 1;
var act_color = '#8BC34A';
var def_color = '#DCEDC8'; //alternative color: #26A69A
var mode = "Classic";//by default
var streak = 0; 
var Csound = new Audio('Press.mp3');


//Options
/*if (SEffects == false){ Csound.volume = 0}

*/

function HowTo(){
	mode =  document.getElementById("mode").value;
	if (mode === "Classic"){
	document.getElementById("HText").innerHTML = "<b><center>Classic</b></center><br>Press the arrow key corrospnding to each block on the last row as fast as you can!<br><b>Allowed Time delays between Taps will decrease with time..."
	}
	else if (mode === "Time"){
	document.getElementById("HText").innerHTML =  "<b><center>Taps in Time</b></center><br>Press the arrow key corrospnding to each block on the last row as fast as you can before time runs out!<br>Every <b>correct Tap</b> earns you 10 points.<br>Every incorrect Tap loses you 10 points."
	}
	else {
	document.getElementById("HText").innerHTML = "<b><center>100 Taps</b></center><br>Test how much time you need to do 100 Taps."
	}
};

function Modes(){
	document.getElementById("list").style.display = "none";
	document.getElementById("Menu").innerHTML = "<center><select id='mode' onchange = 'HowTo()'><option value='Classic'>Classic</option>//Keep on Tappig until you do a mistake<option value='Taps'>100 Taps</option>//how much time do you need for 100 taps<option value='Time'>Taps in Time</option>//how many taps can you press in 45s</select><br><p id = 'HText'></p>" ;	
	HowTo();
	}

function StartClock(){
	
};

document.onkeydown = checkKey;
function checkKey(e) {
	
	if ((e.keyCode == 38 || e.keyCode == 40 || e.keyCode == 37 || e.keyCode == 39) && (began === false)) {Begin();} //begin on button press
	
	console.log("Checking key")
    e = e || window.event;
    if (e.keyCode == 38) {
       // up arrow
	   key = 38;
	   Csound.play();
	   playTurn();
	   
    }
    else if (e.keyCode == 40) {
        // down arrow
		key = 40;
		Csound.play();
		playTurn();
    }
    else if (e.keyCode == 37) {
       // left arrow
	    key = 37;
		Csound.play();
		playTurn();
    }
    else if (e.keyCode == 39) {
       // right arrow
	  key = 39;
	  Csound.play();
	  playTurn();
    }
	strngScore = Score.toString();
	document.getElementById("Num").innerHTML = strngScore;
	key = 0;
};
function Begin(){
	began = true;
	document.getElementById("Menu").style.display = "none";
	Nxtstp();
	Nxtstp();
	Nxtstp();
	Nxtstp();
	/*setTimeout(Nxtstp(), 500);
	setTimeout(Nxtstp, 900);
	setTimeout(Nxtstp, 1300);
	setTimeout(Nxtstp(), 1700);*/
	if (mode == 1){
		StartClock();
	}
};

 function playTurn(){	 
    if (key == 37 && ActiveBlock == 1)
	{ 
	console.log("I was pressed");
		Score += 10;
        Nxtstp();
	}
	else if ((key==40 || key==38) && ActiveBlock == 2)
	{ 
		Score += 10;
        Nxtstp();
	}
	else if (key == 39 && ActiveBlock == 3 )
	{ 
		//play sound
		Score += 10;
        Nxtstp();
	}
	else
	{
		//play sound
		Score -= 10;
		Nxtstp();
	}
	console.log("Running");
}

//Transition	
function Nxtstp()
{
	console.log("Step");
//Fourth Row - takes col number from previous number and adds it to its row		
	document.getElementById("fc4r").style.backgroundColor = def_color;
	document.getElementById("sc4r").style.backgroundColor = def_color;
	document.getElementById("tc4r").style.backgroundColor = def_color;	
	switch(col3){
		case 1:
			document.getElementById("fc4r").style.backgroundColor = act_color;
			ActiveBlock = 1;//Active blocks on last row
		break;
		
		case 2 :
			document.getElementById("sc4r").style.backgroundColor = act_color;
			ActiveBlock = 2;
		break;
		
		case 3 :
			document.getElementById("tc4r").style.backgroundColor = act_color;
			ActiveBlock = 3;
		break;
	};	
	
//Third Row - takes col number from previous number and adds it to its row		
	document.getElementById("fctr").style.backgroundColor = def_color;
	document.getElementById("sctr").style.backgroundColor = def_color;
	document.getElementById("tctr").style.backgroundColor = def_color;	
	switch(col2){
		case 1:
			document.getElementById("fctr").style.backgroundColor = act_color;
			col3 = 1;
		break;
		
		case 2 :
			document.getElementById("sctr").style.backgroundColor = act_color;
			col3 = 2;
		break;
		
		case 3 :
			document.getElementById("tctr").style.backgroundColor = act_color;
			col3 = 3;
		break;
	};
	
//Second Row - takes col number from previous number and adds it to its row		
	document.getElementById("fcsr").style.backgroundColor = def_color;
	document.getElementById("scsr").style.backgroundColor = def_color;
	document.getElementById("tcsr").style.backgroundColor = def_color;	
	switch(col){
		case 1:
			document.getElementById("fcsr").style.backgroundColor = act_color;
			col2 = 1;
		break;
		
		case 2 :
			document.getElementById("scsr").style.backgroundColor = act_color;
			col2 = 2;
		break;
		
		case 3 :
			document.getElementById("tcsr").style.backgroundColor = act_color;
			col2 = 3;
		break;
	};
//First Row
	document.getElementById("fcfr").style.backgroundColor = def_color;
	document.getElementById("scfr").style.backgroundColor = def_color;
	document.getElementById("tcfr").style.backgroundColor = def_color;
	var x = Math.random();
	if (x < 0.33)
	{
		col = 1;
		document.getElementById("fcfr").style.backgroundColor = act_color
		console.log("it worked")
	}
	else if (0.33 < x && x < 0.66)
	{
		col = 2;
		document.getElementById("scfr").style.backgroundColor = act_color
	}
	else
	{
		col = 3;
		document.getElementById("tcfr").style.backgroundColor = act_color
	};
	console.log(x);
};
