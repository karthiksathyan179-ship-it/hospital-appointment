document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var department = document.getElementById("department").value;
    var doctor = document.getElementById("doctor").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    document.getElementById("confirmationText").innerHTML =
        "Thank you, <b>" + name + "</b>.<br><br>" +
        "Your appointment has been booked with <b>" + doctor + "</b>.<br><br>" +
        "Department: " + department + "<br>" +
        "Date: " + date + "<br>" +
        "Time: " + time;

    document.getElementById("confirmation").style.display = "block";
    document.getElementById("appointmentForm").reset();
});

function closeConfirmation() {
    document.getElementById("confirmation").style.display = "none";
}
