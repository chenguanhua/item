/**
 * Created by ghche on 10/9/2016.
 */
var moveId=1;
var repeatId=1;

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
    ev.dataTransfer.setData("info", [ev.target.id,ev.target.className,ev.target.parentNode.id]);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("info").split(',');;
    if (ev.target.id=="codes") {
        createBox(data,ev);
    }else if (ev.target.id=="choices"){
        document.getElementById(data[0]).remove();
    }else if (ev.target.id=="repeat"){
        if (data[1]!="repeat"){
            if (document.getElementById(data[0])=="move"){
                createBox(data,ev);
            }
        }
    }
}

function createBox(data,ev){
    var clone=document.getElementById(data[1]).cloneNode(true);
    if (data[1]=="move") {
        clone.id = "move" + moveId;
        moveId += 1;
    }else{
        clone.id = "repeat" + repeatId;
        repeatId += 1;
    }
    ev.target.appendChild(clone);
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


