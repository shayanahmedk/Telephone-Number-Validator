const userInput = document.getElementById('user-input');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const resultDiv = document.getElementById('results-div');

// number validator function
const numberValidator = (input) => {
    // check if input is empty
    if(input === '') {
        alert("Please provide a phone number");
    }

    // regex for number validation
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

    // create a p element in html for the results-text
    // add new element and then append it into resultDiv
    const pElement = document.createElement('p');
    pElement.className = 'results-text';
    phoneRegex.test(input) ? pElement.style.color = '#00471b' : pElement.style.color = '#4d3800';
    pElement.appendChild(
        document.createTextNode(
            `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
        )
    );
    resultDiv.appendChild(pElement);
};

// event listeners
checkButton.addEventListener('click', () => {
    numberValidator(userInput.value);
    userInput.value = '';
});

clearButton.addEventListener('click', () => {
    // userInput.value = '';
    resultDiv.textContent = '';
});

userInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        numberValidator(userInput.value);
        userInput.value = '';
    }
});