const canvas = document.getElementById('canvas');
const ctx  = canvas.getContext('2d');

const a = {};
a.name = 'Vasia';
let name = 'Vasia';

class Rect {
    consructor({x, y, opasity, size} = {x:100, y:100, opacity:0.7, size:300}){
        this.x = 100;
        this.y = 100;
        this.size = 100;
    }
    draw(){
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

const rect  = new Rect();
rect.draw();

let size = 100;
//let variable = 'opacity';

const c1 = {
    x: Math.random() * 1000,
    y: Math.random() * 1000,
    opacity: Math.random() * 0.5,
    size: Math.random() * 100
};

const  rect = [];

for (var i=0; i<0)
const rect  = new Rect();
rect.draw()


//заанімувати

setInterval(function () {
    ctx.clearRect(0, 0, 1000, 1000);
    //стрілкова функція і this

})

