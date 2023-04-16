console.log(typeof "tekst");
let userSurname="Smith";
userSurname="Kowalski";
const surname="Nowak";
// surname="Kowalski";
const arrayExample=["element1"];
arrayExample[0]="el2";
console.log(arrayExample);
// arrayExample=["el3"];

numberEl=13;
console.log(numberEl.toString(16));
console.log(numberEl.toString(2));
const name="Anna";
const welcome=`Witaj ${name} wśród naszych "top" klientów`;
console.log(welcome);
console.log(200..toString(16));
const names=["Anna","Marta"];
names.unshift("Ela");
const names2=["Maria","Ola"];
const name3=[...names,...names2];

// DOM-pobieranie przycisku
// 
// const btns=document.getElementsByTagName("button");
const btns=document.querySelectorAll("button");
btns2=[...btns];
console.log(btns);
// btns.style.color="blue";
btns.forEach(function(btn){
    btn.style.color="blue";
})




const btn=document.querySelector("#btn");
const txt=btn.textContent;
btn.textContent="Nie klikaj mnie!!!";
// btn.style.backgroundColor="red";
console.log(txt);
// const div=document.querySelector("#container");
document.querySelector("#container").innerHTML=`<p>Wejdź na stronę <a href="https://google.com" target="_blank">Google</a></p>`;
const handleClick=()=>{
    console.log("click");
    btn.classList.toggle("red");
}

btn.addEventListener("click", handleClick);
function showScroll() {
    console.log("skrol");
  }
  
  const addText=(e)=>{
    // this.textContent += ":)";
    console.log(e);
    e.target.textContent += ":)";
    txtWelcome.classList.toggle("red");
  }
  
  const txtWelcome=document.querySelector("h1");
  txtWelcome.addEventListener("click",addText);
const divElement = document.createElement("div");
divElement.textContent = "Ostatni DIV";
divElement.style.backgroundColor = "red";
divElement.style.height = "100px";
document.body.appendChild(divElement);
  
