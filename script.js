const inputBox=document.getElementById('input-field');
const listContainer=document.getElementById('list-container');

function addtodo(){
    if(inputBox.value === ""){
        alert("You must write something!");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML=`<i class="fa-solid fa-trash"></i>`;
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName === 'SPAN' || e.target.tagName === 'I'){
        e.target.closest('li').remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML=localStorage.getItem('data');
}
showTasks();
