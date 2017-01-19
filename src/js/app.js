
document.addEventListener ('DOMContentLoaded', function () {
    logoslider()
    menuIcon.addEventListener('click', function() {
        this.parentNode.classList.toggle('active');
        this.classList.toggle('active');

    })
})
