const container = document.querySelector("#container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    }
}

makeRows(16, 16);

const divs = document.querySelectorAll(".grid-item");

divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        //let randomColor = Math.floor(Math.random()*16777215).toString(16);
        div.style['background-color'] = 'black';
    })
})


const btn = document.querySelector('button');

function restart() {
    divs.forEach((div) => {
        btn.addEventListener('click', () => {
            div.style['background-color'] = 'white';
            });
        });
};


btn.addEventListener('click', restart())

