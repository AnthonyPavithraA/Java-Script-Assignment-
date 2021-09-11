// document.getElementById('one').innerText="hello";

function putText(){
    document.getElementById('two').innerHTML="<h1>hello everyone</h1>";
}

function addTask(){
   let data=document.getElementById('inp').value;
   document.getElementById('two').innerHTML+=`<h1 class='todo'>${data}</h1>`;
   document.getElementById('inp').value="";
}

function changeColor(){
    document.getElementById('two').style.backgroundColor="yellowgreen";
}