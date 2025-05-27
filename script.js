const imgs = document.querySelectorAll('.headr-slider ul img');
const pre_btn = document.querySelector('.control_Prev');
const next_btn = document.querySelector('.control_next');

let p = 0;

function changeSlide(){
    for(let i = 0; i < imgs.length; i++){
        imgs[i].style.display = 'none';
    }
    imgs[p].style.display = 'block';
}

changeSlide();

pre_btn.addEventListener('click', (e)=>{
    if(p > 0){
        p--;
    }
    else{
        p = imgs.length -1;
    }
    changeSlide();
})
    next_btn.addEventListener('click', (e)=>{
    if(p < imgs.length -1){
        p++;
    }
    else{
        p = 0;
    }
    changeSlide();
})

const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer){

    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}