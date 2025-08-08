// Get references to the form, inputs, and result div
const form = document.getElementById('calcForm');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const resultDiv = document.getElementById('result');

// Add event listener to the form to handle submission
form.addEventListener('submit', function(event) {
   // Prevent the form from refreshing the page
   event.preventDefault();

   // Get the values from the inputs and convert to numbers
   const num1 = parseFloat(num1Input.value);
   const num2 = parseFloat(num2Input.value);
   const operation = operationSelect.value;
   let result;

   // Validate inputs to ensure they are valid numbers
   if (isNaN(num1) || isNaN(num2)) {
     resultDiv.textContent = 'Please enter valid numbers.';
     return;
   }

   // Perform the calculation based on the selected operation
   switch (operation) {
     case 'add':
       result = num1 + num2;
       resultDiv.textContent = result;
       break;
     case 'subtract':
       result = num1 - num2;
       resultDiv.textContent = result;
       break;
     case 'multiply':
       result = num1 * num2;
       resultDiv.textContent = result;
       break;
     case 'divide':
       // Check for division by zero
       if (num2 === 0) {
         resultDiv.textContent = 'Error: Cannot divide by zero.';
         return;
       }
       result = num1 / num2;
       resultDiv.textContent = result;
       break;
     default:
       resultDiv.textContent = 'Please select a valid operation.';
   }
 });