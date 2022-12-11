var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor = 'green';
var thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.display = 'none';

var all = document.querySelectorAll('.list-group-item');
all[1].style.color = 'red';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}