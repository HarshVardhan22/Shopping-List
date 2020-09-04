//********* ADDING ELEMENTS*********//
let name = document.querySelector('.name');
let price = document.querySelector('.price');
let showList = document.querySelector('.list');

let newPrice = document.querySelector('.newPrice');
//console.log(id);
//console.log('http://localhost:3000/list/'+id.value);

//****************SHOW LIST ITEMS 

function show(){
    showList.innerHTML = '';
    fetch('http://localhost:3000/list').then ((response) => response.json())
                                       .then((data) => {
                                           data.forEach((list) => {
                                               let li = document.createElement('li');
                                               li.textContent = `${list.id} - ${list.itemName} -  ${list.itemPrice}`;
                                               showList.appendChild(li);
                                           })
                                       })
}       

//*******************Add products************* */
function add(){
    
    fetch('http://localhost:3000/list',{
        method :'POST',
        headers:{
            'Accept': 'text/plain',
            'Content-Type' : 'application/JSON'
        },
        body :JSON.stringify({
            id : 0,
            itemName : name.value,
            itemPrice : 'Rs. '+ `${price.value}`
        })
    }).then((response) => response.txt())
      .then((data)=>console.log(data));
}

/***UPDATE PRODUCTS****************************/

function update() {
    let id = document.querySelector('.id').value;
    fetch('http://localhost:3000/list/' + id, {
        method: 'PUT',
        headers: {
            'Accept': 'text/plain',
            'Content-Type': 'application/JSON'
        },
        body: JSON.stringify({
            
            itemPrice: 'Rs. ' + `${newPrice.value}`
        })
    }).then((response) => response.text())
        .then((data) => console.log(data));
}

/******TO DELETE Products********************/

function del() {
    let del_id = document.querySelector('.del_id').value;
    fetch('http://localhost:3000/list/' + del_id, {
       
        method: 'DELETE',
       
    }).then((response) => response.text())
        .then((data) => console.log(data));
}
