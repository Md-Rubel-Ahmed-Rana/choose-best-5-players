
// get player numbers dynamically to get player budget;
let playerNumber = 0;
const buttons = document.getElementsByClassName("button");
 for(const button of buttons) {
    button.addEventListener("click", () => {
        button.setAttribute("disabled", true);
        const playerName = button.previousSibling.previousSibling.innerText;
        const orderList  = document.getElementById("order-list");
        const listItem  = document.createElement("li");
        listItem.innerText = playerName;
        
        const listItemArray = orderList.childNodes;
        if (listItemArray.length > 5) {
            button.setAttribute("disabled", true);
            alert("Sorry, You can't select players more than 5. Thank you!")
            return button.removeAttribute("disabled", true)
        }
         playerNumber += 1;
         const playerNumberElement = document.getElementById("player-number");
         playerNumberElement.innerText = playerNumber;
         button.style.backgroundColor = "#8080806b";
         button.style.cursor = "none";
         orderList.appendChild(listItem);
      })
 }

 const getInputValueById = (inputFieldId) => {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseInt(inputFieldString);

    return inputFieldValue;
 }

const getTextElementValueById = (elementId) => {
   const totalPlayerCostElement = document.getElementById(elementId);
    const totalPlayerCostString = totalPlayerCostElement.innerText;
    const totalPlayerCost = parseInt(totalPlayerCostString);

    return totalPlayerCost;
}

 // get and calculate the player budget.
 document.getElementById("calc-player-budget").addEventListener("click", () => {
    const perPlayerBudget = getInputValueById("per-player-budget");
    const totalPlayerBudget = perPlayerBudget * playerNumber;
    const orderList  = document.getElementById("order-list");
    const listItemArray = orderList.childNodes;

    console.log(listItemArray);
     //Validate input field value
     const inputValue =  document.getElementById("per-player-budget");
      if(inputValue.value == ""){
         alert("Sorry, You don't have entered player budget.");
         return;
      }
      if(listItemArray.length <=1) {
         alert("Sorry, You don't select any players yet! Please select at least one player.");
         return;
      }
    const playerExpenseElement = document.getElementById("player-expense-total");
    playerExpenseElement.innerText = totalPlayerBudget;

    // clear the input field's value;
    inputValue.value = ""
 });


 document.getElementById("calc-total-cost").addEventListener("click", () => {
    const managerCost = getInputValueById("manager-cost");
    const coachCost = getInputValueById("coach-cost");
    const totalPlayerCost = getTextElementValueById("player-expense-total");
    const getTotalCost = totalPlayerCost + managerCost + coachCost;

    // get the Player Expense element and check weather has value or not;
    const playerExpenseElement = document.getElementById("player-expense-total");
    if (playerExpenseElement.innerText <= 0) {
      alert("Player expense amount is required.");
      return;
    }
    //Validate input field value
    const managerInput =  document.getElementById("manager-cost");
    const coachInput =  document.getElementById("coach-cost");
      if(managerInput.value == "" || coachInput.value == ""){
         alert("Sorry, You don't have entered both amounts.");
         return;
      }
    const calculateTotalCostElement = document.getElementById("total-cost");
    calculateTotalCostElement.innerText = getTotalCost;

    // clear the input field's value;
      managerInput.value = "";
      coachInput.value = "";
 })