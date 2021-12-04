class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML =  getInnerHTML("header.html");
    }
}
customElements.define('my-header', MyHeader);

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
 xmlhttp.open("GET","./header.html",true);
 xmlhttp.send()
}

