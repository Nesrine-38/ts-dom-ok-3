let square=document.querySelector('#square')
 document.querySelector('#playground').addEventListener('click', function(event){

    let X = event.offsetX;
    console.log(X);
    let Y = event.offsetY;
    console.log(Y);

    square.style.left = X + 'px';
    square.style.top = Y +'px';
   
});