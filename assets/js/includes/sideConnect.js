export function initSide() {
    let imgSide = document.querySelector(".img-side");
    if (!imgSide) return;
    
    let currentImageIndex = null;
    let rdm = null;

    let images = [
        '../assets/img/jpg/gtavi.jpg',
        '../assets/img/jpeg/thumb-1920-1322922.jpeg',
        '../assets/img/jpg/cyberpunk-2077.jpg',
        
    ];

    function showImage() {
        while (rdm === currentImageIndex) {
            rdm = Math.floor(Math.random() * images.length);
        }
        currentImageIndex = rdm;
            imgSide.style.backgroundImage = `url(${images[currentImageIndex]})`;
        }

    // Immediate change
    showImage();

    // Change every 8 secs
    setInterval(showImage, 8000);
}