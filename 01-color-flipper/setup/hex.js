const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

let result = ['#']
const hexizer = function(){
    for(let i = 0; i < 6; i++){
        const x = Math.floor(Math.random() * hex.length)
        result.push(hex[x])
    }
}

btn.addEventListener('click', function(){
// get random number 0 > 3 colors[]
    hexizer()
    const randomNumber = result.join('');
    document.body.style.backgroundColor = randomNumber;
    color.textContent = randomNumber;
    result = ['#']
})
