

var modalSalary = document.getElementById("myModal-salary");
var modalItem = document.getElementById("myModal-item");
var span = document.getElementsByClassName("close")[0];
var SalaryInput=document.getElementById("salary-input");
var ItemInput=document.getElementById("item-input");
var ItemPriceInput=document.getElementById("item-price-input");
var displaySalary=document.getElementById("displaySalary");
var displayMoneySpent=document.getElementById("displayMoneySpent");
var displayMoneyLeft=document.getElementById("displayMoneyLeft");


const itemArray=[];
var moneyspent=0;

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
    //console.log("Add salary")
    modalSalary.style.display = "block";
}


function AddItem(){
    //console.log("Add Item")
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
    var data={
        name:getItemName,
        price:getItemPrice
    }

    itemArray.push(data);

    var sum=getSalaryvalue;

    //console.log(itemArray);

    if(sum != moneyspent && itemArray.length<4){
    ItemBoxContainer.innerHTML= itemArray.map((i)=>{
            
            return  `<div class="item-name">
            <h5 class="name">${i.name}</h5>
            <h5 class="item-price">Rs ${i.price}</h5>
            <i id="bin-icon"class="fas fa-trash-alt"></i>
            </div>`
     
        })
        
        moneyspent+=getItemPrice
        displayMoneySpent.innerText=moneyspent;
        displayMoneyLeft.innerText=sum-moneyspent;
    } else {
         alert("You Cant add a item to list")
    
    }
    
    
    modalItem.style.display="none";
    ItemInput.value="";
    ItemPriceInput.value="";
}