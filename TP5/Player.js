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
        //sprite
        this.walkSpriteDuration = 2;
        this.walkSpriteIndex = 0;
        this.walkSpriteNumber = 9;
        this.currentWalkSpriteStep = 0;
        this.AttackSpriteDuration = 2;
        this.AttackSpriteIndex = 0;
        this.currentAttackSpriteStep = 0;
        this.AttackSpriteNumber = 6;
        this.DeathSpriteDuration = 2;
        this.DeathSpriteIndex = 0;
        this.currenDeathSpriteStep = 0;
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

    animate() {
        if (this.isDying) {
            this.currenDeathSpriteStep += 1;
            if (this.DeathSpriteIndex < this.DeathSpriteNumber) {
                if (this.currentDeathSpriteStep >= this.DeathSpriteDuration) {
                    this.currentDeathSpriteStep = 0;
                    this.DeathSpriteIndex++;
                }
            }
        } else if (this.isAttacking || this.AttackSpriteIndex > 0) {
            console.log("555555 - début attaque");
            this.currentAttackSpriteStep += 1;
            if (this.currentAttackSpriteStep >= this.AttackSpriteDuration) {
                this.currentAttackSpriteStep = 0;
                this.AttackSpriteIndex++;
            }
            if (this.AttackSpriteIndex >= this.AttackSpriteNumber) {
                this.AttackSpriteIndex = 0;
                this.currentAttackSpriteStep = 0;
                this.isAttacking = false;
                console.log("555555 - fin attaque");
            }

        }
        else if (this.isWalking) {
            if (this.walkSpriteIndex < this.walkSpriteNumber) {
                this.currentWalkSpriteStep += 1;
                if (this.currentWalkSpriteStep >= this.walkSpriteDuration) {
                    this.currentWalkSpriteStep = 0;
                    this.walkSpriteIndex++;
                    console.log("en train de marcher");
                }
            } else {
                console.log("--------> l'animation de marche s'arrete et se reset")
                console.log("00000 - fin marche");
                this.walkSpriteIndex = 0;
            }
        } else if (!this.isWalking) {
            console.log("---> reset walking")
            this.walkSpriteIndex = 0;
            this.currentWalkSpriteStep = 0;

        } else {
            console.log("---> is idling");
            this.skinFrame += 1;
            if (this.skinFrame >= 2) {
                this.skinFrame = 0;
            }
        }
    }

    // movement() {
    //     addEventListener("z", function (e) {
    //         this.pos[1] += 2;
    //     })
    //     addEventListener("q", function (e) {
    //         this.pos[0] -= 2;
    //     })
    //     addEventListener("d", function (e) {
    //         this.pos[0] += 2;
    //     })
    //     addEventListener("s", function (e) {
    //         this.pos[1] -= 2;
    //     })
    // }
}


let p1 = new Player("quascia", 0);
// p1.isWalking = true;
// console.log(p1.walkSpriteIndex);
// console.log("00000 - début marche");
// for (let i = 0; i < 60; i++) {
//     if (i == 15) {
//         p1.isWalking = false;
//         p1.isAttacking = true;

//     }
//     console.log("Current walk sprite step : ", p1.currentWalkSpriteStep, "Walk sprite index : ", p1.walkSpriteIndex);
//     p1.animate();
//     if (p1.isWalking == false) {
//         p1.isWalking = true;
//     }
//     p1.isAttacking = false;
// }



//tester avec un coup iswalking / un coup isattacking / et un coup is dying