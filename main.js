let element = document.createElement('div');
let elementH1 = document.createElement('h1');

elementH1.innerHTML = "RESERVIS - KAROL TEST";
 
elementH1.addEventListener('mouseover', () => {
    elementH1.classList.add('color');
});

elementH1.addEventListener('mouseleave', () => {
    elementH1.classList.remove('color');
});

element.appendChild(elementH1);
document.body.appendChild(element);