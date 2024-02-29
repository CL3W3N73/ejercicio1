
let people = [];

// Función para agregar una persona a la lista
function addPerson() {
    const personName = document.getElementById('personName').value;
    if (personName) {
        people.push(personName);
        document.getElementById('peopleList').innerHTML += `<li>${personName}</li>`;
        document.getElementById('personName').value = '';
    }
}

// Función para realizar el sorteo y mostrar al ganador
function drawWinner() {
    if (people.length > 0) {
        const randomIndex = Math.floor(Math.random() * people.length);
        const winner = people[randomIndex];
        alert(`El ganador es: ${winner}`);
    } else {
        alert('Agrega al menos una persona para poder sortear.');
    }
} 
