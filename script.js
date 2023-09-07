const gridContainer = document.querySelector(".gridContainer");

function addGrid(gridCount) {
    for (let i = 0; i < gridCount; i++) {
        const row = document.createElement('div');
        gridContainer.appendChild(row);
        for (let j = 0; j < gridCount; j++) { 
            const div = document.createElement('div');
            div.classList.add('gridElement');
            div.style.width = `${500 / gridCount}px`;
            div.style.height = `${500 / gridCount}px`;
            row.appendChild(div);
        }
    }
}

addGrid(16);

const gridElement = document.querySelectorAll(".gridElement");
const eraserBtn = document.querySelector(".eraserBtn");
const gridSizeSelect = document.querySelectorAll('#gridSize');

gridElement.forEach((element) => {
    element.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "black";
    })
})

eraserBtn.addEventListener("click", clearChanges)

function clearChanges() {
    gridElement.forEach((element) => {
        element.style.backgroundColor = "white";
    })
}

//TODO

function changeGridSize() {
    gridSizeSelect.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        console.log('Selected value:', selectedValue);
    });
}
