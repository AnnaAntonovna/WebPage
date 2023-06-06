import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';



const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
viewer.grid.setGrid();
viewer.axes.setAxes();

async function loadIfc(url) {
    const model = await viewer.IFC.loadIfcUrl(url);
    viewer.shadowDropper.renderShadow(model.modelID);
}

loadIfc('./DR_2SL_Elevator Sliding Door.ifc');

const params = new URLSearchParams(window.location.search);
  const modelName = params.get('model');
  const modelNameElement = document.getElementById('model-name');
  modelNameElement.textContent = modelName;
