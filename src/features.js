function notepmty()
{
let tryv = document.querySelectorAll("[contenteditable=true]");
for (let i = 0; i < tryv.length; i++) {
    tryv[i].addEventListener("blur", function(evt){
        if(this.innerText.length===0)
          this.innerText=this.id;

    })

}
}

let input_empty=function()
{
    let input =document.getElementsByTagName("input");
    for (let x = 0; x < input.length; x++) {
      

    }
}

//adding close icon in every task
let close_task=function()
{
    let close = document.getElementsByClassName("close");
    for (let x = 0; x < close.length; x++) {
        close[x].onclick = function() {
            let li = this.parentElement;
            
            li.style.display = "none";
            
        }
    }
}

// adding start in every task
let star=function()
{
    let close = document.getElementsByClassName("star");
    for (let x = 0; x < close.length; x++) {
        close[x].onclick = function() {
            this.style.color="red";
            
        }
    }
}

// adding close icon for every card
var close_card=function()
{
    let close = document.getElementsByClassName("close_card");
    for (let x = 0; x < close.length; x++) {
        close[x].onclick = function() {
            let li = this.parentElement.parentElement;
            li.style.display = "none";
            
        }
    }
}
// not allow enter 
let ent= document.querySelectorAll("p");
let i;
for (i = 0; i < ent.length; i++) {
ent[i].addEventListener("keydown", function(evt)
{
    
    if (evt.which === 13) {
        evt.preventDefault();
    }     
});
// not allow enter
ent[i].addEventListener("blur", function(evt)
{

if(this.innerText.length===0)
this.innerText="Add "+ this.id;


});

}

export {close_card,star,close_task,notepmty,input_empty};