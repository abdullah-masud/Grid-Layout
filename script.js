document.getElementById('container1').style.display = 'block'
document.getElementById('container2').style.display = 'none'
document.getElementById('container3').style.display = 'none'

document.getElementById('layout1').addEventListener('click', function () {
    let container1 = document.getElementById('container1');
    let container2 = document.getElementById('container2');
    let container3 = document.getElementById('container3');

    container1.style.display = 'block'
    container2.style.display = 'none'
    container3.style.display = 'none'
})

document.getElementById('layout2').addEventListener('click', function () {
    let container1 = document.getElementById('container1');
    let container2 = document.getElementById('container2');
    let container3 = document.getElementById('container3');

    container1.style.display = 'none'
    container2.style.display = 'grid'
    container3.style.display = 'none'
})

document.getElementById('layout3').addEventListener('click', function () {
    let container1 = document.getElementById('container1');
    let container2 = document.getElementById('container2');
    let container3 = document.getElementById('container3');

    container1.style.display = 'none'
    container2.style.display = 'none'
    container3.style.display = 'grid'
})