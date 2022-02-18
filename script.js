const container = document.querySelector("#container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    }
};

makeRows(16, 16);

const divs = document.querySelectorAll(".grid-item");

function hoverEffect() {
    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            //let randomColor = Math.floor(Math.random()*16777215).toString(16);
            div.style['background-color'] = 'black';
        });
    });
};

hoverEffect();

const btnRes = document.querySelector('.btnRes');

function restart() {
    divs.forEach((div) => {
        btnRes.addEventListener('click', () => {
            div.style['background-color'] = 'white';
            });
        });
};

const btnSize = document.querySelector('.btnSize');

function canvasSize() {
    btnSize.addEventListener('click', () => {
        let newGrid = Number(prompt("How big will your next canvas be? (between 4 and 100)"));
        container.innerHTML = '';
        makeRows(newGrid, newGrid);
        if (makeRows()) {
            hoverEffect();
        }
    });
    
}

btnRes.addEventListener('click', restart());
btnSize.addEventListener('click', canvasSize())
