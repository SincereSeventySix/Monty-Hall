var win = [];
var lose = [];
var paraHold = [];

var resultCont = document.getElementById("resultCont");

var stayBut = document.getElementById("stayBut");
stayBut.addEventListener("click", getArgStay);

var switchBut = document.getElementById("switchBut");
switchBut.addEventListener("click", getArgSwitch);

function getArgStay() {
var stayBut = document.getElementById("stayBut").style.background = "yellow";
var switchBut = document.getElementById("switchBut").style.background = "none";
paraHold.push("stay");
}

function getArgSwitch() {
var stayBut = document.getElementById("stayBut").style.background = "none";
var switchBut = document.getElementById("switchBut").style.background = "yellow";
paraHold.push("switch");
}

var buttton = document.getElementById("button");
button.addEventListener("click", MontyHallTest);

function MontyHallTest(arg) {
    var arg = paraHold[0];
    var formreps = document.getElementById("reps").value;
    var result = [];

    if (arg == "switch") {
        for (var i = 0; i < formreps; i++) {
            var winDoor = Math.ceil(Math.random() * 3);
            var chooseDoor = Math.ceil(Math.random() * 3);     
            var game = [];
            game.push(winDoor);
            game.push(chooseDoor);
            result.push("In test " + (i + 1) + ", the winning door is " + winDoor + "<br>");
            result.push("In test " + (i + 1) + ", the user choice was " + chooseDoor + "<br>");
                        
            if (game[0] == 1 && game[1] == 1 ) {
                chooseDoor = 2;
                result.push("(cond.1) both other doors were empty and the user switching to either would lose. User switched to " + chooseDoor + "<br>"); 
            } 
            else if (game[0] == 2 && game[1] == 2 ) {
                chooseDoor = 3;
                result.push("(cond.2) both other doors were empty and the user switching to either would lose. User switched to " + chooseDoor + "<br>"); 
            } 
            else if (game[0] == 3 && game[1] == 3 ) {
                chooseDoor = 1;
                result.push("(cond.3) both other doors were empty and the user switching to either would lose. User switched to " + chooseDoor + "<br>"); 
            } 
            else if (game[0] == 3 && game[1] == 2 ) {
                chooseDoor = 3;  
                result.push("(cond.4) the user was shown empty door 1 and so switched to " + chooseDoor + "<br>");  
            }
            else if (game[0] == 2 && game[1] == 3 ) {
                chooseDoor = 2;  
                result.push("(cond.5) the user was shown empty door 1 and so switched to " + chooseDoor + "<br>");  
            } 
            else if (game[0] == 2 && game[1] == 1 ) {
                chooseDoor = 2;  
                result.push("(cond.6) the user was shown empty door 3 and so switched to " + chooseDoor + "<br>"); 
            }
            else if (game[0] == 1 && game[1] == 2 ) {
                chooseDoor = 1;  
                result.push("(cond.7) the user was shown empty door 3 and so switched to " + chooseDoor + "<br>");       
            } 
            else if (game[0] == 3 && game[1] == 1 ) {
                chooseDoor = 3;
                result.push("(cond.8) the user was shown empty door 2 and so switched to " + chooseDoor + "<br>"); 
            } 
            else if (game[0] == 1 && game[1] == 3 ) {
                chooseDoor = 1;
                result.push("(cond.9) the user was shown empty door 2 and so switched to " + chooseDoor + "<br>"); 
            }     
            if (winDoor == chooseDoor) 
                {
                win.push(win.length + 1);
                } else if (winDoor !== chooseDoor) 
                {
                lose.push(lose.length + 1);
            }         
        }
            result.push("The function ran the Monty Hall Game test " + formreps + " time(s) <br>");    
            result.push(win.length + " wins <br>");
            result.push(lose.length + " losses <br>");
            resultCont.innerHTML = result;

    } else if (arg == "stay") {
        var formreps = document.getElementById("reps").value;
    
        for (var i = 0; i < formreps; i++) {
            var winDoor = Math.ceil(Math.random() * 3);
            result.push("In test " + (i + 1) + ", the winning door is " + winDoor + "<br>");
            var chooseDoor = Math.ceil(Math.random() * 3);
            result.push("In test " + (i + 1) + ", the user choice was " + chooseDoor + "<br>");
            result.push("The user chose to stay <br>");

            if (winDoor == chooseDoor) 
                {
                win.push(win.length + 1);
                } else if (winDoor !== chooseDoor) 
                {
                lose.push(lose.length + 1);
                } 
            }
            result.push("The function ran the Monty Hall Game test " + formreps + " times <br>");
            result.push(win.length + " wins <br>");
            result.push(lose.length + " loss(es) <br>");
            resultCont.innerHTML = result;
    }
}




