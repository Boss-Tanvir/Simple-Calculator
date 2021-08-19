const screen = document.getElementById('screen');
console.log(screen);
let buttons = document.querySelectorAll('button');
console.log(buttons);
// let screenValue = ""
for (const item of buttons) {
    item.addEventListener('click', (e) => {
        
        let btnText = e.target.innerText;
        console.log(btnText);
        if (btnText === 'X') {
            btnText = '*'
            screen.value += btnText;
            
        }
        else if (btnText === 'C') {
            screen.value = ""
            
        }
        else if(btnText == '=') {
            screen.value = eval(screen.value);
        }
        else {
            screen.value += btnText;
            // screen.value = ""
        }
    });
}
