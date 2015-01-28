xmlhttp = new XMLHttpRequest();
var tekst = document.getElementById("tekst");
searchVar = document.getElementById("Search");

searchVar.addEventListener("input", function()
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var obj = JSON.parse(xmlhttp.responseText);
            search(obj);
        }
    }
    xmlhttp.open("GET","http://codetuts.nl/json/list.php",true);
    xmlhttp.send();
})



function search(obj) {

    tekst.innerHTML = "";

    for(var i = 0; i < obj.length; i++){

    if(obj[i].name.toLowerCase().indexOf(searchVar.value.toLowerCase()) !== -1
        && searchVar.value !== "")
    {


        document.getElementById("tekst").innerHTML +=

                "<br>" +
                "<h2>Name:</h2> " + obj[i].name + "<br>" +

                "<h2>Age: </h2>" + obj[i].age + "<br>" +

                "<h2>Gender:</h2> " + obj[i].gender + "<br>" +

                "<h2>Email:</h2> " +obj[i].email + "<br>" +

                "<h2>Phone Number: </h2>" + obj[i].phone + "<br>" +

                "<h2>Date Registered:</h2> " + obj[i].registered+ "<br>" +

                "<h2>Friends:</h2> " + obj[i].friends[name]+"<br><hr>" ;
        }
    }
}
