import {close_card,star,close_task,notepmty,input_empty} from './features.js';
import{add_task} from './add_task';

function func(title,author,minput)
{

    let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth()+1;
      let yyyy = today.getFullYear();
      today = mm + '/' + dd + '/' + yyyy;
    let card ="";
    card+="<div class='card' >";
    card+="<div class='card_d1'> <span id='Title' contenteditable='true'> "+  title  +"</span> <span class='close_card'> &#9747; </span> </div>";
    card+="<div class='clearfix'> <input type='text' class='input_task '> <span class='addtask'>&#43;</span></div> ";
    card+="<div class=list>";
    card+="<div class='task'><span class='span_task'>"+ minput +"</span> <br><span class='star'> &#9734;</span><span class='close'> &#9747; </span> <span class='e_f_r'> "+today+" &nbsp;</span> </div>";
    card+="</div>";
    card+="<div id='Author' contenteditable='true' class='author'>"+   author+ "</div>";
    card+="</div>";

    let sec = document.getElementById("card_list");
    sec.innerHTML+=card;

    add_task();
    close_card();
    star();
    close_task();
    notepmty();   
}


export{ func};