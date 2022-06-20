const winHeight = window.innerHeight;
const mainBlock = document.querySelector('.panelCon');

document.addEventListener('DOMContentLoaded', () => {
    // mainBlock.style.height = winHeight + 'px';
    document.body.style.height = (mainBlock.scrollHeight) + 'px';
    // mainBlock.style.bottom = mainBlock.scrollHeight + 'px'
    console.log(mainBlock.scrollHeight)
});

window.addEventListener('resize', function (event) {
    mainBlock.style.height = window.innerHeight; + 'px';
});

window.addEventListener('scroll', () => {
    mainBlock.style.bottom = window.pageYOffset * -1 + 'px'
});