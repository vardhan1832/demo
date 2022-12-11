document.getElementById('header-title').style.borderBottom='solid 4px #000';
let item = document.getElementById('span-item');
item.style.fontWeight= '1000';
item.style.color='green';

let items=document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor='green';
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight='1000';
}

let li = document.getElementsByTagName('li');
for(let i=0;i<li.length;i++){
    li[i].style.fontWeight='1000';
}