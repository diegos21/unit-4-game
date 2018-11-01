$(document).ready(function() {
  //variables
  var hp1 = 100; var hp2 = 1500; var hp3 = 1000; var hp4 = 100;
  var ap1 = 4;  var ap2 = 6; var ap3 = 4; var ap4 = 4;
  var cp1 = 5;  var cp2 = 5;  var cp3 = 3;  var cp4 = 5;

  var setup1 = 0; var setup2 = 0; var setup3 = 0; var setup4 = 0;
  var setup1_1 = 0; var setup2_1 = 0; var setup3_1 = 0; var setup4_1 = 0;

  var contNetero = 0; var contGing = 0; var contGon = 0; var contKillua = 0;
  var contReset = 0;


  var migra = false;


  //secuencia
  setup();

  //$('.btn').on("click", function() {
  //  AttackOnBtn();
  //});




  //funciones
  function setup() {



    $('#defendarea').attr('src','data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=');
    $('#attackarea').attr('src','data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=');




    alert("elije un peliador y oponente");

    $('#1').on({
        'click': function(){
          //atacante
          if (migra == false && setup1 == 0) {
            immigration();
            setup1 = 1; //betero main
            $("#attackarea").attr('src','https://vignette.wikia.nocookie.net/hunterxhunter/images/6/6a/Isaac_Netero_in_Departure%21.png/revision/latest?cb=20140709111509');
            AttackOnBtn();
          }
          //oponente
          if (migra == true && setup1 == 0) {
            setup1_1 = 1; //netero oponente
            $("#defendarea").attr('src','https://vignette.wikia.nocookie.net/hunterxhunter/images/6/6a/Isaac_Netero_in_Departure%21.png/revision/latest?cb=20140709111509');
            AttackOnBtn();
          }
        }
    });
    $('#2').on({
        'click': function(){
          if (migra == false && setup2 == 0) {
            immigration();
            setup2 = 1; //ging main
            $('#attackarea').attr('src','https://vignette.wikia.nocookie.net/hunterxhunter/images/6/66/Gin_HD.png/revision/latest?cb=20141006032816&path-prefix=es');
            AttackOnBtn();
          }
          if (migra == true && setup2 == 0) {
            setup2_1 = 1; //ging oponente
            $('#defendarea').attr('src','https://vignette.wikia.nocookie.net/hunterxhunter/images/6/66/Gin_HD.png/revision/latest?cb=20141006032816&path-prefix=es');
            AttackOnBtn();
          }
        }
    });
    $('#3').on({
        'click': function(){
          if (migra == false && setup3 == 0) {
            immigration();
            setup3 = 1;
            $("#attackarea").attr('src','http://pm1.narvii.com/6522/2ed83bdfef0365d7bf5ca05c67c395b587f22193_00.jpg');
            AttackOnBtn();
          }
          if (migra == true && setup3 == 0) {
            setup3_1 = 1;
            $("#defendarea").attr('src','http://pm1.narvii.com/6522/2ed83bdfef0365d7bf5ca05c67c395b587f22193_00.jpg');
            AttackOnBtn();
          }
        }
    });
    $('#4').on({
        'click': function(){
          if (migra == false && setup4 == 0) {
            immigration();
            setup4 = 1;
            $('#attackarea').attr('src','https://i.pinimg.com/236x/e9/dc/cc/e9dcccb6799da849d914bd769081bb71--inspirational-x.jpg');
            AttackOnBtn();
          }
          if (migra == true && setup4 == 0) {
            setup4_1 = 1;
            $('#defendarea').attr('src','https://i.pinimg.com/236x/e9/dc/cc/e9dcccb6799da849d914bd769081bb71--inspirational-x.jpg');
            AttackOnBtn();
          }
        }
    });

  }

  function AttackOnBtn() {

    //netero vs gon
    if (setup1 == 1 && setup3_1 == 1) {
      $('.btn').on("click", function() {
        if(hp3 > 0 && contReset == 0){
          contNetero++;
          ap1 = 16*contNetero;
          //alert(contNetero);
          hp3 = hp3 - ap1;
          hp1 = hp1 - cp3;
          hpnetero(hp1);
          hpgon(hp3);
          //alert(ap1);
          reset();
        }

      });
    }

    //netero vs ging
    if (setup1 == 1 && setup2_1 == 1) {
      $('.btn').on("click", function() {
        if(hp2 > 0 && contReset == 0){

          contNetero++;
          ap1 = 16*contNetero;
          hp2 = hp2 - ap1;
          hp1 = hp1 - cp2;
          hpnetero(hp1);
          hpging(hp2);
          //alert(ap1);
          reset();
        }
      });
    }

    //netero vs killua
    if (setup1 == 1 && setup4_1 == 1) {
      $('.btn').on("click", function() {
        if(hp4 > 0 && contReset == 0){
          contNetero++;
          ap1 = 16*contNetero;
          hp4 = hp4 - ap1;
          hp1 = hp1 - cp4;
          hpnetero(hp1);
          hpkillua(hp4);
          //alert(ap1);
          reset();
        }
      });
    }



  }

  function reset (){


    if (hp2 < 0 && hp3 < 0 && hp4 < 0 && contReset == 0) {
      contReset++;
      hp1 = 100; hp2 = 1500; hp3 = 1000; hp4 = 100;
      migra = false;
      setup1 = 0; setup2 = 0; setup3 = 0; setup4 = 0;
      contNetero = 0;

      hpnetero(0);
      setup();
    }

  }


  function immigration() {
    if (migra == false) {
      migra = true;

    }

  }

  function hpnetero(x) {
      document.getElementById("attack").max = "100";
      document.getElementById("attack").value = x;

    }

  function hpgon(x) {
      document.getElementById("defend").max = "1000";
      document.getElementById("defend").value = x;

    }

    function hpging(x) {
        document.getElementById("defend").max = "1500";
        document.getElementById("defend").value = x;

      }
    function hpkillua(x) {
        document.getElementById("defend").max = "100";
        document.getElementById("defend").value = x;

      }















































});
