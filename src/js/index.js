document.addEventListener("DOMContentLoaded", (event) => {
    // Constants
    let RESUME_URL = "public/Stephen_Kim_Resume.pdf";

    // Header Elements
    var emailElement = document.getElementById("email");
    emailElement.addEventListener("click", function() {
        navigator.clipboard.writeText(emailElement.lastElementChild.innerHTML);
        setToastMessage("Email")
        showToast();
    });

    var phoneElement = document.getElementById("phone");
    phoneElement.addEventListener("click", function() {
        navigator.clipboard.writeText(phoneElement.lastElementChild.innerHTML);
        setToastMessage("Phone")
        showToast();
    });
    var resumeElement = document.getElementById("resume");
    resumeElement.addEventListener("click", function() {
        console.log(window.location.href);
        window.open(window.location.href + RESUME_URL, "_blank");
    });


    // Footer Elements
    var githubElement = document.getElementById("github");
    githubElement.addEventListener("click", function(event) {
        window.open("https://github.com/kimsternator", "_blank");
    });

    var linkedInElement = document.getElementById("linkedIn");
    linkedInElement.addEventListener("click", function(event) {
        window.open("https://www.linkedin.com/in/stephenskim/", "_blank");
    });

    var instagramElement = document.getElementById("instagram");
    instagramElement.addEventListener("click", function(event) {
        window.open("https://www.instagram.com/kimster_truck/", "_blank");
    });

    var githubElement = document.getElementById("discord");
    githubElement.addEventListener("click", function(event) {
        navigator.clipboard.writeText("kimsternator");
        setToastMessage("Discord")
        showToast();
    });

    var backElement = document.getElementById("back");
    backElement.addEventListener("click", function(event) {
        window.scrollTo({top: 0, behavior: 'smooth'});
        backElement.style.visibility = "hidden";
    });

    // Toast Elements
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

    // Section Elements
    var amazonJob = document.getElementById("amazon");
    var amazonDesription = document.getElementById("job-description-amazon");
    amazonJob.addEventListener("mouseenter", function() {
        setVisibility(amazonDesription, "visible");
    });
    amazonJob.addEventListener("mouseleave", function() {
        setVisibility(amazonDesription, "hidden");
    });

    var lockstepJob = document.getElementById("lockstep");
    var lockstepDesription = document.getElementById("job-description-lockstep");
    lockstepJob.addEventListener("mouseenter", function() {
        setVisibility(lockstepDesription, "visible");
    });
    lockstepJob.addEventListener("mouseleave", function() {
        setVisibility(lockstepDesription, "hidden");
    });

    var srpJob = document.getElementById("srp");
    var srpDesription = document.getElementById("job-description-srp");
    srpJob.addEventListener("mouseenter", function() {
        setVisibility(srpDesription, "visible");
    });
    srpJob.addEventListener("mouseleave", function() {
        setVisibility(srpDesription, "hidden");
    });

    var notebookJob = document.getElementById("notebook");
    var notebookDesription = document.getElementById("job-description-notebook");
    notebookJob.addEventListener("mouseenter", function() {
        setVisibility(notebookDesription, "visible");
    });
    notebookJob.addEventListener("mouseleave", function() {
        setVisibility(notebookDesription, "hidden");
    });

    var taJob = document.getElementById("ta");
    var taDesription = document.getElementById("job-description-ta");
    taJob.addEventListener("mouseenter", function() {
        setVisibility(taDesription, "visible");
    });
    taJob.addEventListener("mouseleave", function() {
        setVisibility(taDesription, "hidden");
    });

    var pnaJob = document.getElementById("pna");
    var pnaDesription = document.getElementById("job-description-pna");
    pnaJob.addEventListener("mouseenter", function() {
        setVisibility(pnaDesription, "visible");
    });
    pnaJob.addEventListener("mouseleave", function() {
        setVisibility(pnaDesription, "hidden");
    });

    // Document Behaviors
    document.addEventListener("scroll", function() {
        if (scrollY > 0) {
            setVisibility(backElement, "visible");
        } else {
            setVisibility(backElement, "hidden");
        }
    });

    function setVisibility(element, visibility) {
        element.style.visibility = visibility;
    }
});