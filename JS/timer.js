// na starcie aplikacji pobieramy wszystkie potrzebne elementy DOM do zmiennych poprzez querySelector (HTMLelement) lub querySelectorAll (NodeList)
const start=document.querySelector("#start");
const reset=document.querySelector("#reset");
const timerTxt=document.querySelector("#timerTxt");

let time=0;
// inicjalizujemy flagę, która jest niezbędna do zmiany tekstu na przycisku, zadziała jak przełącznik
let active=true;
const stoper=()=>{
    // console.log (zaloguj w konsoli) do debbugowania
    console.log("click");
    if(active){
     active=false;   
    //  właściwość text content służy do zmiany wyswietlanego tekstu wewnątrz elementu
    start.textContent="Pause";
    // set interval to funkcja czasu, która jako pierwszy parametr przyjmuję funkcję-callback, która ma być wywoływana co pewien interwał czasu, a drugim parametrem jest właśnie interwał czasu. Przypisanie setInterval do zmiennej jest konieczne, jeśli będziemy chcieli tę funkcję wyłączyć 
    id=setInterval(timer,10);
    }else{
        active=true;
        start.textContent="Start";
        clearInterval(id);
    }
};
const timer=()=>{
    time++;
    // metoda toFixed zaokrągla wynik do 2 miejsc po przecinku
    timerTxt.textContent=(time/100).toFixed(2);
};
const stop = () => {
    // clear interval jako parametr przyjmuje funkcję setInterval, która została zaimplementowana wyżej
    clearInterval(id);
    timerTxt.textContent = "---";
    start.textContent = "Start";
    active = true;
    time = 0;
  };

//   addEventListener to ustawienie nasłuchiwania na zdarzenie, w tym wypadku przyciski nasłuchują na zdarzenie kliknięcia
start.addEventListener("click", stoper);
reset.addEventListener("click",stop);