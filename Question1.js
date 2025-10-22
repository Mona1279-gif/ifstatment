//question about print month
var month=window.prompt("please enter an integer between 1 and 12");
month=Number(month);
switch (month) {

    case 1:
        window.console.log("The month The month you selected is (January).");
        document.getElementById("month").innerHTML+="The month you selected is (January).";
        break;

    case 2:
        window.console.log("The month you selected is (February).");
        document.getElementById("month").innerHTML+="The month you selected is (February).";
        break;

    case 3:
        window.console.log("The month you selected is (March).");
        document.getElementById("month").innerHTML+="The month you selected is (March).";
        break;
    case 4:
        window.console.log("The month you selected is (April).");
        document.getElementById("month").innerHTML+="The month you selected is (April).";
        break;
    case 5:
        window.console.log("The month you selected is (May).");
        document.getElementById("month").innerHTML+="The month you selected is (May).";
        break;
    case 6:
        window.console.log("The month you selected is (June).");
        document.getElementById("month").innerHTML+="The month you selected is (June).";
        break;
    case 7:
        window.console.log("The month you selected is (July).");
        document.getElementById("month").innerHTML+="The month you selected is (July).";
        break;
    case 8:
        window.console.log("The month you selected is (August).");
        document.getElementById("month").innerHTML+="The month you selected is (August).";
        break;
    case 9:
        window.console.log("The month you selected is (September).");
        document.getElementById("month").innerHTML+="The month you selected is (September).";
        break;
    case 10:
        window.console.log("The month you selected is (October).");
        document.getElementById("month").innerHTML+="The month you selected is (October).";
        break;
    case 11:
        window.console.log("The month you selected is (November).");
        document.getElementById("month").innerHTML+="The month you selected is (November).";
        break;
    case 12:
        window.console.log("The month you selected is (December).");
        document.getElementById("month").innerHTML+="The month you selected is (December).";
        break;

    default:
        window.console.log("Non value!!");
        document.getElementById("month").innerHTML+="Non value!!";
        break;
}