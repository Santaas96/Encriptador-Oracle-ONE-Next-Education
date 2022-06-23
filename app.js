var input=document.querySelector("#ingreso");
var texto;
var val;

function validacion() {
    document.getElementById("msjNO").style.color = "black";
    var a=[];
    var b="";
    if(input.value==""){
       b=true
    }else{
        a=input.value.split("");
        b=a.map(function (e){
            if(e.codePointAt() > 96 && e.codePointAt() < 123 || e.codePointAt() == 32){
                return true;
            }else{
                return false;
            }
        })
    }        
    val=b.includes(false)       
}

function encriptar (){
    validacion();
    if(val==false){
        texto="";
        texto=input.value.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
        document.getElementById("output").innerHTML=texto;
        document.getElementById("boton3").style.visibility = "visible";
		document.getElementById("imgMuñeco").style.visibility = "hidden";
		document.getElementById("msj1").style.visibility = "hidden";
		document.getElementById("msj2").style.visibility = "hidden";
    }else{
        document.getElementById("msjNO").style.color = "red";
    }   
}

function desencriptar (){
    validacion();
    if(val==false){
        texto="";
        texto=input.value.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
        document.getElementById("output").innerHTML=texto;
        document.getElementById("boton3").style.visibility = "visible";
		document.getElementById("imgMuñeco").style.visibility = "hidden";
		document.getElementById("msj1").style.visibility = "hidden";
		document.getElementById("msj2").style.visibility = "hidden";
    }else{
        document.getElementById("msjNO").style.borderColor = "red";
    }
}

function copiar() {
    navigator.clipboard.writeText(texto);
}

var button1 = document.querySelector("#boton1")
var button2 = document.querySelector("#boton2")
var button3 = document.querySelector("#boton3")
button1.onclick = encriptar;
button2.onclick = desencriptar;
button3.onclick = copiar;