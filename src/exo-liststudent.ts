interface Student {
    name:string;
    firstName:string;
    promo:number;
    picture:string;
}

let students:Student[] = [
    {firstName: 'Student 1', name: 'Name 1', promo: 2023, picture: 'https://cdn.pixabay.com/photo/2022/06/29/10/38/job-7291427_1280.png'},
    {firstName: 'Student 2', name: 'Name 2', promo: 2023, picture: 'https://cdn.pixabay.com/photo/2022/06/29/10/38/job-7291427_1280.png'},
    {firstName: 'Student 3', name: 'Name 3', promo: 2022, picture: 'https://cdn.pixabay.com/photo/2022/06/29/10/38/job-7291427_1280.png'},
    {firstName: 'Student 4', name: 'Name 4', promo: 2022, picture: 'https://cdn.pixabay.com/photo/2022/06/29/10/38/job-7291427_1280.png'},
];
let selected: Student | null = null;
let firstname =document.querySelector<HTMLElement>('#firstname');
let name = document.querySelector<HTMLElement>('#name');
let promo = document.querySelector<HTMLElement>('#promo');
let picture =document.querySelector<HTMLElement>('#picture');


const target = document.querySelector<HTMLElement>('#target');
displayStudent(students);


function displayStudent(students:Student[]) {
    target.innerHTML='';

    for (const item of students) {
        const col = document.createElement('div');
        col.classList.add('col-sm-6', 'col-md-3');

        const div = document.createElement('div');
        div.classList.add('card');


        const cardBody = document.createElement('div');
        div.classList.add('card-body');

        const h3 = document.createElement('h3');
        h3.classList.add('card-title');

        const img = document.createElement('img');
        img.classList.add('card-img-top');

        const p = document.createElement('p');
        p.classList.add('card-text');

        if(selected === item) {
            div.classList.add('bg-primary');
        }
        div.addEventListener('click', () => {
            if( selected === item) {
                selected = null;
                
            } else {
                selected = item; // assure l'affichage
            }
            displayStudent(students);
        });

        h3.textContent = item.name +' '+item.firstName;
        img.src = item.picture;
        img.width = 200;
        p.textContent = 'Promo : '+item.promo
 
        cardBody.appendChild(h3);
        cardBody.appendChild(p);
        

        col.appendChild(div);

        div.appendChild(img);
        div.appendChild(cardBody);
        
        target.appendChild(col);

}
if(selected) {
    firstname.value = selected.firstName;
    promo.value = String(selected.promo);
    picture.value = selected.picture;
    name.value = selected.name;
} else {
    form.reset();
}
}
let form =document.querySelector<HTMLFormElement>("form");
form.addEventListener('submit', (event) => {
    event.preventDefault();




const newstudents:Student = {
    firstName:firstname.value,
    name: name.value,
    promo: Number(promo.value),
    picture: picture.value
  };
  if(!selected) {
    students.push(newstudents);
} else {
    Object.assign(selected, newstudents);
}

displayStudent(students);
});



