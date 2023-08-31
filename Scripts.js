
const payButton = document.getElementById("payButton");



const bankDetailsForm = document.getElementById("bankDetailsForm");



payButton.addEventListener("click", () => {
    

    // Show the bank details form when the Pay button is clicked
    bankDetailsForm.style.display = "block";
    s
    
});




const bankForm = document.getElementById("bankForm");
bankForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Here you can write code to process the form data,
    // 
    // send it to the server, and handle the payment.

    // After processing the payment, you might want to show
    // a success message or redirect the user to a thank-you page.
    // For demonstration purposes, we'll simply hide the form.
    bankDetailsForm.style.display = "none";
});

