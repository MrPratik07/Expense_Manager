

var modalSalary = document.getElementById("myModal-salary");
var modalItem = document.getElementById("myModal-item");
var span = document.getElementsByClassName("close")[0];
var SalaryInput=document.getElementById("salary-input");
var ItemInput=document.getElementById("item-input");
var displaySalary=document.getElementById("displaySalary");

window.onclick = function(event) {
    if (event.target == modalSalary){
        modalSalary.style.display = "none";
    }
    else if (event.target== modalItem) {
      modalItem.style.display = "none";
    }
  }


function removeModalSalary(){
    modalSalary.style.display = "none";
    SalaryInput.value="";
}

function removeModalItem(){
    modalItem.style.display = "none";
    ItemInput.value="";
}

function AddSalary(){
    console.log("Add salary")
    modalSalary.style.display = "block";
}


function AddItem(){
    console.log("Add Item")
    modalItem.style.display = "block";
}

function SalaryToDisplay(){
    const getSalaryvalue=SalaryInput.value;
    displaySalary.innerText=getSalaryvalue;
    modalSalary.style.display = "none";

}