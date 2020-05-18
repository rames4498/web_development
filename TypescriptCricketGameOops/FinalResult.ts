window.onload=()=>{
    var res_t1=parseInt((localStorage.getItem("res_T1"))); 
    var p_score_t1_arr=localStorage.getItem("player_score_T1").split(",").map(Number); 
    (<HTMLInputElement>document.getElementById("Score_T1")).value=res_t1.toString();
    var res_t2=parseInt((localStorage.getItem("res_T2")));
    var p_score_t2_arr=localStorage.getItem("player_score_T2").split(",").map(Number);
    
    (<HTMLInputElement>document.getElementById("Score_T2")).value=res_t2.toString();
    if(res_t1>res_t2){
        (<HTMLInputElement>document.getElementById("Win_team")).value="INDIA won by " +  (res_t1-res_t2) + " runs";
    }
    else if(res_t1<res_t2){
        
       (<HTMLInputElement> document.getElementById("Win_team")).value="PAKISTAN won by "+ (res_t2-res_t1)+" runs";
    }
    else{
        (<HTMLInputElement>document.getElementById("Win_team")).value="Match is tie";
    }
    
    var T1_scoreboard=<HTMLTableElement>document.getElementById("T1_scoreboard");
    var players:string[]; 
    players = ["Sachin","Sehwag","Ganguly","Dravid","Gambhir","Lakshman","Yuvraj","Harbajan","Zaheer","Nehra","Agarkar"];
    for (var i=0;i<p_score_t1_arr.length;i++){
        var row=T1_scoreboard.insertRow(-1);
       
            var cell1=row.insertCell(-1);
            var cell2=row.insertCell(-1);
            cell1.innerHTML=players[i];
            cell2.innerHTML=p_score_t1_arr[i].toString();
        
    }
    var players2:string[]; 
    players2 = ["Bhutt","Yousuf","Malik","Afridi","Inzumam","Razak","Misbah","Akthar","Ajmal","Amir","Gul"];
    var T2_scoreboard=<HTMLTableElement>document.getElementById("T2_scoreboard");
    for (var i=0;i<p_score_t2_arr.length;i++){
        var row=T2_scoreboard.insertRow(-1);
      
            var cell1=row.insertCell(-1);
            var cell2=row.insertCell(-1);
            cell1.innerHTML= players2[i];
            cell2.innerHTML=p_score_t2_arr[i].toString();
        
    }
   
    
    

}
