const billAmount= document.querySelector("#billAmount");
const cashGiven= document.querySelector("#cashGiven");
const btnCheck= document.querySelector("#check-btn");
const message=document.querySelector(".message");
const tableOutput= document.querySelectorAll(".numberOfNotes");
var noteAmount=[2000,500,100,20,10,5,1];

btnCheck.addEventListener("click",check);


message.style.display="none";

function check(){
    if(cashGiven.value>0){
        if(cashGiven.value>=billAmount.value){
            let amountToReturn=cashGiven.value-billAmount.value;
            // let numberOfNotesToBeGiven;
            for(let i=0;i<noteAmount.length;i++){
                
               let numberOfNotesToBeGiven= Math.trunc(amountToReturn/noteAmount[i]);
                amountToReturn=amountToReturn%noteAmount[i];
                tableOutput[i].innerText=numberOfNotesToBeGiven;
            }

        }else{
            message.style.display="block";
            message.innerText="Cash given was insufficient";
        }
    }else{
        message.style.display="block";
        message.innerText="Please enter valid amount of cash given";
    }
}


