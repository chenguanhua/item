/**
 * Created by ghche on 10/25/2016.
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
        info={'s95':[1,27,0],
            '95d':[4,24,4],
            'sp':[7,5,0],
            'p95':[10,18,0.75],
            'p826':[13,18,0.75],
            '826d':[16,31,0],
            's75':[20,15,0],
            '75826':[25,19,0]
        }

        var time1 = new Date();
        Qualtrics.SurveyEngine.setEmbeddedData('timeTest',time1);

        $('#QID10 > div.Inner.BorderColor.DragAndDrop > div > fieldset > div > table > tbody > tr > td.groupsContainerTd.BorderColor > div:nth-child(1)').before("<div class='Group BorderColor Columns'><div><h2 class='BorderColor'>Start from: Nova Blanche Elementary School</h2><img id='nova' src='https://umiami.qualtrics.com/CP/Graphic.php?IM=IM_560lPxvkONJrt2Z'></div></div>" );
        $('#nova').parent().css('text-align','center');
        $('#QID10 > div.Inner.BorderColor.DragAndDrop > div > fieldset > div > table > tbody > tr > td.groupsContainerTd.BorderColor > div:nth-child(2)').after("<div class='Group BorderColor Columns'><div><h2 class='BorderColor'>Destination: University of Miami</h2><img id='um' src='https://umiami.qualtrics.com/CP/Graphic.php?IM=IM_d7siJpkZFAnEHTn'></div></div>" );
        $('#um').parent().css('text-align','center');
        $( ".ui-sortable-handle" ).mousedown(function() {
            isDragging = false;
        }).mousemove(function() {
            isDragging = true;
        }).mouseup(function() {
            newActionTime = new Date();
            result=[]
            $( "#QID10group0 li" ).each(function( index ) {
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
    alert('clicked');
    var label1,label2,label3;
    var label=[];
    $( "#QID10group0 li" ).each(function( index ) {
        label.push(getNameId($( this ).attr('id')));
    });

    if (label.length==1){
        label1=label[0];
        label2='um';
    }else if(label.length==2){
        label1=label[0];
        label2=label[1];
        label3='um';
    }

    if (label1=='I95' && label2=='um'){
        str='Time: '+info['s95'][1]+'+'+info['95d'][1]+'='+(info['s95'][1]+info['95d'][1]);
        str=str+'\n'+'Cost: '+info['s95'][2]+'+'+info['95d'][2]+'='+(info['s95'][2]+info['95d'][2]);
        alert(str);
    }else if (label1=='Turnpike' && label2=='I95' && label3=='um'){
        str='Time: '+info['sp'][1]+'+'+info['p95'][1]+'+'+info['95d'][1]+'='+(info['sp'][1]+info['p95'][1]+info['95d'][1]);
        str=str+'\n'+'Cost: '+info['sp'][2]+'+'+info['p95'][2]+'+'+info['95d'][2]+'='+(info['sp'][2]+info['p95'][2]+info['95d'][2]);
        alert(str);
    }else if (label1=='Turnpike' && label2=='826' && label3=='um'){
        str='Time: '+info['sp'][1]+'+'+info['p826'][1]+'+'+info['826d'][1]+'='+(info['sp'][1]+info['p826'][1]+info['826d'][1]);
        str=str+'\n'+'Cost: '+info['sp'][2]+'+'+info['p826'][2]+'+'+info['826d'][2]+'='+(info['sp'][2]+info['p826'][2]+info['826d'][2]);
        alert(str);
    }else if (label1=='I75' && label2=='826' && label3=='um'){
        str='Time: '+info['s75'][1]+'+'+info['75826'][1]+'+'+info['826d'][1]+'='+(info['s75'][1]+info['75826'][1]+info['826d'][1]);
        str=str+'\n'+'Cost: '+info['s75'][2]+'+'+info['75826'][2]+'+'+info['826d'][2]+'='+(info['s75'][2]+info['75826'][2]+info['826d'][2]);
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
    if (id=='QR~QID10~1'){
        return 'I95';
    }
    if (id=='QR~QID10~2'){
        return 'Turnpike';
    }
    if (id=='QR~QID10~3'){
        return '826';
    }
    if (id=='QR~QID10~4'){
        return 'I75';
    }
}