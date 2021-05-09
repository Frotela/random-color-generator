function changeBackground(){
    
    let background = document.getElementsByTagName('body')[0];

    background.style = `background-color: rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`

}

const randomNumber = () => Math.random() * 255;