/**
 * Created by ghche on 10/9/2016.
 */
var moveId=1;

var directions=["F","B","L","R"];

window.onload=function(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var cvsWidth=c.width;
    var cvsHeight=c.height;
    var img = document.getElementById("roboticArm");
    ctx.drawImage(img,cvsWidth/2-7,cvsHeight/2-3.5,14,7);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    if (ev.target.id=="codes") {
        var data = ev.dataTransfer.getData("text");
        var clone=document.getElementById(data).cloneNode(true);
        clone.id="move"+moveId;
        moveId+=1;
        ev.target.appendChild(clone);
    }else{
        var data = ev.dataTransfer.getData("text");
        document.getElementById(data).remove();
    }
}

function beginMove(){
    var childDivs = document.getElementById('codes').getElementsByTagName('div');

    for( i=0; i< childDivs.length; i++ )
    {
        var childDiv = childDivs[i];
        if(childDiv.className=="move"){
            if (isNaN(childDiv.getElementsByTagName('input')[0].value)){
                //alert('not a number');
                childDiv.getElementsByTagName('input')[0].style.color="red";
            }
            if (directions.indexOf(childDiv.getElementsByTagName('input')[1].value)<=0){
                //alert('direction error');
                childDiv.getElementsByTagName('input')[1].style.color="red";
            }
        }else if (childDiv.className=="repeat"){
            if (isNaN(childDiv.getElementsByTagName('input')[0].value)){
                //alert('not a number');
                childDiv.getElementsByTagName('input')[0].style.color="red";
            }
        }
    }
}


