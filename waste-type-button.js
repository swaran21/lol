const wasteTypeButton = document.getElementById("waste-type-button");
const wasteTypeList = document.getElementById("waste-type-list");
const submitWasteType = document.getElementById("submit-waste-type");

wasteTypeList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        wasteTypeButton.innerText = event.target.innerText;
        wasteTypeList.classList.add("hidden");
    }
});

submitWasteType.addEventListener("click", () => {
    const wasteType = wasteTypeButton.innerText;
    const phoneNumber = document.getElementById("phone").value;

});