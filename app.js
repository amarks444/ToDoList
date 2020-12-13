const add = document.getElementById('add');
const clearing = document.getElementById('clearing');
const title = document.getElementById('title');
const Description = document.getElementById('Description');
const tableBody = document.getElementById('tableBody');
const deleted = document.getElementById('delete');
let str ='';
let itemJsonArray = []; 

const deleted1 = (index) => {  
    itemJsonArray = JSON.parse(localStorage.getItem('itemJson'));
    itemJsonArray.splice(index,1);
    localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
    update();
}

const update = () => {
    itemJsonArray = JSON.parse(localStorage.getItem('itemJson'));
    console.log(itemJsonArray);
    str ='';
    if(itemJsonArray    !=  null)
   { itemJsonArray.forEach((element,index)=>{
        let string =`<tr>
                        <th scope="row">${index+1}</th>
                        <td>${element[0]}</td>
                        <td>${element[1]}</td>
                        <td><button id="delete"  onclick = "deleted1(${index})" class="btn btn-primary btn-sm">DELETE</button></td>
                    </tr>`;
        str +=  string;      
    })}
    tableBody.innerHTML =   str;
}

update();



add.addEventListener('click',()=>{

    itemJsonArray = []; 
               
    if(localStorage.getItem('itemJson') ==  null ) 
    {   console.log("Inside If Null Statement"); 
        itemJsonArray.push([title.value ,Description.value]);
        localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
    }
    else
    {
        console.log("Inside else  Statement"); 
        itemJsonArray = JSON.parse(localStorage.getItem('itemJson'));
        itemJsonArray.push([title.value ,Description.value ]);
        localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
    }
    update();

})

clearing.addEventListener('click',()=>{
    if(confirm('Do You really Want to Delete All list Item?'))
    {    
         localStorage.clear();
         update();
    }
})