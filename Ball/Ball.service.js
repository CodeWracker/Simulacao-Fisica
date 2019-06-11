function getBallData(){
    $.getJSON(_API_,{
        format: "json"
    })
    .done(function( data ){
        console.log(data);
        
    });
  

    //gotData();
}