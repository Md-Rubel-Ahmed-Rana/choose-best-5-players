
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
            alert("Added 5 players. You can't select players more than 5. Thank you!")
            return button.removeAttribute("disabled", true)
        }
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
    const totalPlayerBudget = perPlayerBudget * 5;

     //Validate input field value
     const inputValue =  document.getElementById("per-player-budget");
      if(inputValue.value == ""){
         alert("Player budget is emptry");
         return;
      }
    const playerExpenseElement = document.getElementById("player-expense-total");
    playerExpenseElement.innerText = totalPlayerBudget;
 });


 document.getElementById("calc-total-cost").addEventListener("click", () => {
    const managerCost = getInputValueById("manager-cost");
    const coachCost = getInputValueById("coach-cost");
    const totalPlayerCost = getTextElementValueById("player-expense-total");
    const getTotalCost = totalPlayerCost + managerCost + coachCost;

    //Validate input field value
    const managerInput =  document.getElementById("manager-cost");
    const coachInput =  document.getElementById("coach-cost");
      if(managerInput.value == "" || coachInput.value == ""){
         alert("Input field is emptry");
         return;
      }
    const calculateTotalCostElement = document.getElementById("total-cost");
    calculateTotalCostElement.innerText = getTotalCost;
 })