const current = document.querySelector('#big');

const items = document.querySelectorAll('.items');

items.forEach(item => {
    item.addEventListener('click', openUp);
    
});

function openUp(e){
    removeOpacity();

    current.src = e.target.src ;
    e.target.style.opacity = 0.7;
    
}

function removeOpacity(){
    items.forEach(item => {
        item.style.opacity = 1;
        
    });
    
}