//question about palindrome number
var num=Number(window.prompt("please enter number that contain just three digits"));

var dig1=num%10;
var dig3=parseInt(num/100);

if(dig1==dig3){
        window.console.log("is a palindrome");
        document.getElementById("pal").innerHTML+="The number ("+num+") is a palindrome";
}else{
        window.console.log("is a not palindrome");
        document.getElementById("pal").innerHTML+="The number ("+num+") is a not palindrome";
}