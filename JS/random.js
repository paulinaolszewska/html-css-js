const divElement = document.createElement('div')
divElement.style.marginTop = "20px"
document.body.appendChild(divElement);
let divinations=JSON.parse(localStorage.getItem("divinations"))
divinations==null?divinations=['Pojedziesz na koniec świata', 'Wygrasz w lotka', 'Nic fajnego :p']:divinations
const handleAdd = e => {
	e.preventDefault()
  const input=document.querySelector('input')
	newDivination = input.value
  for(let i=0;i<divinations.length;i++){
    if(divinations[i]==newDivination){
      input.value=""
      return
    }
  }
	divinations.push(newDivination)
  localStorage.setItem("divinations",JSON.stringify(divinations))
  input.value=""

	
}
const handleShow = () => {
 const nrEl=Math.floor(Math.random()*divinations.length)
 divElement.textContent=divinations[nrEl]
 setTimeout(()=>divElement.textContent="",3000)
}
const handleShowDivinations = () => {
divElement.textContent=divinations.join(", ")
setTimeout(()=>divElement.textContent="",3000)
}
document.querySelector('.add').addEventListener('click', handleAdd)
document.querySelector('.show').addEventListener('click', handleShow)
document.querySelector('.showDivinations').addEventListener('click', handleShowDivinations)
document.querySelector('.reset').addEventListener('click', e => {
	e.preventDefault()
	divinations.length = 0
  localStorage.removeItem("divinations")
})