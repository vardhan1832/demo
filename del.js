var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

let items = document.getElementsByClassName('list-group-item');
Array.from(items);
for(let i=0;i<items.length;i++){
  var editBtn = document.createElement('button');
  editBtn.className = 'btn btn-warning btn-sm float-right edit';
  editBtn.style.marginRight = '5px';
  editBtn.appendChild(document.createTextNode('edit'));
  items[i].appendChild(editBtn);
}

let des = document.createElement('input');
des.className='form-control mr-2';
des.type = 'text';
des.id = 'typeDes';
let dForm = document.getElementById('addForm');
let submitMe = document.getElementById('submit');
dForm.insertBefore(des, submitMe);


function addItem(e){
  e.preventDefault();
  var newItem = document.getElementById('item').value;
  let desItem = document.getElementById('typeDes').value;
  var li = document.createElement('li');
  li.className = 'list-group-item';

 // li.appendChild(document.createTextNode(newItem));

  var space = `${newItem}  ${desItem}`;
  li.appendChild(document.createTextNode(space));
 //li.appendChild(document.createTextNode(desItem));


  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
  var editBtn = document.createElement('button');
  editBtn.className = 'btn btn-warning btn-sm float-right edit';
  editBtn.style.marginRight = '5px';
  editBtn.appendChild(document.createTextNode('edit'));
  li.appendChild(editBtn);
}
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
var filter = document.getElementById('filter');
filter.addEventListener('keyup', filterItems);
let desItem = document.getElementById('typeDes').value;
function filterItems(e){
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(i){
    var itemName = i.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      i.style.display = 'block';
    } else {
      i.style.display = 'none';
    }
  });
}
