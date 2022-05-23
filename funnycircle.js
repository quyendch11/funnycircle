class Circle {
    radius;
    x;
    y;
    color;
    constructor(x,y,radius,color) {
        this.x = x ;
        this.y = y ;
        this.radius = radius;
        this.color = color;
    }
    settoado(){
        let x = Math.random() * window.innerWidth;
        let y= Math.random() * window.innerHeight;
        let radius = Math.floor(Math.random() * 80);
        this.x =x;
        this.y =y;
        this.radius = radius;
    }
    getcolor(){
                let red = Math.floor(Math.random() * 255);
                let green = Math.floor(Math.random() * 255);
                let blue = Math.floor(Math.random() * 255);
              let color = "rgb(" + red + "," + blue + "," + green + ")";
              this.color = color;
        }
     createCircle(){
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
         ctx.fillStyle = this.color;
        ctx.fill();}
}
