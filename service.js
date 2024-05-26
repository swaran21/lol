const wasteTypeButton = document.getElementById("waste-type-button");
const wasteTypeList = document.getElementById("waste-type-list");

wasteTypeButton.addEventListener("click", () => {
    wasteTypeList.style.display = "block";
});

wasteTypeList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        wasteTypeButton.innerHTML = event.target.innerHTML;
        wasteTypeList.style.display = "none";
    }
});

document.addEventListener("click", (event) => {
    if (!event.target.closest("#problem-box")) {
        wasteTypeList.style.display = "none";
    }
});
