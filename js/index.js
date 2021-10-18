const buttons = document.querySelectorAll (".btn");
const counterValue = document.querySelector (".counter span");
let count = 0;

console.log(buttons);
// NodeList(3) [button.btn.increment, button.btn.reset, button.btn.decrement]
// 0: button.btn.increment
// 1: button.btn.reset
// 2: button.btn.decrement
// length: 3
// [[Prototype]]: NodeList
// buttons is Array so we can use method 

buttons.forEach ((btn) => {
    btn.addEventListener("click", ()=>{
        // classList => ???
        const classList = btn.classList ;
        // console.log(classList);
        // DOMTokenList(2) ['btn', 'increment', value: 'btn increment']
        // DOMTokenList(2) ['btn', 'reset', value: 'btn reset']
        // DOMTokenList(2) ['btn', 'decrement', value: 'btn decrement']
        // DOMTokenList so we have to use method about that (we cant use include, we have to use contains)
        if ( classList.contains("increment")) count++;
        else if ( classList.contains("decrement")) count--;
        else count = 0 ;
        counterValue.textContent = count ;
        //beautiful
        if ( count > 0) counterValue.style.color = "green";
        else  counterValue.style.color = "red";

    })
});