// TOGGLE PAGE CONTENT

//LANDING 
const landingBtn = document.querySelector("#home-btn");
const landingContent = document.querySelector("#landing-page");

//BIO 
const bioBtn = document.querySelector("#bio");
const bioContent = document.querySelector("#bio-page");

//EXPERIENCE 
const experienceBtn = document.querySelector("#experience");
const experienceContent = document.querySelector("#experience-page");

//PORFOLIO 
const portfolioBtn = document.querySelector("#portfolio");
const portfolioContent = document.querySelector("#portfolio-page");


//LANDING PAGE FUNCTION
function toggleLanding() {
    landingContent.style.display = "block";
    bioContent.style.display = "none";
    experienceContent.style.display = "none";
    portfolioContent.style.display = "none";
};

landingBtn.addEventListener("click", toggleLanding);


//BIO PAGE FUNCTION
function toggleBio() {
    bioContent.style.display = "block";
    landingContent.style.display = "none";
    experienceContent.style.display = "none";
    portfolioContent.style.display = "none";
};

bioBtn.addEventListener("click", toggleBio); 


//EXPERIENCE PAGE FUNCTION
function toggleExperience() {
    experienceContent.style.display = "block";
    bioContent.style.display = "none";
    landingContent.style.display = "none";
    portfolioContent.style.display = "none";
};

experienceBtn.addEventListener("click", toggleExperience);

//PORTFOLIO PAGE FUNCTION
function togglePortfolio() {
    portfolioContent.style.display = "block";
    experienceContent.style.display = "none";
    bioContent.style.display = "none";
    landingContent.style.display = "none";
};

portfolioBtn.addEventListener("click", togglePortfolio);




