function addItem(){
    let tit = document.querySelector("#title").value;
    let des = document.querySelector("#description").value;
    let arr;
    if(localStorage.getItem("items") == null){
        arr = [];
        arr.push([tit,des]);
        localStorage.setItem("items",JSON.stringify(arr));
    }
    else{
        arr = JSON.parse(localStorage.getItem("items"));
        arr.push([tit,des]);
        localStorage.setItem("items",JSON.stringify(arr));
    }
    updateList();
}

function updateList(){
    arr = JSON.parse(localStorage.getItem("items"));
    let str = "";
    if(arr!=null){
        arr.forEach((element,index) => {
            str += `<tr>
            <th scope="row">${index+1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-sm btn-primary" onclick="deleteTask(${index})">Delete</button></td>
        </tr>`;
        });
        document.querySelector("#tableBody").innerHTML = str;
    }
    else{
        str = `<tr>
        <th scope="row">0</th>
        <td></td>
        <td></td>
        <td><button class="btn btn-sm btn-primary">Delete</button></td>
        </tr>`;
    document.querySelector("#tableBody").innerHTML = str;
    }
}

function deleteTask(index){
    arr = JSON.parse(localStorage.getItem("items"));
    arr.splice(index,1);
    localStorage.setItem("items",JSON.stringify(arr));
    updateList();
}

function clearList(){
    if(confirm("Confirm clear??")){
        localStorage.clear();
        updateList();
    }
}

updateList();
document.querySelector("#add").addEventListener('click',addItem);