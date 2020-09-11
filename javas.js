function d(vis){
 document.getElementById('sol').value+=vis;

}
function result(){
     var value1=document.getElementById('sol').value;
      res=eval(value1);
     document.getElementById('sol').value=res;

}


function clr(){
 document.getElementById('sol').value="";

}
