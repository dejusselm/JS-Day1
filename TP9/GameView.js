class GameView {
    constructor(game, gameControl) {
        this.canvas = document.querySelector("canvas");
        this.canvas.width = 600;
        this.canvas.height = 600;
        this.ctx = this.canvas.getContext("2d");
        this.game = game;
        this.gameControl = gameControl;
        this.backGame = gameControl.gameInfo;
        this.background = new Image();
        this.background.src = "assets/truc.gif";
        this.sprites = {};

        for (let i = 1; i < 30; i++) {
            let skinPath = `assets/${i}.png`;
            this.sprites[skinPath] = new Image();
            this.sprites[skinPath].src = skinPath;
        }

    }

    drawBackground() {
        this.ctx.drawImage(this.background, 0, 0, 600, 600, 0, 0, 600, 600);
        this.ctx.strokeRect(0, 0, 600, 600);
    }

    drawPlayer(player) {
        const sprite = this.sprites[player.skinPath];
        const badSprites = ["assets/7.png", "assets/13.png", "assets/18.png",
            "assets/21.png", "assets/24.png", "assets/26.png", "assets/29.png"];
        player.animate();
        let cropX = 0;
        let cropY = 128;
        let cropSize = 64;
        switch (player.direction) {
            case 0:
                cropY = 512;
                break;
            case 1:
                cropY = 704;
                break;
            case 2:
                cropY = 640;
                break;
            case 3:
                cropY = 576;
                break;
        }
        if (player.isWalking) {
            cropX = player.walkSpriteIndex * 64;
        } else if (player.isAttacking || player.attackSpriteIndex > 0) {
            if (!badSprites.includes(player.skinPath)) {
                cropSize = 192;
                switch (player.direction) {
                    case 0:
                        cropY = 3456;
                        break;
                    case 1:
                        cropY = 4032;
                        break;
                    case 2:
                        cropY = 3840;
                        break;
                    case 3:
                        cropY = 3648;
                        break;
                };
                cropX = player.attackSpriteIndex * 192;
            } else {
                cropSize = 128;
                switch (player.direction) {
                    case 0:
                        cropY = 3456;
                        break;
                    case 1:
                        cropY = 3840;
                        break;
                    case 2:
                        cropY = 3712;
                        break;
                    case 3:
                        cropY = 3584;
                        break;
                };
                cropX = player.attackSpriteIndex * 128;
            }

        } else if (player.isDying) {
            cropY = 1280;
            cropX = player.deathSpriteIndex * 64;
        }
        if (!player.isDead) {
            this.ctx.drawImage(
                sprite,
                cropX, cropY, cropSize, cropSize,
                player.renderX * 600 - (cropSize / 2),
                player.renderY * 600 - (cropSize / 2), cropSize, cropSize
            );
            this.drawPlayerHud(player);
        }

    }

    drawPlayerHud(player) {
        this.ctx.font = "15px monospace";
        this.ctx.textAlign = "center";
        this.ctx.strokeText(`Lvl.${player.lvl} | ${player.name}`,
            player.renderX * 600, player.renderY * 600 - 35, 150);
        this.ctx.fillStyle = "rgb(159, 3, 0)";
        this.ctx.fillRect(player.renderX * 600 - 30, player.renderY * 600 + 43,
            60, 8);
        this.ctx.fillStyle = "rgb(241, 124, 106)";
        this.ctx.fillRect(player.renderX * 600 - 30, player.renderY * 600 + 43,
            60 * (1 - player.hp / player.maxHp), 8);

        this.ctx.fillStyle = "rgb(41, 88, 231)";
        this.ctx.fillRect(player.renderX * 600 - 30, player.renderY * 600 + 35,
            60, 5);
        this.ctx.fillStyle = "rgb(24, 37, 78)";
        this.ctx.fillRect(player.renderX * 600 - 30, player.renderY * 600 + 35,
            60 * (1 - player.currentAttackCooldown / player.attackCooldown), 5);
    }

    drawHud() {
        this.ctx.font = "50px monospace";
        this.ctx.textAlign = "center";
        this.ctx.fillStyle = "white";
        let timer = Math.floor(this.game.timer);
        if (timer > 60) {
            let min = Math.floor(this.game.timer / 60);
            this.ctx.fillText(`${min}"${timer % 60}`, 300, 70, 300);
        } else {
            this.ctx.fillText(`0"${timer} `, 300, 70, 250);
        }
    }

    win() {
        let winner;
        for (const playerId in this.game.players) {
            if (!this.game.players[playerId].isDead) {
                winner = this.game.players[playerId];
            }
        }
        const sprite = this.sprites[winner.skinPath];
        this.ctx.font = "15px monospace";
        this.ctx.textAlign = "center";
        this.ctx.strokeText(`${winner.name} won !`,
            0.5 * 600, 0.5 * 600 - 35, 1000);
        this.ctx.drawImage(
            sprite,
            64 * 4, 64 * 3, 64, 64,
            150 * 600 - (64 / 2),
            150 * 600 - (64 / 2), 64, 64
        );
    }

    initializeRanking() {
        let liNumber = document.querySelectorAll('li').length;
        while (liNumber < Object.keys(this.game.players).length) {
            let container2 = document.querySelector('ul');
            let li = document.createElement('li');
            container2.appendChild(li);
            liNumber++;
        }
    }

    ranking() {
        let deadArray = [];
        let aliveArray = [];
        for (const playerId in this.game.players) {
            if (!this.game.players[playerId].isDead) {
                aliveArray.push(this.game.players[playerId]);
            } else {
                deadArray.push(this.game.players[playerId]);
            }
        }
        aliveArray.sort((a, b) => {
            if (a.lvl > b.lvl) {
                return -1;
            }
            if (a.lvl < b.lvl) {
                return 1;
            }
            return 0;
        })
        let liArray = document.querySelectorAll('li');
        let newArray = aliveArray.concat(deadArray);
        for (let playerI = 0; playerI < newArray.length; playerI++) {
            let player = newArray[playerI];
            liArray[playerI].innerHTML = `Lvl.${player.lvl} ${player.name}&nbsp${player.deathTime}`;
        };
        this.ctx.font= "15px monospace";
        this.ctx.fillText(`${aliveArray.length} / ${newArray.length} alive players`, 100,30);
    }

    reset() {
        let liArray = document.querySelectorAll('li');
        liArray.forEach(li => {
            li.remove();
        });
    }

    render() {
        this.drawBackground();
        this.initializeRanking();
        this.ranking();
        if (!this.game.isOver) {
            for (const playerId in this.game.players) {
                let player = this.game.players[playerId];
                if (!player.isDead) {
                    this.drawPlayer(player);
                }
            }
            this.drawHud();
        } else {
            this.win();
        }
    }


}