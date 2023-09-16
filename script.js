const sliders = document.querySelectorAll('.slide');
console.log(sliders);
sliders.forEach(slider => {
    slider.addEventListener('click', () => {
        clearClick();
        slider.classList.add('active');
    })
})

function clearClick() {
    sliders.forEach(slider => {
        slider.classList.remove('active');
    })
}