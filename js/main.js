const showDetails = document.querySelectorAll(".detail-item");
const closeModalDetail = document.querySelector(".close-modal-detail");
const addRequets = document.querySelector(".newrequest");
const closeModalRequets = document.querySelector(".close-modal-requet");
const cancelModalRequets = document.querySelector(".cancel-requet");
const showMenuMobile = document.querySelector(".bars");
const closeMenuMobile = document.querySelector(".closeMenu");
showDetails.forEach((element, index) => {
    element.addEventListener("click", () => {
        document.querySelector(".modal-details").classList.toggle("hidden");
        document.querySelector("body").classList.toggle("active");
    });
});

closeModalDetail.addEventListener("click", () => {
    document.querySelector(".modal-details").classList.add("hidden");
    document.querySelector("body").classList.remove("active");
});

addRequets.addEventListener("click", () => {
    document.querySelector(".modal-new-requet").classList.remove("hidden");
    document.querySelector("body").classList.add("active");
});
closeModalRequets.addEventListener("click", () => {
    document.querySelector(".modal-new-requet").classList.add("hidden");
    document.querySelector("body").classList.remove("active");
});
cancelModalRequets.addEventListener("click", () => {
    document.querySelector(".modal-new-requet").classList.add("hidden");
    document.querySelector("body").classList.remove("active");
});

showMenuMobile.addEventListener("click", () => {
    document.querySelector(".menu-mobile").classList.remove("-left-full");
    document.querySelector(".menu-mobile").classList.add("acctive");
    document.querySelector("body").classList.add("overflow-y-hidden");
});
closeMenuMobile.addEventListener("click", () => {
    document.querySelector(".menu-mobile").classList.add("-left-full");
    document.querySelector(".menu-mobile").classList.remove("acctive");
    document.querySelector("body").classList.remove("overflow-y-hidden");
});
