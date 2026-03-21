// example 1
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    document.getElementById("myParagraph").textContent =
      "This is changed Paragraph";
  });

// example 2
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let cityList = document.getElementById("citiesList");
    cityList.firstElementChild.classList.add("highlight");
  });

// example 3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeOrder = document.getElementById("coffeeType");
  coffeOrder.textContent = "Espresso";
  coffeOrder.style.backgroundColor = "Brown";
  coffeOrder.style.padding = "5px";
});

// example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Egg";
  document.getElementById("shoppingList").appendChild(newItem);
});

// example 5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let removableItem = document.getElementById("taskList");
    removableItem.lastElementChild.remove();
  });
