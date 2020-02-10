function getBallData(){
    $.getJSON(_API_,{
        format: "json"
    })
    .done(function( data ){
        ballInfo = data;
        for(let i = 0; i< quantBalls; i++){
            ball[i].centerX = data[i].center_x;
            ball[i].centerY = data[i].center_y;
            ball[i].radius = data[i].radius;
        }
               
    });

}