// Making navbar sliding from left while clicking on hamburger menu.

const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar)
{
    bar.addEventListener('click',()=> {
        nav.classList.add('active');
    })
}

// Closing navbar in responsive site.
if(close)
{
    close.addEventListener('click',()=> {
        nav.classList.remove('active');
    })
}