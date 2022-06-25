document.getElementById('container1').style.display = 'block'
document.getElementById('container2').style.display = 'none'
document.getElementById('container3').style.display = 'none'

document.getElementById('layout1').addEventListener('click', function () {
    let container1 = document.getElementById('container1');
    let container2 = document.getElementById('container2');
    let container3 = document.getElementById('container3');

    document.getElementById('layout1').style.backgroundColor = '#606060';
    document.getElementById('layout2').style.backgroundColor = '';
    document.getElementById('layout3').style.backgroundColor = '';

    document.getElementById('layout1').style.color = 'white';
    document.getElementById('layout2').style.color = '';
    document.getElementById('layout3').style.color = '';

    container1.style.display = 'block'
    container2.style.display = 'none'
    container3.style.display = 'none'
})

document.getElementById('layout2').addEventListener('click', function () {
    let container1 = document.getElementById('container1');
    let container2 = document.getElementById('container2');
    let container3 = document.getElementById('container3');

    document.getElementById('layout1').style.backgroundColor = '';
    document.getElementById('layout2').style.backgroundColor = '#606060';
    document.getElementById('layout3').style.backgroundColor = '';

    document.getElementById('layout1').style.color = '';
    document.getElementById('layout2').style.color = 'white';
    document.getElementById('layout3').style.color = '';

    container1.style.display = 'none'
    container2.style.display = 'grid'
    container3.style.display = 'none'
})

document.getElementById('layout3').addEventListener('click', function () {
    let container1 = document.getElementById('container1');
    let container2 = document.getElementById('container2');
    let container3 = document.getElementById('container3');

    document.getElementById('layout1').style.backgroundColor = '';
    document.getElementById('layout2').style.backgroundColor = '';
    document.getElementById('layout3').style.backgroundColor = '#606060';

    document.getElementById('layout1').style.color = '';
    document.getElementById('layout2').style.color = '';
    document.getElementById('layout3').style.color = 'white';

    container1.style.display = 'none'
    container2.style.display = 'none'
    container3.style.display = 'grid'
})