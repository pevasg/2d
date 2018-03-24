const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class Rect {
    constructor({x, y, alpha, size } = {x:100, y:100, opacity: 1, size: 100}){
        this.x = x;
        this.y = y;
        this.alpha = alpha;
        this.size = size;
        //this.grd = ctx.createLinearGradient(this.x, this.y, this.size, 0); //хак, що виконує різні рівні "opasity"
        //this.grd.addColorStop(0, "rgba(255,0,0," + opacity + ")");         //
        //this.grd.addColorStop(1, "rgba(255,0,0," + opacity + ")");         //


        this.movementIncrementX = Math.random()*4*(Math.random() > 0.5 ? 1 : -1);
        this.movementIncrementY = Math.random()*4*(Math.random() > 0.5 ? 1 : -1);
    }

    draw(){                                                       //промальовування квадратиків
        ctx.fillStyle = "#FD0000";
        ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.globalAlpha = this.alpha;
    }
    move(){                                                        //метод для руху, з врахуванням зміни напрямку при досягненні краю екрану
        if (((this.x + this.size) > 1000) || (this.x < 0))
            this.movementIncrementX *= -1;

        if (((this.y + this.size) > 1000) || (this.y < 0))
            this.movementIncrementY *= -1;

        this.y += this.movementIncrementY;
        this.x += this.movementIncrementX;
        this.draw();
    }
}

class superPacmen extends Rect{
    draw(){

    }
}

const figures = [];                      // малюємо 100 квадратиків і створюємо масив
for (let i = 0; i <= 100; i++){
    let size = Math.random() * 100;
    let rect = new Rect({
        x: Math.abs( Math.random() * 1000 - size),
        y: Math.abs(Math.random() * 1000 - size),
        alpha: Math.max(0.2, Math.random()),
       // opacity: Math.random() * 0.5,
        size
    });
    rect.draw();
    figures.push(rect);
}

                                      // зсовуємо кубики
setInterval(function () {             //clearInterval(b.timer) - зупинка таймеру
    ctx.clearRect(0, 0, 1000, 1000);  // context.clearRect(x,y,width,height) очищення поля
    figures.forEach((rect) => {
        rect.move();
    })
}, 10);                                // інтервал в мл. сек

























/*
var rabbit = Object.create(null);          //створення обєкту

// варіант 1
 Object.defineProperty(rabbit, 'name', {   //створення поля обєкту
     value: 'Bunny',                       //властивості для кожного поля окермо
     writable: true,
     configurable: true,
     enumerable: true
 });

 // варіант 2
Object.defineProperty(rabbit, {
    name: {                                   //створення поля обєкту
        value: 'Bunny',                       //властивості для полів по ключах
        writable: true,
        configurable: true,
        enumerable: true
    },
    gender: {
        value: 'Male',                       //властивості для полів по ключах
        writable: true,
        configurable: true,
        enumerable: true
    }
});

// варінт 3
rabbit.name = 'Bunny';     //всі властивості полів стануть за замовчуванням 'true'
rabbit.gender = 'Male';

// варінт 4
rabbit['name'] = 'Bunny';
var field = 'gender';
rabbit[field] = 'Male';  // зручно, бо можна звертатись у властивість через змінну

// варіант 5
rabbit.face = {          //можна створити через фігурні дужки поля для обєкта,
    nose: 'black',
    eye: 'blue'
};
rubbit.run = function (spead) {    //можна додати властивість з фунцією
    this.spead = spead;
}

Object,getOwnPropertyName(rabbit); // для отримання переліку властивостей обєкта
delete rabbit['gender'];           //функція, видаляє конкретне поле обєкту
rabbit.hasOwnProperty('gender');   //перевіряє наявність конкретного поля обєкту
for(var key in rabbit){            //перебирає властивості обєкту
}

// Прототипування і Об'єкти повторити

// ES15
class Animal {
    constructor(name){
        this.name - name;
    }
}

let
    class Rabbit extend Animal{  // наслідування
    constructor(){
        super();                 // функція що викликає батьківський конструктор
        this.covering = 'woll';
    }
    jump(distance){              //поля для нашого, дочірного класу
    }
}

static screem(voluve){};         //статичний метод не потребує створення нового ексземпляру для застовування

//гетери / сетери

//пріорітет звернення в css і по JS

*/



