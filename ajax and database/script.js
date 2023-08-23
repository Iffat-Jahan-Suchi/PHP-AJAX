// function show(val)
// {
//     if(val.length==0)
//     {
//         document.getElementById('demo').innerHTML="";
//         return;
//     }
//
//     const xhr=new XMLHttpRequest();
//     xhr.onload=function () {
//         document.getElementById('demo').innerHTML=this.responseText;
//     }
//
//     xhr.open('POST','index.php?q='+val)
//     xhr.send();
//
// }

function show(val)
{
    if(val == '')
    {
        document.getElementById('demo').innerHTML='';
        return;
    }
    const xml=new XMLHttpRequest();
    xml.onload=function () {
        document.getElementById('demo').innerHTML=this.responseText;
    }
    xml.open('GET',"index.php?q="+val);
    xml.send();
}