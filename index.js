import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';


const categoryFilter = document.getElementById("category-filter");

const cards = document.querySelectorAll(".card");
const cardsArray = Array.from(cards);

const templateCard = cards[0];

const categoryElement = (cards[0]).querySelector(".category");
console.log(categoryElement);

console.log(categoryElement.textContent);

console.log(categoryFilter.value);


categoryFilter.addEventListener("change", function () {
  // Your code to filter the cards goes here
  const cards = document.querySelectorAll(".card");
    const selectedCategory = categoryFilter.value;

    console.log(categoryFilter.value)
    //console.log(categoryFilter.textContent)

    cards.forEach(function (card) {
      try{
      card.classList.remove("hidden");
      }
      catch{}
      if (
        selectedCategory === "" ||
        card.querySelector(".category").textContent == selectedCategory
      ) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
});


const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
viewer.grid.setGrid();
viewer.axes.setAxes();

async function loadIfc(url) {
    await viewer.IFC.setWasmPath("../../../");
    const model = await viewer.IFC.loadIfcUrl(url);
    viewer.shadowDropper.renderShadow(model.modelID);
}

loadIfc('your/IFC/path/model.ifc');

const params = new URLSearchParams(window.location.search);
  const modelName = params.get('model');
  const modelNameElement = document.getElementById('model-name');
  modelNameElement.textContent = modelName;
