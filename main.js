const testElement = document.querySelector('#test');
const offX = document.querySelector('#offx');
const offY = document.querySelector('#offy');

testElement.addEventListener('mousemove', function({ offsetX, offsetY, target }) {
    offX.innerHTML = offsetX;
    offY.innerHTML = offsetY;

    target.classList.add('hovered');
});

testElement.addEventListener('mouseout', function( {target} ) {
    target.classList.remove('hovered');
});