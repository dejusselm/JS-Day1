class GameController {
    constructor() {

        // Server sends updates at 20 ticks per second
        this.SERVER_TICK_RATE = 20;
        // Duration between two server ticks in milliseconds
        this.SERVER_INTERVAL = 1000 / this.SERVER_TICK_RATE;

        this.gameInfo = new Game();

        this.formData = {
            name: localStorage.getItem("name"),
            url: localStorage.getItem("url"),
            skinPath: localStorage.getItem("skinPath")
        };

        this.inputState = {
            up: false,
            down: false,
            left: false,
            right: false,
            attack: false
        }

        this.view = new GameView(this.gameInfo,this);

        this.socket = new WebSocket("ws://localhost:8000/ws");

        this.initInput();
        this.initSocket();
        this.startInputSender();

        // Permanently bind "this" at the instance of the GameController class
        this.loop = this.loop.bind(this);

        // Regulates framerate to keep 60fps
        requestAnimationFrame(this.loop);

    }

    initInput() {
        document.addEventListener("keyup", (event) => {
            switch (event.key) {
                case "q":
                    this.inputState.left = false;
                    break;
                case "z":
                    this.inputState.up = false;
                    break;
                case "d":
                    this.inputState.right = false;
                    break;
                case "s":
                    this.inputState.down = false;
                    break;
                case "k":
                    this.inputState.attack = false;
                    break;
            }
        });
        document.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "q":
                    this.inputState.left = true;
                    break;
                case "z":
                    this.inputState.up = true;
                    break;
                case "d":
                    this.inputState.right = true;
                    break;
                case "s":
                    this.inputState.down = true;
                    break;
                case "k":
                    this.inputState.attack = true;
                    break;
            }
        });
    }

    initSocket() {
        this.socket.onopen = () => {
            console.log("Connected to server");

            this.socket.send(JSON.stringify({
                name: this.formData.name,
                skinPath: this.formData.skinPath
            }));
        };

        this.socket.onmessage = (event) => {
            console.log("Message received");
            const msg = JSON.parse(event.data);
            this.gameInfo.update(msg);
        };
    }

    startInputSender() {
        setInterval(() => {
            if (this.socket.readyState === this.socket.OPEN) {
                this.socket.send(JSON.stringify({
                    type: "input",
                    input: this.inputState
                }));
            }
        }, this.SERVER_INTERVAL);
    }


    // === Main render loop ===
    loop(timestamp) {
        // console.log(this.inputState);

        this.view.render();

        // Request the next frame
        requestAnimationFrame(this.loop);
    }


}

// === Start the game controller by instantiating the GameController class ===
// This line will execute the constructor (e.g, launch the frontend)
new GameController();
