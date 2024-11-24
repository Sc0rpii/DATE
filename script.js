function takeDate(){
    const date = document.querySelector('#date').value;
    if (!date) {
        alert("Please select a date.");
        return;
    }
    console.log(date);
    localStorage.setItem('selectDate', date);
     // Naviga alla pagina time.html con la data nella query string
     window.location.href = `./time.html`;
}
function takeTime() {
    const timeInput = document.querySelector('#time').value; // Ottiene il valore dell'orario selezionato

    if (!timeInput) {
        alert("Please select a time."); // Mostra un avviso se non è stato selezionato alcun orario
        return;
    }

    console.log("Selected time:", timeInput); // Mostra l'orario nella console
    localStorage.setItem('selectTime', timeInput);
    // Naviga verso una nuova pagina passando l'orario nella query string
    window.location.href = `./firstplace.html`;
}

// Funzione che gestisce la selezione dell'elemento nella prima pagina
function TakePlace1(element) {
    // Verifica se l'elemento cliccato ha già la classe 'selected'
    const isSelected = element.classList.contains('selected');
    
    // Se l'elemento è già selezionato, la rimuoviamo
    if (isSelected) {
        element.classList.remove('selected');
        localStorage.removeItem('selectedPlace');  // Rimuoviamo la selezione dal localStorage
    } else {
        // Se non è selezionato, rimuoviamo la classe 'selected' da tutti gli altri elementi
        const places = document.querySelectorAll('.place');
        places.forEach(place => {
            place.classList.remove('selected');
        });
        
        // Aggiungiamo la classe 'selected' solo all'elemento cliccato
        element.classList.add('selected');
        
        // Salviamo la selezione nel localStorage
        const placeText = element.querySelector('p').textContent;
        localStorage.setItem('firstPlace', placeText);
    }

    // Ottieni il testo del paragrafo dell'elemento selezionato
    const text = element.querySelector('p') ? element.querySelector('p').textContent : '';
    console.log(text); // Puoi fare quello che vuoi con il testo, ad esempio salvarlo
}

// Funzione che controlla se c'è un elemento selezionato
function checkPlace() {
    const place = document.querySelectorAll(".place");
    let isSelected = false;
    place.forEach(place => {
        if(place.classList.contains('selected')) {
            isSelected = true;
        }
    });

    if (!isSelected) {
        alert("Please select a Place.");
        return;
    }

    // Se è selezionato almeno un elemento, naviga alla pagina
    // Naviga alla pagina corretta
    const currentPath = window.location.pathname.split('/').pop(); // Ottieni solo il nome del file

    if (currentPath === "secondPlace.html") {
        window.location.href = `./ready.html`;
    } else {
        window.location.href = `./secondPlace.html`;
    }
}

// Funzione che gestisce la selezione nella seconda pagina
function TakePlace2(element) {
    // Verifica se l'elemento cliccato ha già la classe 'selected'
    const isSelected = element.classList.contains('selected');
    
    // Se l'elemento è già selezionato, la rimuoviamo
    if (isSelected) {
        element.classList.remove('selected');
        localStorage.removeItem('selectedPlace');  // Rimuoviamo la selezione dal localStorage
    } else {
        // Se non è selezionato, rimuoviamo la classe 'selected' da tutti gli altri elementi
        const places = document.querySelectorAll('.place');
        places.forEach(place => {
            place.classList.remove('selected');
        });
        
        // Aggiungiamo la classe 'selected' solo all'elemento cliccato
        element.classList.add('selected');
        
        // Salviamo la selezione nel localStorage
        const placeText = element.querySelector('p').textContent;
        localStorage.setItem('secondPlace', placeText);
    }

    // Ottieni il testo del paragrafo dell'elemento selezionato
    const text = element.querySelector('p') ? element.querySelector('p').textContent : '';
    console.log(text); // Puoi fare quello che vuoi con il testo, ad esempio salvarlo
}

// Dati finali appuntamento
function populateReadyPage(){
    //Variabili
    let firstPlace = localStorage.getItem("firstPlace");
    let secondPlace = localStorage.getItem("secondPlace");
    let selectDate = localStorage.getItem("selectDate");
    let selectTime = localStorage.getItem("selectTime");
    

    //HTML ELEMENTS
    const date_time = document.querySelector("#info");
    const divImgContainer = document.querySelector("#readyIMG");

    let place = document.createElement("div");
    place.classList.add("place")

    let divIMG1 = document.createElement("div");
    divIMG1.classList.add("img");
    let img1 = document.createElement("img");
    img1.setAttribute("src", `./img/${firstPlace}.jpg`);
    let divText1 = document.createElement("div");
    divText1.classList.add("text");
    let p1 = document.createElement("p");

    p1.textContent = `${firstPlace}`;

    divImgContainer.appendChild(place);
    place.appendChild(divIMG1);
    place.appendChild(divText1);
    divText1.appendChild(p1);
    divIMG1.appendChild(img1);

    let divIMG2 = document.createElement("div");
    divIMG2.classList.add("img");
    let img2 = document.createElement("img");
    img2.setAttribute("src", `./img/${secondPlace}.jpg`);
    let divText2 = document.createElement("div");
    divText2.classList.add("text");
    let p2 = document.createElement("p");

    p2.textContent = `${secondPlace}`;

    divImgContainer.appendChild(place);
    place.appendChild(divIMG2);
    place.appendChild(divText2);
    divText2.appendChild(p2);
    divIMG2.appendChild(img2);


    


    //Insert
    //Info about the date
    date_time.textContent = `${selectDate} AT ${selectTime}`;



}


// Richiama questa funzione quando la pagina è caricata
if (window.location.pathname.includes("ready.html")) {
    populateReadyPage();  // Esegui solo su 'ready.html'
}
