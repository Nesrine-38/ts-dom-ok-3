let counter =0;

document.querySelector('.plus').addEventListener("click", function(){
    counter++;
    console.log(counter);
    let str = counter. toString();
    document.querySelector('.span').innerHTML = str;
});
document.querySelector('.moins').addEventListener("click", function(){
    counter--;
    console.log(counter);
    let str = counter. toString();
    document.querySelector('.span').innerHTML = str;
});

/*
function changecounter(increment:boolean){
    if(increment){
        counter++;

    }else{
        counter--;
    }
}

function changecounter(value:number){
  counter+= value
}
*/

