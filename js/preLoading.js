const progress = document.querySelector(".progress");
const percent = document.querySelector(".percent");

let count = 4;
let x = 16;

const loading =setInterval(animate);

function animate () {
    if (count == 100 && x == 400) {
        clearInterval(loading);
        document.querySelector('.loadingScreen').style.display = 'none';

    }else {
        x += 4;
        count++;
        progress.style.width = `${x}px`;
        percent.innerText = `${count}%`;
    }
}
