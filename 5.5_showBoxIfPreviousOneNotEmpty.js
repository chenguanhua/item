/**
 * Created by ghche on 11/1/2016.
 */

var table=$('#QID29 > div.Inner.BorderColor.FORM > div > fieldset > div > div > table > tbody');
table.children().find('textarea').change(function(){
    if(this.value!=""){
        this.parentElement.parentElement.nextElementSibling.style.display="block";
    }
});
var trs=table.children();
trs.css("display","none");
trs[0].style.display="block";
//alert(trs[0].getElementsByTagName("textarea")[0].id);

