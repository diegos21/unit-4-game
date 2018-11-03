$(document).ready(function() {


    window.onload = function() {
        $("#reset").on("click", player.reset);
        $("#start").on("click", player.start);

    };

    var player = {
        contador: 0,
        roundscont: 0,
        duelcont: 0,
        duelcont2: null,
        duelcont3: null,
        img: ["assets/images/netero.png", "assets/images/ging.png", "assets/images/gon.jpg", "assets/images/killua.jpg"],
        iddef: [0, 0, 0, 0],
        idata: [0, 0, 0, 0],
        flagboleana1: false,
        flagboleana2: false,
        hp: [100, 1000, 1500, 100],
        ap: [4, 6, 4, 4],
        cp: [5, 5, 3, 5],


        flag1: function () {
            if (player.flagboleana1 == false) {
                player.flagboleana1 = true;

            }
        },
        flag2: function () {
            if (player.flagboleana2 == false) {
                player.flagboleana2 = true;
                player.contador = 0;
                //console.log("hee");
            }
        },

        reset: function() {
            player.contador = 0;
            player.flagboleana1 = false;
            player.flagboleana2 = false;
            $("#defendarea").attr('src','data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=');
            $("#attackarea").attr('src','data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=');

        },

        start: function() {

            $("#1").on({
                "click": function(){

                    player.netero();

                    //do something
                }
            });

            $("#2").on({
                "click": function(){
                    player.ging();
                    //console.log(player.contador);


                    //do something
                }
            });

            $("#3").on({
                "click": function(){
                    player.gon();
                    //do something
                }
            });

            $("#4").on({
                "click": function(){
                    player.killua();
                    //do something
                }
            });



        },

        imagesdef: function (i) {
            //console.log(player.img[i]);
            $("#defendarea").html("<img src=" + player.img[i] + " height='220' width='300'>")
        },
        imagesata: function (i) {
            //console.log(player.img[i]);
            $("#attackarea").html("<img src=" + player.img[i] + " height='220' width='300'>")
        },

        rounds: function () {

            for (var i = 0; i < 4; i++) {
                if (player.iddef[i] == 1) {
                    player.duelcont2 = i;
                    player.duel(i, player.duelcont3);
                    player.imagesdef(i);
                }
                if (player.idata[i] == 1 && player.roundscont == 0) {
                    player.duelcont3 = i;
                    player.roundscont++;
                    player.duel(player.duelcont2 ,i);
                    player.imagesata(i);
                }
            }
        },

        duel: function (x,y) { //x es defensa.. y es ataque
            var vidaAtacante = player.hp[y];
            var vidaDEF = player.hp[x];

            $('.btn').on("click", function() {
                if (vidaAtacante > 0) {
                    player.duelcont++;
                    let attackerAP = player.ap[y] * player.duelcont;
                    //console.log(player.duelcont);
                    //console.log(attackerAP);
                    vidaDEF = vidaDEF - attackerAP;
                    //console.log(vidaDEF);
                    vidaAtacante = vidaAtacante - player.cp[x];
                    //console.log(vidaAtacante);

                    if (vidaDEF <= 0) {
                        //buscar otro oponente 
                    }
                }
            });


        },

        netero: function () {

            if ( player.flagboleana2 == false && player.contador == 1) { //defensa
                player.flag2();
                player.iddef[0] = 1;
                player.rounds();
            }
            if ( player.flagboleana1 == false ) {
                player.contador++;
                player.flag1();
                player.idata[0] = 1;
                player.rounds();
            }

        },

        ging: function () {
            if ( player.flagboleana2 == false && player.contador == 1){ //defensa
                player.flag2();
                player.iddef[1] = 1;
                player.rounds();
            }

            if ( player.flagboleana1 == false) {
                player.contador++;
                player.flag1();
                player.idata[1] = 1;
                player.rounds();
            }
        },

        gon: function () {
            if (player.flagboleana2 == false && player.contador == 1){ //defensa
                player.flag2();
                player.iddef[2] = 1;
                player.rounds();
            }

            if ( player.flagboleana1 == false) {
                player.contador++;
                player.flag1();
                player.idata[2] = 1;
                player.rounds();
            }
        },

        killua: function () {
            if (player.flagboleana2 == false && player.contador == 1){ //defensa
                player.flag2();
                player.iddef[3] = 1;
                player.idata[0] = 1;
                player.rounds();
            }

            if ( player.flagboleana1 == false) {
                player.contador++;
                player.flag1();
                player.idata[3] = 1;
                player.rounds();
            }
        },


    };




















});
