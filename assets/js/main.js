var next = document.getElementById('next');
var prev = document.getElementById('prev');

var dot = document.getElementsByClassName('dot');
var slideItem = document.getElementsByClassName('slide-item');
var index = 0;
var max = slideItem.length - 1;

next.addEventListener('click', function () {
    showSlide(index + 1);
})

prev.addEventListener('click', function () {
    showSlide(index - 1);
})



function showSlide(id){

    if(id>max){
        id=0;
    }else if(id<0){
        id=max;
    }

    for(var i=0;i<=max;i++){
        slideItem[i].classList.remove('show');
        dot[i].classList.remove('active');
    }
    slideItem[id].classList.add('show');
    dot[id].classList.add('active');

    index=id;
}


document.onkeydown = function(e){
    var k =e.keyCode;
    console.log(k);
    if(k==39){
        next.click();
    }else if(k==37){
        prev.click();
    }
}
