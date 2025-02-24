function partofStory() { 
    var num1 = Math.ceil(Math.random() * 20); 
    var num2 = Math.ceil(Math.random() * 20); 
    var num3 = Math.ceil(Math.random() * 20); 

    document.getElementById("first").innerHTML = num1; 
    document.getElementById("second").innerHTML = num2; 
    document.getElementById("third").innerHTML = num3;

    var highest = Math.max(num1, num2, num3); 
    if(highest==num1) { 
        if(num1==num2) { 
        document.getElementById("compare").innerHTML = "The data was a bit odd to Rick because the it showed that there were two subjects that have the highest number of passers which is Physics, Chemistry(" + num1 + ")";
        } 
        else if(num1==num3) { 
            document.getElementById("compare").innerHTML = "The data was a bit odd to Rick because it showed that there were two subjects that have the highest number of passers which is Physics, Biology(" + num3 + ")";
        }
        else { 
        document.getElementById("compare").innerHTML = "Then, Rick stated to Roll that the highest number of passers is from Physics(" + num1 + ")"; 
        }
    } 
    else if(highest==num2) { 
        if(num2==num3) {
            document.getElementById("compare").innerHTML = "The data was a bit odd to Rick because the it showed that there were two subjects that have the highest number of passers which is Chemistry, Biology(" + num2 + ")";
        } 
        else {
        document.getElementById("compare").innerHTML = "Then, Rick stated to Roll that the highest number of passers is from Chemistry(" + num2 + ")"; 
        }
    } 
    else if(highest==num3) { 
        document.getElementById("compare").innerHTML = "Then, Rick stated to Roll that the highest number of passers is from Biology(" + num3 + ")"; 
    } 
     
    
    else { 
        document.getElementById("compare").innerHTML = "The data doesn't make sense according to Rick.";
    } 
    
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    var letter = alphabet[num1 - 1]; 
    
    if(highest==num1) { 
        if(num1==num2) { 
        document.getElementById("letter").innerHTML = "Rick found out that the name of the high scorer of one of these subjects starts with the letter " + letter;
        }
        else { 
        document.getElementById("letter").innerHTML = "Rick found out that the name of the high scorer of Physics starts with the letter " + letter; 
        }
    } 
    else if(highest==num2) { 
        if(num2==num3) {
            document.getElementById("letter").innerHTML = "Rick found out that the name of the high scorer of one of these subjects starts with the letter " + letter;
        } 
        else {
        document.getElementById("letter").innerHTML = "Rick found out that the name of the high scorer of Chemistry starts with the letter " + letter; 
        }
    } 
    else if(highest==num3) { 
        if(num3==num1) {
            document.getElementById("letter").innerHTML = "Rick found out that the name of the high scorer of one of these subjects starts with the letter " + letter;
        } 
        else {
        document.getElementById("letter").innerHTML = "Rick found out that the name of the high scorer of Biology starts with the letter " + letter; 
        }
    } 
     
    
    else { 
        document.getElementById("letter").innerHTML = "There is no letter.";
    }  

    var time = num2*num3;
    var timeNum = 60; 
    var hour = Math.floor(time / timeNum); 
    var min = Math.floor(time % timeNum); 

    document.getElementById("complete").innerHTML = "Rick said that this student took roughly around "+ time + " mins or about " + hour + "hr and " + min + "mins to finish the course which is in the KHub."
}

partofStory();
