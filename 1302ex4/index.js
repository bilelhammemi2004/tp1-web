document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('#myListe li');

    items.forEach(item => {
        item.addEventListener('click', function() {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.style.color = "#" + randomColor;

            this.style.animation = 'jump 0.3s';
            this.addEventListener('animationend',()=>{this.style.animation = '';});
        });
    });
});