// Select all FAQ buttons and add event listeners
document.querySelectorAll('.js-button-plus').forEach((button, index) => {
    button.addEventListener('click', () => {
        // Check if the button currently contains the "plus" icon
        if (button.innerHTML.includes('plus')) {
            // Change to "minus" icon and show the corresponding answer
            button.innerHTML = `<img class="minus-icon" src="images/icon-minus.svg" alt="minus icon">`;
            document.getElementById(`ans-${index}`).classList.add('show');
        } else if (button.innerHTML.includes('minus')) {
            // Change back to "plus" icon and hide the answer
            button.innerHTML = `<img class="plus-icon" src="images/icon-plus.svg" alt="plus icon">`;
            document.getElementById(`ans-${index}`).classList.remove('show');
        }
    });
});

// Select all FAQ questions and add event listeners
document.querySelectorAll('.js-questions').forEach((ques, index) => {
    ques.addEventListener('click', () => {
        // Check if the answer is already visible
        if (document.getElementById(`ans-${index}`).classList.contains('show')) {
            // Hide the answer and switch back to "plus" icon
            document.getElementById(`but-${index}`).innerHTML = `<img class="plus-icon" src="images/icon-plus.svg" alt="plus icon">`;
            document.getElementById(`ans-${index}`).classList.remove('show');
        } else {
            // Show the answer and switch to "minus" icon
            document.getElementById(`but-${index}`).innerHTML = `<img class="minus-icon" src="images/icon-minus.svg" alt="minus icon">`;
            document.getElementById(`ans-${index}`).classList.add('show');
        }
    });
});
