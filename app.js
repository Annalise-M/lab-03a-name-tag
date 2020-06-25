
const myButton = document.getElementById('input-button');

myButton.addEventListener('click', () => {
    const myInput = document.getElementById('name-input');

    const userInput = myInput.value;
    const nameBox = document.getElementById('name');

    nameBox.textContent = userInput;

    // console.log(userInput);
});

const redButton = document.getElementById('roy-button');

redButton.addEventListener('click', () => {
    const colorChange = document.getElementById('tag');
    colorChange.style.background = 'magenta';
    
});

const greenButton = document.getElementById('g-button');

greenButton.addEventListener('click', () => {
    const colorChange = document.getElementById('tag');
    colorChange.style.background = 'greenyellow';

});

const blueButton = document.getElementById('biv-button');

blueButton.addEventListener('click', () => {
    const colorChange = document.getElementById('tag');
    colorChange.style.background = 'skyblue';

});



// const userInput = document.getElementById('name-input');

// userInput.addEventListener('name-input', () => {
//     // post-click logic goes here!
// });






// get the Input
// get the input value
// get the div
// set the text content of the div to the input value

//set event listeners
