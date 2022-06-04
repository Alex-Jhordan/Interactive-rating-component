let components = document.querySelectorAll(".component");
let options = document.querySelectorAll(".component__option");
let submit = document.querySelector(".component__submit");
let rating = document.querySelector("#rating");
let ratingValue = 0;

options.forEach(option => {
    option.addEventListener("click", function() {
        options.forEach(option => {
            option.classList.remove("component__option--selected");
        });

        option.classList.add("component__option--selected");
        ratingValue = option.textContent;
    })
});

submit.addEventListener("click", function() {    
    components.forEach(component => {
        component.classList.toggle("component--hidden");
    });
    
    rating.innerHTML = ratingValue;
})