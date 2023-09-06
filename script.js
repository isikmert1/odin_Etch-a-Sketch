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