    export function initSide(){
        let images = 
        [   'url("../assets/img/jpg/gtavi.jpg")',          
            'url("../assets/img/jpeg/thumb-1920-1322922.jpeg")',
            'url("../assets/img/jpg/cyberpunk-2077.jpg")'
        ];


        let sideIMG = document.querySelector('.img-side');

        function showImage(){
            let rdm = Math.floor(Math.random() * images.length)
            let img = images[rdm];  
            sideIMG.style.backgroundImage = img;
            
            console.log(images);
            
        }
        setInterval(showImage, 5000)
    }