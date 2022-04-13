
var hr =  0;
var min = 0;
var sec = 0;
var count = 0;

let timmer = false;

function start(){
   timmer = true;
   mainTimmer();
}
function stop(){
    timmer = false;
   
}

function reset(){
    timmer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
    
}
function mainTimmer(){
    if(timmer == true){
        count= count+1;

            if(count == 100){
                sec = sec+1;
                count = 0;

                if(sec == 60){
                    min = min+1;
                    sec = 0;

                }

                if(min == 60){
                    hr = hr+1;
                    min = 0;
                    sec = 0;
                }
            }

            let stringhr = hr;
            let stringmin = min;
            let stringsec = sec;
            let stringcount = count;

            if(stringhr < 10){
                stringhr = "0" + hr;
            }
            if(stringmin < 10){
                stringmin = "0" + min;
            }
            if(stringsec < 10){
                stringsec = "0" + sec;
            }
            if(stringcount < 10){
                stringcount = "0" + count;
            }




            document.getElementById("hr").innerHTML = stringhr;
            document.getElementById("min").innerHTML = stringmin;
            document.getElementById("sec").innerHTML = stringsec;
            document.getElementById("count").innerHTML = stringcount;
        setTimeout('mainTimmer()', 10)
    }
    
}


