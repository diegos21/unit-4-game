
 $(document).ready(function() {


    alert("elige un peliador");

    

    var primerseleccion = false;
    function seleccionpeliador(){
        if (primerseleccion == false){
            primerseleccion = true;
        }

    }


$('#1').on({
    'click': function(){        
        if (primerseleccion == false){
            seleccionpeliador();
            $('#attackarea').attr('src','https://vignette.wikia.nocookie.net/hunterxhunter/images/6/6a/Isaac_Netero_in_Departure%21.png/revision/latest?cb=20140709111509');  
        }      
    }
});

$('#2').on({
    'click': function(){
        if (primerseleccion == false){   
            seleccionpeliador();     
            $('#attackarea').attr('src','https://vignette.wikia.nocookie.net/hunterxhunter/images/6/66/Gin_HD.png/revision/latest?cb=20141006032816&path-prefix=es');   
        }     
    }
});

$('#3').on({
    'click': function(){
        $('#attackarea').attr('src','http://pm1.narvii.com/6522/2ed83bdfef0365d7bf5ca05c67c395b587f22193_00.jpg');        
    }
});

$('#4').on({
    'click': function(){
        $('#attackarea').attr('src','https://i.pinimg.com/236x/e9/dc/cc/e9dcccb6799da849d914bd769081bb71--inspirational-x.jpg');        
    }
});


 });