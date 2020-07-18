//get html tegs
let img = document.querySelectorAll('.picture');
let butLeft=document.getElementById('leftBut');
let butRight=document.getElementById('rightBut');

//func next img and back img
let endMass = img.length - 1;
let nextImg =() =>{
    for(let i=0; i<img.length;i++){
        if(img[i].classList.contains('dispNon')){
                if(i == endMass){ 
                    img[endMass].classList.remove('dispNon');
                    i = 0;
                    img[i].classList.add('dispNon');
                    break;
                }else{
                    img[i].classList.remove('dispNon');
                    i++;
                    img[i].classList.add('dispNon');
                    console.log(img[i].classList);
                    console.log(i);
                    break;
                }
        }
    }
}
let predImg =() =>{
    for(let i=0; i<img.length;i++){
        if(img[i].classList.contains('dispNon')){
            if(i == 0){
                img[i].classList.remove('dispNon');
                i =  endMass;
                img[i].classList.add('dispNon');
                break;
            }else{
                img[i].classList.remove('dispNon');
                i--;
                img[i].classList.add('dispNon');
                console.log(img[i].classList);
                console.log(i);
                break;
            }
            
        }
    }
}

//func click
butRight.addEventListener('click',nextImg);
butLeft.addEventListener('click',predImg);
console.log(img);
console.log(img.length);
