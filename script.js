function createGridElement(gridCount) {
    const div = document.createElement('div');
    div.classList.add('gridElement');
    div.style.width = `calc(var(--grid-container-size) / ${gridCount})`;
    div.style.height = `calc(var(--grid-container-size) / ${gridCount})`;
    return div;
}

function addGrid(gridCount, gridElement) {
    const gridContainer = document.querySelector(".gridContainer");
    gridContainer.innerHTML = '';

    for (let i = 0; i < gridCount; i++) {
        const row = document.createElement('div');
        gridContainer.appendChild(row);
        for (let j = 0; j < gridCount; j++) {
            const div = createGridElement(gridCount);
            row.appendChild(div);
            gridElement.push(div);
        }
    }
}

function clearChanges(gridElement) {
    gridElement.forEach((element) => {
        element.style.backgroundColor = '';
    })
}

function eraseChanges(gridElement) {
    gridElement.forEach((element) => {
        element.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = '';
        });
    })
}

function setPen(gridElement) {
    gridElement.forEach((element) => {
        element.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = 'black';
        });
    })
}

function setRainbowPen(gridElement) {
    
    gridElement.forEach((element) => {
        element.addEventListener("mouseover", (e) => {
            const randomValue = () => Math.floor(Math.random() * 200);
            const randomRed = randomValue();
            const randomGreen = randomValue();
            const randomBlue = randomValue();
            e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
        });
    })
}

function changeGridSize(gridElement) {
    const gridSizeSelect = document.querySelector('#gridSize');
    gridSizeSelect.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        let gridCount;
        switch (selectedValue) {
            case 'small':
                gridCount = 16;
                break;
            case 'medium':
                gridCount = 32;
                break;
            case 'large':
                gridCount = 64;
                break;
            case 'xlarge':
                gridCount = 96;
                break;
            default:
                gridCount = 16; 
        }
        addGrid(gridCount, gridElement);
        resetButtonsToDeactive();
    });
}

function toggleButtonState(buttons) {
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            buttons.forEach((btn) => {
                btn.classList.remove("btnActive");
                btn.classList.add("btnDeactive");
            });

            e.target.classList.remove("btnDeactive");
            e.target.classList.add("btnActive");
        });
    });
}

function resetButtonsToDeactive() {
    btnDeactive.forEach((btn) => {
        btn.classList.remove("btnActive");
        btn.classList.add("btnDeactive");
    });
}

const clearBtn = document.querySelector(".clearBtn");
const eraseBtn = document.querySelector(".eraseBtn");
const penBtn = document.querySelector(".penBtn");
const rainbowBtn = document.querySelector(".rainbowBtn");
const btnDeactive = document.querySelectorAll(".btnDeactive");

const initialGridSize = 16;
const gridElement = [];

clearBtn.addEventListener("click", () => clearChanges(gridElement));
eraseBtn.addEventListener("click", () => eraseChanges(gridElement));
penBtn.addEventListener("click", () => setPen(gridElement));
rainbowBtn.addEventListener("click", () => setRainbowPen(gridElement));

addGrid(initialGridSize, gridElement);
changeGridSize(gridElement);
toggleButtonState(btnDeactive);

