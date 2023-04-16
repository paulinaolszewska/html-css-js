const img=document.querySelector("img.slider");
const txt=document.querySelector("h1.slider");
const dots=[...document.querySelectorAll(".dots span")];
const images=[{img:"images/img1.jpg", text:"Zakhyntos"},{img:"images/img2.jpg", text:"Pier"},{img:"images/img3.jpg",text:"Maledives"}];
let index=0;

const changeDot=()=>{
 const active=dots.findIndex(dot=>dot.classList.contains('active'));
 dots[active].classList.remove('active');
 dots[index].classList.add('active');
 link=document.querySelector('a');
}
const changeSlide=()=>{
  index++;  
  if(index===images.length){
    index=0;
  }
 img.src=images[index].img;
 txt.textContent=images[index].text;
 changeDot();
}
const btnChange=(e)=>{
    clearInterval(idInterval);
    e.target.className==="next"?index++:index--;
    if(index===images.length){
        index=0;
      }else if(index<0){
        index=images.length-1;
      }
      img.src=images[index].img;
     txt.textContent=images[index].text;
    changeDot();
    idInterval=setInterval(changeSlide,2000);

}
let idInterval=setInterval(changeSlide,2000);
document.querySelectorAll("button").forEach(btn=>btn.addEventListener("click",btnChange))