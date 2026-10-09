document.querySelector('.schedule-header').addEventListener('click', function() {
    const section = document.querySelector('.schedule-section');
    const content = document.querySelector('.schedule-content');

    section.classList.toggle('open');

    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
});

document.querySelectorAll('.player').forEach(p => {
    p.addEventListener('click', () => {
        const id = p.dataset.player;
        // load stats for player id
    });
});

function addDot(xPercent, yPercent) {
    const layer = document.querySelector('.xg-dot-layer');

    const dot = document.createElement('div');
    dot.classList.add('xg-dot');

    dot.style.left = xPercent + "%";
    dot.style.top = yPercent + "%";

    layer.appendChild(dot);
}

document.addEventListener("click", (e) => {
    if (e.target.closest(".sub-player")) {
        const id = e.target.closest(".sub-player").dataset.id;
        activePlayer = id;
        openLeftBox();
        loadGameStats();
    }
});

const gameSelector = document.getElementById("game-selector");
const gameData = document.getElementById("game-data");

gameSelector.addEventListener("change", () => {

        const selectedGame = gameSelector.value;

        gameData.innerHTML = `
        <h2>${gameSelector.options[gameSelector.selectedIndex].text}</h2>
        <p>Game data will appear here.</p>
    `;
    });



