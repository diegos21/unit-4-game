
 $(document).ready(function() {


    alert("elige un peliador");



    var primerseleccion = false;
    function seleccionpeliador(){
        if (primerseleccion == false){
            primerseleccion = true;
        }
    }
    var segundaseleccion = false;
    function seleccionoponente(){
        if (segundaseleccion == false){
            segundaseleccion = true;
        }
    }
func3();

var x = 0;

var hp1 = 73; var hp2 = 88; var hp3 = 55;
var ap1 = 20;  var ap2 = 6; var ap3 = 4;
var cp1 = 5;  var cp2 = 8;  var cp3 = 3;
cont1 = 0;

    function func4(){
      if (cont1 == 1 && segundaseleccion == true) {
          if (x == 1) {// 1 vs 2
            $('#defendarea').attr('src','https://vignette.wikia.nocookie.net/hunterxhunter/images/6/66/Gin_HD.png/revision/latest?cb=20141006032816&path-prefix=es')
            duelo(12);
          }
          if (x == 2) { // 1 vs 3
            $("#defendarea").attr('src','http://pm1.narvii.com/6522/2ed83bdfef0365d7bf5ca05c67c395b587f22193_00.jpg');
            $("#defendarea").show();
            hpgon(hp3);
            duelo(13);
          }
          if (x == 3) { // 1 vs 4
            $('#defendarea').attr('src','https://i.pinimg.com/236x/e9/dc/cc/e9dcccb6799da849d914bd769081bb71--inspirational-x.jpg');
            $("#defendarea").show();
            duelo(14);
          }
      }
    }


    function hpging(x) {
      document.getElementById("defend").max = "88";
      document.getElementById("defend").value = x;
      if (x < 0) {
        reset();
      }

    }

    function hpgon(x) {
      document.getElementById("defend").max = "55";
      document.getElementById("defend").value = x;
      if (x < 0) {
        reset();
      }

    }

    function hpnetero(x) {
      document.getElementById("attack").max = "73";
      document.getElementById("attack").value = x;

    }
    function reset() {
      $("#defendarea").hide();
      segundaseleccion = false;
      func3();

    }




var cont0 = 0; var dmgnetero;

function duelo(x){

  if (x == 12) {
      $('.btn').on("click", function() {

          cont0++;
          dmgnetero = ap1*cont0; // netero ap
          hp2 = hp2 -dmgnetero;  // ging hp
          hpging(hp2);   // ging
          hp1 = hp1 - cp2;
          hpnetero(hp1);

      });
  }
  if (x == 13) {
      $('.btn').on("click", function() {
          dmgnetero = ap1*cont0; //netero ap
          hp3 = hp3 - x; //gon hp
          hpgon(hp3); //gon
          hp1 = hp1 - cp3;
          hpnetero(hp1);


        //alert("hola13");

      });
  }
  if (x == 14) {
      $('.btn').on("click", function() {
        alert("hola14");

      });
  }


}


function func3(){

    $('#1').on({
        'click': function(){
            if (primerseleccion == false){
                seleccionpeliador();
                $('#attackarea').attr('src','https://vignette.wikia.nocookie.net/hunterxhunter/images/6/6a/Isaac_Netero_in_Departure%21.png/revision/latest?cb=20140709111509');
                alert("elije un oponente");
                cont1++;
            }
        }
    });

    $('#2').on({
      'click': function(){
        if (segundaseleccion == false){
          seleccionoponente();
          x = 1;
          func4();
        }
      }
    });

    $('#3').on({
      'click': function(){
        if (segundaseleccion == false){
          seleccionoponente();
          x = 2;
          func4();
        }
      }
    });

    $('#4').on({
      'click': function(){
        if (segundaseleccion == false){
          seleccionoponente();
          x = 3;
          func4();
        }
      }
    });

  }
















// $('#2').on({
//     'click': function(){
//         if (primerseleccion == false){
//             seleccionpeliador();
//             $('#attackarea').attr('src','https://vignette.wikia.nocookie.net/hunterxhunter/images/6/66/Gin_HD.png/revision/latest?cb=20141006032816&path-prefix=es');
//         }
//     }
// });
//
// $('#3').on({
//     'click': function(){
//       if (primerseleccion == false) {
//           seleccionpeliador();
//           $('#attackarea').attr('src','http://pm1.narvii.com/6522/2ed83bdfef0365d7bf5ca05c67c395b587f22193_00.jpg');
//       }
//
//     }
// });
//
// $('#4').on({
//     'click': function(){
//         if (primerseleccion == false) {
//             $('#attackarea').attr('src','https://i.pinimg.com/236x/e9/dc/cc/e9dcccb6799da849d914bd769081bb71--inspirational-x.jpg');
//         }
//     }
// });


 });
