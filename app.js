// Generate hexNumber first //
const hexNumuber = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
// add Btn Button
const hexBtn = document.querySelector('.hexBtn');

// create a variable where color is to define exapple body //

const bodybgc = document.querySelector('body');

const hex = document.querySelector('.hex');

hexBtn.addEventListener('click',getHex);

function getHex(){
    let hexCol = '#';
    for(let i=0; i<6;i++){
        let random = Math.floor(Math.random()*hexNumuber.length);
        console.log(random)
        hexCol +=hexNumuber[random];
        console.log(hexCol)

    }

    bodybgc.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;
}