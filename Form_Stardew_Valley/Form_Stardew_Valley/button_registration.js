document.getElementById("alertButton").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;

    let formIsValid = true; // Assume form is valid

    // Clear existing asterisks
    document.getElementById("username-required").textContent = "";
    document.getElementById("password-required").textContent = "";
    document.getElementById("name-required").textContent = "";

    // Check if required fields are filled
    if (username === "") {
        document.getElementById("username-required").textContent = "*";
        formIsValid = false; // Mark form as invalid
    }
    if (password === "") {
        document.getElementById("password-required").textContent = "*";
        formIsValid = false; // Mark form as invalid
    }
    if (name === "") {
        document.getElementById("name-required").textContent = "*";
        formIsValid = false; // Mark form as invalid
    }

    // If form is valid, show the success SweetAlert
    if (formIsValid) {
        Swal.fire({
            title: "Congradulations!",
            text: "Registration was succesful!",
            icon: "success",
            allowOutsideClick: false, // Prevents closing by clicking outside
            confirmButtonText: "OK",
            customClass: {
                popup: 'custom-swal-popup', // Custom class for the alert box
                confirmButton: 'custom-swal-confirm-button', // Custom class for the confirm button
                title: 'custom-swal-title', // Custom class for the title
                text: 'custom-swal-text' // Custom class for the text
            }
        }).then(() => {
            // Clear the input fields after confirmation
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            document.getElementById("name").value = "";
            document.getElementById("lastname").value = "";

            // Clear the radio buttons (gender selection)
            const genderRadios = document.getElementsByName("gender");
            for (let i = 0; i < genderRadios.length; i++) {
                genderRadios[i].checked = false;
            }
        });
    }
});
