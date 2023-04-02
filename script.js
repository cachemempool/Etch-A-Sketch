
const container = document.querySelector('#container');
const button = document.querySelector('#start');

//button to start the project. disappears after one run
const number = button.addEventListener('click', () => {
    let input = prompt('Enter number of squares per side for the new grid. Maximum is 100', 'Maximum is 100');
    rows = input;
    columns = input;

    //creates boxes
    for (i = 1; i <= rows; i++) {
        let row = `row${i}`;
        let col = "col0";
        const firstRow = document.createElement('div');
        firstRow.classList.add(`container${i}`, "container");
        container.appendChild(firstRow);
        for (j = 1; j <= rows; j++) {
            let col = `col${j}`;
            let location = row + col;
            const box = document.createElement('div');
            box.classList.add(location, "box");
            firstRow.appendChild(box);
            // box.textContent = `r$[i}c${j}`; ////used to help debug
        }
    };

    //changes box as mouse is hovered
    const boxes = document.querySelectorAll('.box');
    boxes.forEach ( box => {
        box.addEventListener ('mouseover', () => {
            box.setAttribute('style','color: white; background: blue;');
            // box.textContent = "changed";
        });
        box.addEventListener ('mouseout', () => {
            box.setAttribute('style','color: blue; background: aquamarine;');
            // box.textContent = "changed";
        });
    });

    //removes button
    button.setAttribute('style','display: none');
});

