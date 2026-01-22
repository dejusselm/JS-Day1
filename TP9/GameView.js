class GameView {
    constructor(game, gameControl) {
        this.canvas = document.querySelector("canvas");
        this.canvas.width = 600;
        this.canvas.height = 600;
        this.ctx = this.canvas.getContext("2d");
        this.game = game;
        this.gameControl = gameControl;
        this.backGame = gameControl.gameInfo;
        this.sprites = {};

        for (let i = 1; i < 30; i++) {
            let skinPath = `assets/${i}.png`;
            this.sprites[skinPath] = new Image();
            this.sprites[skinPath].src = skinPath;
        }

    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawBackground() {
        this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
    }


    drawPlayer(player) {
        const sprite = this.sprites[player.skinPath];
        player.animate();
        let cropX = 0;
        let cropY = 128;
        let offSetX=32;
        let offSetY=32;
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
            offSetX = 32;
            offSetY = 32;
        } else if (player.isAttacking || player.attackSpriteIndex > 0) {
            cropSize = 192;
            offSetX = 96;
            offSetY = 76;
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
        } else if (player.isDying) {
            cropY = 1280;
            cropX = player.dyingSpriteIndex * 64;
        }
        this.ctx.drawImage(
            sprite,
            cropX, cropY, cropSize, cropSize,
            player.renderX * 600- (cropSize / 2), player.renderY * 600-(cropSize / 2), cropSize, cropSize
        );
    }

    render() {
        this.clear();
        for (const playerId in this.game.players) {
            let player = this.game.players[playerId];
            this.drawPlayer(player);
        }
        this.drawBackground();

    }


}