function myMove(){
    const redDiv = document.getElementById('animate');
    let count = 0;
    let timer= setInterval(movingRight, 1);

    function movingRight(){
        if(count == 350){
            clearInterval(timer);
        } else
        {
            count++;
            redDiv.style.marginLeft = count + 'px';
        }
    }    

}


