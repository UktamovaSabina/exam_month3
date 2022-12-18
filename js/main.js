// BURGER EVENTS

const burger = document.querySelector("#burger");
const navbarMobile = document.querySelector("#navbar-mobile");
const closeNav = document.querySelector("#close-nav");

burger.addEventListener("click", () => {
    navbarMobile.style.display = "flex";
    navbarMobile.classList.remove("d-none");
})

closeNav.addEventListener("click", () => {
    navbarMobile.style.display = "none";
})





// PRESS THE BTN IN HEADER SECTION AND SEE MY COMMENT ;)

const letsTalkBtn = document.querySelector("#lets-talk-btn");
const myComment = document.querySelector(".my-comment");
const closeBtn = document.querySelector("#close-btn");

letsTalkBtn.addEventListener("click", () => {
    myComment.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    myComment.style.display = "none";
});






// CLICK THE PRICING BUTTONS AND SEE THE ANNUAL COST


// SELF-STUDY COST
const pricingBtn1 = document.querySelector("#pricing-btn1");

pricingBtn1.addEventListener("click", () => {
    let selfMonthCost = 5.99;
    let perYearCost = selfMonthCost * 12;
    pricingBtn1.innerHTML = `£${perYearCost} per year`;

})


// LIVE ONLINE LESSON COST
const pricingBtn2 = document.querySelector("#pricing-btn2");

pricingBtn2.addEventListener("click", () => {
    let onlineMonthCost = 12.99;
    let perYearCost = onlineMonthCost * 12;
    pricingBtn2.innerHTML = `£${perYearCost} per year`;

})

// PERSONAL LESSON COST
const pricingBtn3 = document.querySelector("#pricing-btn3");

pricingBtn3.addEventListener("click", () => {
    let personalMonthCost = 20.99 ;
    let perYearCost = personalMonthCost * 12;
    pricingBtn3.innerHTML = `£${perYearCost} per year`;

})






// ENTER YOUR EMAIL ADDRESS INTO THE CONTACT FORM AND SEE IT IN ALERT! ;)

const form = document.querySelector("#form1");
const emailBtn = document.querySelector("#email-btn");
const emailInput = document.querySelector('input[type="email"]');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let emailAddress = emailInput.value;
    if ( emailAddress !== "") {
        alert(`Your address ${emailAddress} is successfully sent!`);
    }
    e.target.reset();
})
