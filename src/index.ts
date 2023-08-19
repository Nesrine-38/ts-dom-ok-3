
function changecouleur() {
    document.getElementById('para2').style.color = '#0000FF';
  }
  changecouleur();

  function border(){
    document.getElementById('section2').style.borderStyle ='dotted';
}
border();

let colorful = document.querySelector<HTMLElement>('#section2 .colorful');
colorful.style.background = 'orange';

let titre = document.querySelector<HTMLElement>('#section2 h2');
titre.style.fontStyle = 'italic';

let none = document.querySelector<HTMLElement>('p .colorful');
none.style.display = 'none';

document.getElementById('para2').textContent='modified by JS';

let lien = document.querySelector<HTMLAnchorElement>('a');
lien.href = 'http://www.m2iformation.fr';

let BIG = document.querySelector<HTMLElement>('#section2 h2');
BIG.classList.add('big-text');



















