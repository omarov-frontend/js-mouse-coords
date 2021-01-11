const testElement = document.querySelector('#test');
const xElement = document.querySelector('#coords__x');
const yElement = document.querySelector('#coords__y');

testElement.addEventListener('mousemove', function({offsetX, offsetY, target}) {
    xElement.innerHTML = offsetX;
    yElement.innerHTML = offsetY;

    target.classList.add('hovered');
});

testElement.addEventListener('mouseout', function({target}) {
    target.classList.remove('hovered');
});