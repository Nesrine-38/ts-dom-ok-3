let input = document.querySelector<HTMLInputElement>('#name');
let para = document.querySelector<HTMLParagraphElement>('.paragraphe')

let bouton = document.querySelector<HTMLButtonElement>('#bouton').addEventListener("click", ()  => {
    let value = input.value;
    para.textContent = value;
});

document.addEventListener('DOMContentLoaded', function() {

    let zero = document.querySelector<HTMLSpanElement>('.zero');
  
    input.addEventListener('input', function() {
        let value = input.value;
      zero.textContent = value.length.toString();
    });
  });
  


