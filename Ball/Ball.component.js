class Ball {
    constructor(){
        this.centerX;
        this.centerY;
        this.radius;
    }
    show(){
        //console.log(this.centerX);
        circle(this.centerX, this.centerY, this.radius);
    }
}