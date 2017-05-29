class Bridge {
    constructor() {
        this.div = document.createElement("bridge");
        document.body.appendChild(this.div);
        this.rect = this.div.getBoundingClientRect();
        this.setPosition();
        this.planks = new Array();
    }
    setPosition() {
        this.posX = window.innerWidth / 2 - this.rect.width / 2;
        this.div.style.left = this.posX + "px";
        this.div.style.top = this.posY + "px";
    }
}
class Rock {
    constructor() {
    }
}
class Game {
    constructor() {
        console.log('test');
        this.bridge = new Bridge();
    }
}
window.addEventListener("load", function () {
    new Game();
});
class Plank {
    constructor() {
        console.log("Plank created");
    }
}
//# sourceMappingURL=main.js.map