import {close_card,star,close_task,notepmty,input_empty} from './features.js';



function loadDoc() {
    var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myArr = JSON.parse(this.responseText);
        for(let i=0 ; i<myArr.employees.length ; i++)
        {
            let card ="";
    card+="<div class='card'>";
    card+="<div class='card_d1'> <span contenteditable='true'> "+  myArr.employees[i].title  +"</span> <span class='close_card'> &#9747; </span> </div>";
    card+="<div class='clearfix'> <input type='text' class='input_task '> <span class='addtask'>&#43;</span></div> ";
    card+="<div class=list>";
    for(let x=0 ; x<myArr.employees[i].list.length ; x++)
        {
    card+="<div class='task'><span class='span_task'>"+ myArr.employees[i].list[x].title +"</span> <br><span class='star'> &#9734;</span><span class='close'> &#9747; </span> <span class='e_f_r'> " +myArr.employees[i].list[x].date +" &nbsp;</span> </div>";
        }
    card+="</div>";
    card+="<div class='author'>"+  myArr.employees[i].author+ "</div>";
    card+="</div>";

    let sec = document.getElementById("card_list");
    sec.innerHTML+=card;
        }
        

    }

    add_task();    
    close_card();
    star();
    close_task(); notepmty();
};
xmlhttp.open("GET", "./list.json", true);
xmlhttp.send();

  }


  export{loadDoc};