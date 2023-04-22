document.querySelector('.phone-meno').addEventListener('click',()=>{
    document.querySelector('aside').style.display='block';
})

document.querySelector('.close').addEventListener('click',()=>{
    document.querySelector('aside').style.display='none'
})

document.querySelector('.theme-toggler').addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');

    document.querySelector('.theme-toggler i:nth-child(1)').classList.toggle('active');
    document.querySelector('.theme-toggler i:nth-child(2)').classList.toggle('active');
})