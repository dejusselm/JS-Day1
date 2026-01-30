let choice;
let refreshStarted = false;
let players;

document.getElementById("ipButton").addEventListener("click", function (e) {
    e.preventDefault();
    const data = new FormData(document.getElementById("form"));
    localStorage.setItem("IP", data.get("ip"));
    loadPlayers();
});

document.querySelector("select").addEventListener("change", function (e) {
    choice = e.target.value;
    if (choice) {
        loadPlayerStats(choice);
        if (!refreshStarted) {
            setInterval(() => {
                loadPlayers();
                loadRanking();
            }, 2000);
        };
    }
});

async function loadPlayers() {
    const ip = localStorage.getItem("IP");
    try {
        const response = await fetch(`http://${ip}/api/listPlayers`);
        if (!response.ok) {
            throw new Error("Erreur HTTP : ", response.status)
        }
        const data = await response.json();
        players = data;
        const container = document.querySelector('select');
        container.innerText = "<option value=''>---SELECTIONNE UN JOUEUR---</option>"
        for (const player of data) {
            let name = document.createElement('option');
            name.setAttribute('value', `${player['name']}`);
            name.innerText = player.name;
            container.appendChild(name);
        }
        if (choice && data.some(player => player.name === choice)) {
            container.value = choice;
        } else {
            container.value = "";
            choice = null;
        }
        console.log(data);

    } catch (error) {
        console.error("Erreur :", error);
    }
}


async function loadPlayerStats(name) {
    const ip = localStorage.getItem("IP");
    try {
        const response = await fetch(`http://${ip}/api/stats?name=${name}`)
        if (!response.ok) {
            throw new Error("Erreur HTTP : ", response.status)
        }
        const data = await response.json();
        let liArray = document.querySelectorAll('li');
        let i = 0;
        for (const key of Object.keys(data)) {
            console.log(key);
            if (key !== "gamesPlayed") {
                liArray[i].innerHTML = ` ${key} : ${data[key]}`;
                i++;
            }
        }
    } catch (error) {
        console.error("Erreur :", error);
    }
}


async function loadRanking() {
    const container = document.getElementById("ranking");
    players.forEach(player => {
        let el = document.createElement("li");
        let text = "";
        for (const key of Object.keys(player)) {
            text += `  ${player[key]}  `;
        }
        el.innerText = text;
        container.appendChild(el);
    })
    let liArray = document.getElementById("ranking").querySelectorAll("li");
}

