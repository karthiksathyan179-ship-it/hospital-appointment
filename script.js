document.getElementById("appointmentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var department = document.getElementById("department").value;
    var doctor = document.getElementById("doctor").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var reason = document.getElementById("reason").value.trim();

    var message = document.getElementById("message");


    // Check patient name
    var namePattern = /^[A-Za-z ]+$/;

    if (name == "") {
        message.innerHTML = "Please enter patient name.";
        message.style.color = "red";
        return;
    }

    if (!namePattern.test(name)) {
        message.innerHTML = "Name should contain only letters.";
        message.style.color = "red";
        return;
    }


    // Check phone number
    var phonePattern = /^[0-9]{10}$/;

    if (phone == "") {
        message.innerHTML = "Please enter phone number.";
        message.style.color = "red";
        return;
    }

    if (!phonePattern.test(phone)) {
        message.innerHTML = "Phone number must contain exactly 10 digits.";
        message.style.color = "red";
        return;
    }


    // Check email
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email == "") {
        message.innerHTML = "Please enter email address.";
        message.style.color = "red";
        return;
    }

    if (!emailPattern.test(email)) {
        message.innerHTML = "Please enter a valid email address.";
        message.style.color = "red";
        return;
    }


    // Check department
    if (department == "") {
        message.innerHTML = "Please select a department.";
        message.style.color = "red";
        return;
    }


    // Check doctor
    if (doctor == "") {
        message.innerHTML = "Please select a doctor.";
        message.style.color = "red";
        return;
    }


    // Check date
    if (date == "") {
        message.innerHTML = "Please select appointment date.";
        message.style.color = "red";
        return;
    }

    var today = new Date();
    var selectedDate = new Date(date);

    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        message.innerHTML = "Appointment date cannot be in the past.";
        message.style.color = "red";
        return;
    }


    // Check time
    if (time == "") {
        message.innerHTML = "Please select appointment time.";
        message.style.color = "red";
        return;
    }


    // Check reason
    if (reason == "") {
        message.innerHTML = "Please enter the reason for your visit.";
        message.style.color = "red";
        return;
    }


    // If everything is correct
    message.innerHTML =
        "<b>Appointment Submitted Successfully</b><br><br>" +
        "Patient Name: " + name + "<br>" +
        "Doctor: " + doctor + "<br>" +
        "Department: " + department + "<br>" +
        "Date: " + date + "<br>" +
        "Time: " + time;

    message.style.color = "green";


    // Clear the form
    document.getElementById("appointmentForm").reset();

});
