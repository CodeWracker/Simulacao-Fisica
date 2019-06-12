let verif = 0;
let mili = 0;
function setup(){
    createCanvas(canvasSize.width, canvasSize.heigh);
    for(let i = 0; i < quantBalls; i++){
        ball[i] = new Ball();
    }
    
    getBallData();
}
function draw(){
    background(38,38,38);
    
    if(millis()> mili){
        getBallData();
        mili = millis() + 1;
        
        //console.log(ball);
        
        for(let i = 0; i< quantBalls; i++){
            ball[i].show();
        }
    }
    
    

}
