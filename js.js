const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class SuperPacman {

    constructor({x, y, size } = {x:100, y:100, size: 100}) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.angle = 330 + Math.round((Math.random() * 30), 1);
        this.movementIncrementX = Math.random()*4*(Math.random() > 0.5 ? 1 : -1);
        this.movementIncrementY = Math.random()*4*(Math.random() > 0.5 ? 1 : -1);
        this.color = "rgb(" + Math.round( (Math.random() * 255), 1) + ', ' + Math.round( (Math.random() * 255), 1) + ', '+ Math.round( (Math.random() * 255), 1) + ")";
        this.numberStar = 3 + Math.round(Math.random() * 10, 1);
    }

    draw() {
        let a, b;
        this.angle+= 1;                      //закриваю рот на +1 градус
        if (this.movementIncrementX > 0) {   // в залежності від напрямку руху розміщую рот
            if (this.angle >= 360){
                this.angle-= 30;
            }
            a = (Math.PI / 180) * this.angle;
            b = (Math.PI / 180) * (360 - this.angle);
        }
        else {
            if (this.angle >= 360){
                this.angle-= 30;
            }
            a = (Math.PI / 180) * (this.angle - 180);
            b = (Math.PI / 180) * (180 + (360 - this.angle));
        }
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, a, b, true);
        ctx.lineTo(this.x, this.y);
        ctx.moveTo(this.x * 1.01, this.y * 0.925);
        ctx.fill();
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(this.x, this.y - 0.3 * this.size, this.size * 0.08, 0, Math.PI * 2, true);
        ctx.fill();
    }

    move(){                                                        //метод для руху, з врахуванням зміни напрямку при досягненні краю екрану
        if (((this.x + this.size) >= 1000) || (this.x <this.size))
            this.movementIncrementX *= -1;
        this.x += this.movementIncrementX;
        this.draw();
    }
}

class Diamond extends SuperPacman {
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.x + this.size, this.y);
        ctx.lineTo(this.x, this.y + 1.4 * this.size);
        ctx.lineTo(this.x - this.size, this.y);
        ctx.lineTo(this.x, this.y - 1.4 * this.size);
        ctx.fill();
    }
}

class Star extends SuperPacman {
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.x + this.size, this.y);
        let n = this.numberStar, cx, cy;
        let tangle = 2 * Math.PI / n;
        for (let i = 0; i < n; i++) {
            cx = this.x + this.size * Math.cos(tangle * i);
            cy = this.y - this.size * Math.sin(tangle * i);
            ctx.lineTo(cx, cy);
            cx = this.x + this.size / 2.5 * Math.cos(tangle * i + tangle / 2);
            cy = this.y - this.size / 2.5 * Math.sin(tangle * i + tangle / 2);
            ctx.lineTo(cx, cy);
        }
        ctx.fill();
    }

    move() {                                                        //метод для руху, з врахуванням обмеження руху колом
        let radiusStaLength = Math.sqrt(Math.pow((this.x - 500), 2) + Math.pow((this.y - 500), 2));
        if (radiusStaLength + this.size > 400 ){
            this.movementIncrementX *= -1}
        if (radiusStaLength + this.size> 400 ){
            this.movementIncrementY *= -1}
        this.x += this.movementIncrementX;
        this.y += this.movementIncrementY;
        this.draw();
    }
}


const figures = [];
for (let i = 0; i <= 50; i++){                         // малюємо пакманів
    let size = Math.random() * 75;
    let spacman = new SuperPacman({
        x: size + Math.abs( Math.random() * 1000 - 2*size),
        y: size + Math.abs( Math.random() * 1000 - 2*size),
        size
    });
    spacman.draw();
    figures.push(spacman);

    let diamond= new Diamond({              // малюємо ромби і додаємо в масив
        x: size + Math.abs( Math.random() * 1000 - 2*size),
        y: 1.4 * size + Math.abs( Math.random() * 1000 - 2.8*size),
        size
    });
    diamond.draw();
    figures.push(diamond);

    let star= new Star({                    // малюємо зірки і додаємо в масив
        x: 500,
        y: 500,
        size
    });
    star.draw();
    figures.push(star);
}

setInterval(function () {             //clearInterval(b.timer) - зупинка таймеру
    ctx.clearRect(0, 0, 1000, 1000);  // context.clearRect(x,y,width,height) очищення поля
    figures.forEach((spacman) => {
        spacman.move();
    })
}, 20);
