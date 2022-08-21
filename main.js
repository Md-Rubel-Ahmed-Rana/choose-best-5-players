
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
            alert("Added 5 players. You cannot add players more than 5. Thank you!")
            return button.removeAttribute("disabled", true)
        }
        orderList.appendChild(listItem);
    })
 }