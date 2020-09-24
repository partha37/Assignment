var list = require('./hotel.json');
function dropbox()
{
    
    // var laptop=['sony','Lenovo'];
    // var mobile=['mi','vivo'];
    // var tv=['onida','sharp'];
    var printThis='<ul>';
    var x = document.getElementById("mySelect").value;
    //document.getElementById("demo").innerHTML = "You selected: " + x;
    if(x==0)
    {
            for(const i in list){
                printThis += "<li>"+list[i].name+"</li>";
            }
    }
    else if(x==1)
    {
        mobile.forEach(element => {
            printThis += "<li>"+element+"</li>";
        });
    }
    document.getElementById("dynamo").innerHTML = printThis;
}
