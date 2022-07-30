function compute()
{
    var principleamount = document.getElementById("principleamount").value;
    var Interestrate = document.getElementById("Interestrate").value;
     var years = document.getElementById("years").value;
    if (principleamount == "") {
        alert("Enter a positive number");
        document.getElementById("principleamount").focus();
        return false;
    }else {
        if (principleamount <= 0) {
            alert("Enter a positive number");
            document.getElementById("principleamount").focus();
            return false;
        }
    }
    var HDB = new Date().getFullYear();
    var future= parseInt(HDB,10) + parseInt(years,10);
    var interest= principleamount * years * Interestrate / 100;
    var result= "If you deposit <mark>" + principleamount + "</mark>,<br> at an interest rate of <mark>" + Interestrate + "</mark>%. <br> You will receive an amount of <mark>" + interest + ",</mark><br> in the year <mark>" + future + "</mark>";
    document.getElementById("result").innerHTML=result;
}

function showVal(newVal){ 
    document.getElementById("InterestRate").innerHTML=newVal + '%';
}
        
