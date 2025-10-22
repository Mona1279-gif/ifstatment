// three digits from user

var num1=Number(window.prompt("please enter the first number"));
var num2=Number(window.prompt("please enter the second number"));
var num3=Number(window.prompt("please enter the third number"));

document.getElementById("digits").innerHTML = "Descinding:- </br>";
if (num1>=num2 && num1>=num3){
    console.log(num1);
    document.getElementById("digits").innerHTML+=" "+num1;
    if(num2>=num3){
        console.log(" "+num2);
        document.getElementById("digits").innerHTML+=" "+num2;
        console.log(" "+num3);
        document.getElementById("digits").innerHTML+=" "+num3;
    }
    else{
        console.log(" "+num3);
        document.getElementById("digits").innerHTML+=" "+num3;
        console.log(" "+num2);
        document.getElementById("digits").innerHTML+=" "+num2;
    }
}
else if (num2>=num1 && num2>=num3){
    console.log(num2);
    document.getElementById("digits").innerHTML+=" "+num2;
    if(num1>=num3){
        console.log(" "+num1);
        document.getElementById("digits").innerHTML+=" "+num1;
        console.log(" "+num3);
        document.getElementById("digits").innerHTML+=" "+num3;
    }
    else{
        console.log(" "+num3);
        document.getElementById("digits").innerHTML+=" "+num3;
        console.log(" "+num1);
        document.getElementById("digits").innerHTML+=" "+num1;
    }
}
else{
    console.log(" "+num3);
    document.getElementById("digits").innerHTML+=" "+num3;
    if(num1>=num2){
        console.log(" "+num1);
        document.getElementById("digits").innerHTML+=" "+num1;
        console.log(" "+num2);
        document.getElementById("digits").innerHTML+=" "+num2;
    }
    else{
        console.log(" "+num2);
        document.getElementById("digits").innerHTML+=" "+num2;
        console.log(" "+num1);
        document.getElementById("digits").innerHTML+=" "+num1;
    }
}