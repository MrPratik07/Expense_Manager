

var modalSalary = document.getElementById("myModal-salary");
var modalItem = document.getElementById("myModal-item");
var span = document.getElementsByClassName("close")[0];
var SalaryInput=document.getElementById("salary-input");
var ItemInput=document.getElementById("item-input");
var ItemPriceInput=document.getElementById("item-price-input");
var displaySalary=document.getElementById("displaySalary");
var displayMoneySpent=document.getElementById("displayMoneySpent");
var displayMoneyLeft=document.getElementById("displayMoneyLeft");


// const itemArray=[
//         {
//             itemname:"Books",
//             itemprice:50        
//         }
// ];







window.onclick = function(event) {
    if (event.target == modalSalary){
        modalSalary.style.display = "none";
        SalaryInput.value="";
    }
    else if (event.target== modalItem) {
      modalItem.style.display = "none";
      ItemInput.value="";
      ItemPriceInput.value="";
    }
  }


function removeModalSalary(){
    modalSalary.style.display = "none";
    SalaryInput.value="";
}

function removeModalItem(){
    modalItem.style.display = "none";
    ItemInput.value="";
    ItemPriceInput.value="";
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

function ItemToDisplay(){
    const getItemName=ItemInput.value;
    const getItemPrice= parseInt(ItemPriceInput.value);
    const getSalaryvalue= parseInt(SalaryInput.value);
    const ItemBoxContainer=document.querySelector(".item-box-container");
    if(getSalaryvalue > getItemPrice){

        ItemBoxContainer.innerHTML= `<div class="item-name">
        <h5 id="name">${getItemName}</h5>
        <h5 id="item-price">Rs ${getItemPrice}</h5>
        <i id="bin-icon"class="fas fa-trash-alt"></i>
        </div>`
        displayMoneySpent.innerText=getItemPrice;
        displayMoneyLeft.innerText=getSalaryvalue-getItemPrice;
    }else{
        alert("You Dont Have Enough Salary to Buy Item")
    }
    
    
    modalItem.style.display="none";
}