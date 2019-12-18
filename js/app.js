var cols = ["red", "blue", "green","Black","Yellow"];
var colIndex = 0;
function colorChange() {
var col = document.getElementById("card");
if( colIndex >= cols.length ) {
colIndex = 0;
}
col.style.backgroundColor = cols[colIndex];
colIndex++;
}

function colorChange2()
{
var clrs = parseInt(document.getElementById('Clr').value);

switch(clrs){
case 1:
clrs = 'Blue';
break;
case 2:
clrs = "Red";
break;
case 3:
clrs = "Green";
break;
case 4:
clrs = "Black";
break;
case 5:
clrs = "Orange";
break;
case 6:
clrs = "Yellow";
break;
default:
}
document.getElementById('card').style.backgroundColor = clrs;
}