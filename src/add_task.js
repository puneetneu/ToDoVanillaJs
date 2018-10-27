import {close_card,star,close_task,notepmty,input_empty} from './features.js';

//add task to the particular card
var add_task=function(){
var add_task=document.getElementsByClassName("addtask");
for(let i=0 ; i<add_task.length ;i++)
{
    add_task[i].addEventListener("click", function()
    {
        
        let p_e=this.parentElement.parentElement;
        let ul = this.parentElement.parentElement.getElementsByClassName("list");
        let div_1=this.parentElement.getElementsByClassName("input_task");
        let task_input=div_1[0].value;
         
        
        if (task_input === '') {
            alert("You must write something");
        } else {
        
            let today = new Date();
            let dd = today.getDate();
            let mm = today.getMonth()+1;
            let yyyy = today.getFullYear();
            today = mm + '/' + dd + '/' + yyyy;   
        let task="";
        task+="<div class='task'><span class='span_task'>"+ task_input +"</span> <br><span class='star'> &#9734;</span><span class='close'> &#9747; </span> <span class='e_f_r'> "+today+" &nbsp;</span> </div>";
        ul[0].innerHTML=task+ul[0].innerHTML;
        close_task();
        star();
        div_1[0].value="";
        }
        
    })
    
    
}
    
}

export{add_task};