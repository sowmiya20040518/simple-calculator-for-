document.getElementById("add").addEventListener("click",function(){
    var a=parseInt(document.getElementById("num1").value);
    var b=parseInt(document.getElementById("num2").value);
    var c=a+b;
     document.getElementById("number").value=c;
})
document.getElementById("sub").addEventListener("click",function(){
    var a=parseInt(document.getElementById("num1").value);
    var b=parseInt(document.getElementById("num2").value);
    var c=a-b;
    document.getElementById("number").value=c;
})
document.getElementById("multiply").addEventListener("click",function(){
    var a=parseInt(document.getElementById("num1").value);
    var b=parseInt(document.getElementById("num2").value);
    var c=a*b;
    document.getElementById("number").value=c;
})
document.getElementById("divide").addEventListener("click",function(){
    var a=parseInt(document.getElementById("num1").value);
    var b=parseInt(document.getElementById("num2").value);
    var c=a/b;
    document.getElementById("number").value=c;
})
document.getElementById("modulo").addEventListener("click",function(){
    var a=parseInt(document.getElementById("num1").value);
    var b=parseInt(document.getElementById("num2").value);
    var c=a%b;
    document.getElementById("number").value=c;
})