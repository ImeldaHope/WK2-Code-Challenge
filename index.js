//Define an array to store items
let shoppingList = [];

//Save list locally to recover when page is reloaded
//let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

//fetch items from form input and append to list
document.addEventListener('DOMContentLoaded', () => {
    //fetch form and assign to variable
    const formSubmission = document.getElementById("list_form");
    
    formSubmission.addEventListener('submit', (e) => {
        //Prevents default form behaviour which is relaoding after every submission.
        e.preventDefault(); 
        
        //Fetch items inputted and add them into the array.
        shoppingList.push(e.target.input_list.value);        
        mapArrayItems();       
        formSubmission.reset();
        
    })
    clearAll(); //Function call for button that deletes all
});

function mapArrayItems(){   
    const lists = document.querySelector('.items');
    //Clear existing list thus dynamically updating the list without appending new item to existing content.
    lists.innerHTML = '';
    shoppingList.map(addItems); //Map items from array alongside their DOM elements.
}

//Adds new items to list container using button -"Add"
function addItems(item){
    const list = document.createElement('li');
    list.textContent = `${item} `;     
    //Button to mark item as purchased.
    const purchasedBtn = document.createElement('button');
    purchasedBtn.textContent = "Mark Purchased"
    list.appendChild(purchasedBtn);
    document.querySelector('.items').appendChild(list);
    purchasedBtn.addEventListener('click',() => {
        const itemBought = purchasedBtn.parentNode;       
        purchasedBtn.textContent = "Unmark Purchased";   
        
        //Checks if button `Mark Purchased` has been clicked and adds text decoration and color if true.
        if (itemBought.style.textDecoration === 'line-through') {
            itemBought.style.textDecoration = 'none';
            itemBought.style.color = 'black';
            purchasedBtn.textContent = "Mark Purchased";
        } else {
            itemBought.style.textDecoration = 'line-through';
            itemBought.style.color = 'red';
            purchasedBtn.textContent = "Unmark Purchased";
        }
    });
}


//Adds event listener to the "clear" button to remove ALL items from the list
function clearAll(){
    document.getElementById("delete_btn").addEventListener("click",(e)=>{
        const taskList = document.querySelector(".items");
        //Deletes DOM elements and clears array to ensure new input doesn't return previous array content.
        while (taskList.firstChild && shoppingList.length > 0 ) {
            taskList.removeChild(taskList.firstChild);
            shoppingList.pop();
        }        
    });    
}





