var itemList = document.querySelector('#items');
//console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='orange';
itemList.lastElementChild.textContent = 'hello';
//console.log(itemList.lastChild);
itemList.firstElementChild.textContent = 'I am manipulated';
//console.log(itemList.firstChild);
let h2 = document.querySelector('#h2');
//console.log(h2.nextSibling);
//console.log(itemList.previousSibling);
h2.nextElementSibling.textContent = 'h2'
itemList.previousElementSibling.style.display = 'none';
for(let i=0;i<itemList.children.length;i++){
    itemList.children[i].style.backgroundColor='yellow';
}

var newD  = document.createElement('div');

newD.className = 'hii';
newD.id = 'newid';
newD.setAttribute('title','newdiv');

var newTextDiv = document.createTextNode('I am a new div');
newD.appendChild(newTextDiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newD ,h1);

var newDiv = document.createElement('div');
var newText = document.createTextNode('hello');
newDiv.appendChild(newText);
let ul = document.querySelector('.list-group');
let newItem = itemList.firstElementChild;
ul.insertBefore(newDiv , newItem);





