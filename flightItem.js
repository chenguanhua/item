/**
 * Created by ghche on 10/2/2016.
 */

var stop1=document.getElementById('QID1group0');
var stop2=document.getElementById('QID1group1');
var stop3=document.getElementById('QID1group2');
var n=0;
var trials='';

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
    }
);

test=function(){
    //alert('clicked');
    var label1,label2,label3;
    if (stop1.children[0]!=undefined){
        var labelId1=document.getElementById(getLabelId(stop1.children[0].id));
        label1=labelId1.children[0].innerHTML;
    }
    //alert(labelId1.children[0].innerHTML);
    if (stop2.children[0]!=undefined){
        var labelId2=document.getElementById(getLabelId(stop2.children[0].id));
        label2=labelId2.children[0].innerHTML;
    }
    if (stop3.children[0]!=undefined){
        var labelId3=document.getElementById(getLabelId(stop3.children[0].id));
        label3=labelId3.children[0].innerHTML;
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

getLabelId=function(id){
    if (id=='QR~QID1~1'){
        return 'QID1-1-label';
    }
    if (id=='QR~QID1~2'){
        return 'QID1-2-label';
    }
    if (id=='QR~QID1~3'){
        return 'QID1-3-label';
    }
    if (id=='QR~QID1~4'){
        return 'QID1-4-label';
    }
}








