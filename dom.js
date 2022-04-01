const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const para = document.createElement('p');
para.textContent="Hey I'm red!";
container.appendChild(para);

const smallHeader=document.createElement('h3');
smallHeader.textContent="Hey I'm a blue H3";
smallHeader.setAttribute('style','color:blue');
container.appendChild(smallHeader);


const newDiv= document.createElement('div');
newDiv.setAttribute('style','background-color:pink;border-style:solid; border-color:black')
const bigHeader=document.createElement('h1');
bigHeader.textContent="I'm in a div";
const par=document.createElement('p');
par.textContent="ME TOO!";
newDiv.appendChild(bigHeader)
newDiv.appendChild(par)
container.appendChild(newDiv)

const btn = document.querySelector('#btn');
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});