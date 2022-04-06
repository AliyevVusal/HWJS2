//Task 1
function mode(){
    let mode = confirm("Modu Sec CANCEL-QARA,OK-AG");
    let body = document.body;
    let icon = document.getElementById("btncolor");

    if(mode != true){
        body.style.backgroundColor = "black";
        icon.className = "fa-solid fa-sun";
        body.style.color = "white";
        icon.style.color= "white";
    }
    else{
        document.body.style.backgroundColor = "red";
        icon.className = "fa-solid fa-moon";
        body.style.color = "black";
        icon.style.color= "black";
    }
}





//Task 2
function age(){
    var ageStr = prompt("Yasinizi Daxil Edin!","Yas Heddi Minimum 18 dir");
    var hbtn= document.getElementById("ytbtn");
    var hbtn2= document.getElementById("ytbtn2");
    var age = Number(ageStr);
    
    if(isNaN(ageStr))
    {
        alert("Eded Daxil Edin!");
    }
    else
    {
        if(age <= 18){
            hbtn2.style.visibility = "visible";
            alert("Boyu gelersen!");
        }else{
            hbtn.style.visibility = "visible";
            alert("Xos Geldiniz");
        }
        
    }
}



