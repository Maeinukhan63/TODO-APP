let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
let item=document.createElement("li");
item.innerText = inp.value;
ul.appendChild(item);
let dltBtn=document.createElement("button");
dltBtn.innerText="delete";
dltBtn.classList.add("button");
item.appendChild(dltBtn);


inp.value="";

});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let itemP=event.target.parentElement;
        itemP.remove();
    }

})


//this code is only work on existing buttons 
// let btnDel=document.querySelectorAll(".delete");
// for(btnDel1 of btnDel){
//     btnDel1.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();

//     })
// }
