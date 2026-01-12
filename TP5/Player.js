class Player {
    constructor(pseudo, skin) {
        let randomX = Math.floor(Math.random() * 599);
        let randomY = Math.floor(Math.random() * 599);

        this.pseudo = pseudo;
        this.skinName = skin;
        this.skinFrame = 0;
        this.level = 1;
        this.speed = 1;
        this.atk = 20;
        this.maxHp = 100;
        this.currentHp = 100;
        this.maxCd = 0.8;
        this.currentCd = 0;
        this.isAttacking = false;
        this.isWalking = false;
        this.isDying = false;
        this.pos = [randomX, randomY];
    }

    update(updateData) {
        this.skinFrame = updateData.skinFrame;
        this.currentHp = updateData.currentHp       
        this.currentCd = updateData.currentCd;
        this.pos = updateData.pos;
        this.isAttacking = updateData.isAttacking;
        this.isDying = updateData.isDying;
        this.isWalking = updateData.isWalking;

    }

}
