import "./styles.css";

console.log('xdd');

const content = document.getElementById('content');
const home = document.getElementById('home');
const menu = document.getElementById('menu');
const about = document.getElementById('about');

content.innerHTML = `
<h2>Witaj w</h3>
<h1>Papa Jones Pizzeria!</h1>
<h3>Najlepszej pizzerii neapolitańska w Wielkopolsce</h3>
`;


menu.addEventListener('click', () => {
    content.innerHTML = `
        <div class="dish">
            <h3>Margherita</h3>
            <h4>sos pomidorowy, mozzarella</h4>
        </div>
        <div class="dish">
            <h3>Margherita</h3>
            <h4>sos pomidorowy, mozzarella</h4>
        </div>
        <div class="dish">
            <h3>Margherita</h3>
            <h4>sos pomidorowy, mozzarella</h4>
        </div>
        <div class="dish">
            <h3>Margherita</h3>
            <h4>sos pomidorowy, mozzarella</h4>
        </div>
        <div class="dish">
            <h3>Margherita</h3>
            <h4>sos pomidorowy, mozzarella</h4>
        </div>
        <div class="dish">
            <h3>Margherita</h3>
            <h4>sos pomidorowy, mozzarella</h4>
        </div>
    `;
});

about.addEventListener('click', () => {
    content.innerHTML = `
        <h2>Harmonogram</h2>
        <ul>
            <li>Poniedziałek - zamknięte</li>
            <li>Wtorek - od 12 do 22</li>
            <li>Środa - od 12 do 22</li>
            <li>Czwartek - od 12 do 22</li>
            <li>Piątek - od 12 do 2</li>
            <li>Sobota - od 12 do 2</li>
            <li>Niedziela - od 12 do 18</li>
        </ul>
    `;
});

home.addEventListener('click', () => {
    content.innerHTML = `
        <h2>Witaj w</h3>
        <h1>Papa Jones Pizzeria!</h1>
        <h3>Najlepszej pizzerii neapolitańska w Wielkopolsce</h3>
    `;
});