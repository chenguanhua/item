/**
 * Created by ghche on 10/2/2016.
 */

var stops=document.getElementById('QID1group0');
var n=0;
var trials='';
var actions='';
var isDragging=false;
var lastActionTime,newActionTime;
var lastActionResult,newActionResult;
var result=[];

Qualtrics.SurveyEngine.addOnload(function()
    {
        //distance, time, cost, waiting time
        info={'mh':[1,65,100,25],
            'md':[4,70,105,40],
            'dp':[7,55,60,30],
            'hl':[10,80,120,0],
            'dl':[13,70,110,0],
            'pl':[16,25,40,0]
        }

        var time1 = new Date();
        Qualtrics.SurveyEngine.setEmbeddedData('timeTest',time1);
        li1=document.getElementById('QR~QID1~1');
        //alert(li1.parentElement.id);
        $('#QID5 > div.Inner.BorderColor.DragAndDrop > div > fieldset > div > table > tbody > tr > td.groupsContainerTd.BorderColor > div:nth-child(1)').before("<div class='Group BorderColor Columns'><div><h2 class='BorderColor'>Start from: Miami</h2><img id='miami' src='https://umiami.qualtrics.com/CP/Graphic.php?IM=IM_bggDDtFNYeHKcy9'></div></div>" );
        $('#miami').parent().css('text-align','center');
        $('#QID5 > div.Inner.BorderColor.DragAndDrop > div > fieldset > div > table > tbody > tr > td.groupsContainerTd.BorderColor > div:nth-child(2)').after("<div class='Group BorderColor Columns'><div><h2 class='BorderColor'>Destination: Los Angeles</h2><img id='la' src='https://umiami.qualtrics.com/CP/Graphic.php?IM=IM_3h2SHP8gOi3GFI9'></div></div>" );
        $('#la').parent().css('text-align','center');
        $( ".ui-sortable-handle" ).mousedown(function() {
            isDragging = false;
        }).mousemove(function() {
            isDragging = true;
        }).mouseup(function() {
            newActionTime = new Date();
            result=[]
            $( "#QID5group0 li" ).each(function( index ) {
                result.push(getNameId($( this ).attr('id')));
            });
            newActionResult=result;
            actions+= ' '+lastActionTime+' '+lastActionResult+'//';
            lastActionTime=newActionTime;
            lastActionResult=newActionResult;
            Qualtrics.SurveyEngine.setEmbeddedData('actionTest', actions);
            console.log(actions);
        });
    }
);




test=function(){
    //alert('clicked');
    var label1,label2,label3;
    var label=[];
    $( "#QID5group0 li" ).each(function( index ) {
        label.push(getNameId($( this ).attr('id')));
    });

    if (label.length==1){
        label1=label[0];
        label2='Los Angeles';
    }else if(label.length==2){
        label1=label[0];
        label2=label[1];
        label3='Los Angeles';
    }

    if (label1=='Houston' && label2=='Los Angeles'){
        str='Time: '+info['mh'][1]+'+'+info['mh'][3]+'+'+info['hl'][1]+'='+(info['mh'][1]+info['mh'][3]+info['hl'][1]);
        str=str+'\n'+'Cost: '+info['mh'][2]+'+'+info['hl'][2]+'='+(info['mh'][2]+info['hl'][2]);
        alert(str);
    }else if (label1=='Dallas' && label2=='Los Angeles'){
        str='Time: '+info['md'][1]+'+'+info['md'][3]+'+'+info['dl'][1]+'='+(info['md'][1]+info['md'][3]+info['dl'][1]);
        str=str+'\n'+'Cost: '+info['md'][2]+'+'+info['dl'][2]+'='+(info['md'][2]+info['dl'][2]);
        alert(str);
    }else if (label1=='Dallas' && label2=='Phoenix'&&label3=='Los Angeles'){
        str='Time: '+info['md'][1]+'+'+info['md'][3]+'+'+info['dp'][1]+'+'+info['dp'][3]+'+'+info['pl'][1]+'='+(info['md'][1]+info['md'][3]+info['dp'][1]+info['dp'][3]);
        str=str+'\n'+'Cost: '+info['md'][2]+'+'+info['dp'][2]+'+'+info['pl'][2]+'='+(info['md'][2]+info['dl'][2]+info['pl'][2]);
        alert(str);
    }else{
        alert('This route doesn\'t exists!');
    }

    var time1 = new Date();
    n+=1;
    trials+= 'trial no.'+n+': '+time1+' '+label1+' '+label2+' '+label3+'//';
    Qualtrics.SurveyEngine.setEmbeddedData('fieldTest', trials);

}

getNameId=function(id){
    if (id=='QR~QID5~1'){
        return 'Phoenix';
    }
    if (id=='QR~QID5~2'){
        return 'Houston';
    }
    if (id=='QR~QID5~3'){
        return 'Dallas';
    }
}