




let counter=document.querySelector('.counter');
let ct=(function(){
    let number=0;
    return function(){
        number++;
        return number;
    }
})();
document.querySelector('button').addEventListener("click",()=>{
    counter.innerHTML=ct();
})