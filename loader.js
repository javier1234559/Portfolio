var loadBegin =  document.getElementById('reload-animation');

window.addEventListener('load',()=>{
    loadBegin.classList.add('fadeOut-loader');
    loadBegin.addEventListener('transitionend', () => loadBegin.remove());
    // console.log(loadBegin);
});


    