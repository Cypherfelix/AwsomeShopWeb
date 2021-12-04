
function loadAll(){
    loadHeader();
    loadFooter();
}
function loadHeader()
{
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
			console.log(xmlhttp.responseText);
        document.getElementById('header').innerHTML=xmlhttp.responseText;
        }
    }
 xmlhttp.open("GET","./Assets/header.html",true);
 xmlhttp.send()
}

function loadFooter()
{
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
			console.log(xmlhttp.responseText);
        document.getElementById('footer').innerHTML=xmlhttp.responseText;
        }
    }
 xmlhttp.open("GET","./Assets/footer.html",true);
 xmlhttp.send()
}

function loadlogin(){
    var x = document.getElementById("mylogin");
    if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

