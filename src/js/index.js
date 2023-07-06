document.addEventListener("DOMContentLoaded", (event) => {
    var emailElement = document.getElementById("email");
    emailElement.addEventListener("click", function() {
        navigator.clipboard.writeText(emailElement.lastElementChild.innerHTML);
        setToastMessage("Email")
        showToast();
    })

    var phoneElement = document.getElementById("phone");
    phoneElement.addEventListener("click", function() {
        navigator.clipboard.writeText(phoneElement.lastElementChild.innerHTML);
        setToastMessage("Phone")
        showToast();
    })

    var githubElement = document.getElementById("github");
    githubElement.addEventListener("click", function(event) {
        window.open("https://github.com/kimsternator", "_blank");
    })

    var linkedInElement = document.getElementById("linkedIn");
    linkedInElement.addEventListener("click", function(event) {
        window.open("https://www.linkedin.com/in/stephenskim/", "_blank");
    })

    var instagramElement = document.getElementById("instagram");
    instagramElement.addEventListener("click", function(event) {
        window.open("https://www.instagram.com/kimster_truck/", "_blank");
    })

    var githubElement = document.getElementById("discord");
    githubElement.addEventListener("click", function(event) {
        navigator.clipboard.writeText("kimsternator");
        setToastMessage("Discord")
        showToast();
    })

    var toastElement = document.getElementById("snackbar");
    var toastTextElement = document.getElementById("toastMessage");

    function showToast() {
        toastElement.classList.add("show");

        setTimeout(function() {
            toastElement.classList.remove("show");
        }, 3000);
    }

    function setToastMessage(message) {
        toastTextElement.textContent = message;
    }
});