let bouton1 = document.querySelector('.bouton');
let ul = document.querySelector('.liste');
let input =document.querySelector('#name');

let list:string[] = ['valeur 1', 'valeur 2', 'valeur 3'];
displaylist(list);
bouton1.addEventListener('click', () =>{
    list.push(input.value);
    displaylist(list);
});
  
function displaylist(list:string[]){
    ul.innerHTML='';
    for (const item of list) {
        const li = document.createElement("li");
        li.textContent=item
        ul.appendChild(li);
        
    }
}











function addElement(){
    const newli = document.createElement("li");
    let newContent = document.createTextNode('a propos');
    newli.appendChild(newContent);
   ul.appendChild(newli);
}