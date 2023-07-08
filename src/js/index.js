document.addEventListener("DOMContentLoaded", (event) => {
    // Constants
    const BASE_URL = window.location.href.substring(0, window.location.href.lastIndexOf("/"));
    const RESUME_URL = "public/Stephen_Kim_Resume.pdf";

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
        window.open(`${BASE_URL}/${RESUME_URL}`);
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

    // Project Behaviors
    const totalProjects = 4;
    let pauseScroll = false;
    let currentActive = 0;
    var carouselElements = document.querySelectorAll(".project");
    var carouselNavigationElement = document.getElementById("carousel-navigation");
        
    for (var i = 0; i < totalProjects; i++) {
        carouselNavigationElement.children.item(i).addEventListener("click", function(event) {
            var childIndex = Array.prototype.indexOf.call(carouselNavigationElement.children, event.target);
            setCurrentActive(childIndex);
        });
    }

    function setCurrentActive(newCurrentIndex) {
        if (newCurrentIndex < 0 || newCurrentIndex >= totalProjects) {
            return;
        }
        carouselNavigationElement.children.item(currentActive)?.classList.remove("active");
        currentActive = newCurrentIndex;
        carouselNavigationElement.children.item(currentActive).classList.add("active");
        for (var i = 0; i < carouselElements.length; i++) {
            carouselElements[i].style.transform = `translateX(-${100 * currentActive}%)`;
        }
    }

    function carouselScroll() {
        if (!pauseScroll) {
            setCurrentActive(currentActive + 1 < totalProjects ? currentActive + 1 : 0);
        }
    }

    setInterval(carouselScroll, 3000);

    var dbElement = document.getElementById("db");
    var dbTitleElement = document.getElementById("db-title");
    dbElement.addEventListener("mouseenter", function() {
        dbTitleElement.classList.add("moveup");
        pauseScroll = true;
    });
    dbElement.addEventListener("mouseleave", function() {
        dbTitleElement.classList.remove("moveup");
        pauseScroll = false;
    });
    dbElement.addEventListener("click", function() {
        window.open("https://github.com/kimsternator/Relational-Database", "_blank");
    });

    var pathElement = document.getElementById("path");
    var pathTitleElement = document.getElementById("path-title");
    var pathURL = "pathfinding-visualizer"
    pathElement.addEventListener("mouseenter", function() {
        pathTitleElement.classList.add("moveup");
        pauseScroll = true;
    });
    pathElement.addEventListener("mouseleave", function() {
        pathTitleElement.classList.remove("moveup");
        pauseScroll = false;
    });
    pathElement.addEventListener("click", function() {
        // window.open(`${BASE_URL}/${sortURL}`, "_blank");
        window.open(`${"https://kimsternator.github.io"}/${pathURL}`, "_blank");
    });

    var sortElement = document.getElementById("sort");
    var sortTitleElement = document.getElementById("sort-title");
    var sortURL = "sorting-visualizer"
    sortElement.addEventListener("mouseenter", function() {
        sortTitleElement.classList.add("moveup");
        pauseScroll = true;
    });
    sortElement.addEventListener("mouseleave", function() {
        sortTitleElement.classList.remove("moveup");
        pauseScroll = false;
    });
    sortElement.addEventListener("click", function() {
        // window.open(`${BASE_URL}/${sortURL}`, "_blank");
        window.open(`${"https://kimsternator.github.io"}/${sortURL}`, "_blank");
    });

    var mvpElement = document.getElementById("mvp");
    var mvpTitleElement = document.getElementById("mvp-title");
    mvpElement.addEventListener("mouseenter", function() {
        mvpTitleElement.classList.add("moveup");
        pauseScroll = true;
    });
    mvpElement.addEventListener("mouseleave", function() {
        mvpTitleElement.classList.remove("moveup");
        pauseScroll = false;
    });
    mvpElement.addEventListener("click", function() {
        window.open("https://github.com/kimsternator/ServiceUp", "_blank");
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