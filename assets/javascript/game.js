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
        img: ["assets/images/netero.png", "assets/images/ging.png", "assets/images/gon.jpg", "assets/images/killua.jpg", "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="],
        iddef: [0, 0, 0, 0],
        idata: [0, 0, 0, 0],
        flagboleana1: false,
        flagboleana2: false,
        hp: [100, 100, 100, 100],
        ap: [4, 6, 4, 4],
        cp: [5, 5, 3, 5],
        neterowon: [0,2,2,2],
        gingwon: [2,0,2,2],
        gonwon: [2,2,0,2],
        killuawon: [2,2,2,0],


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
            player.roundscont = 0;
            player.duelcont =0;
            player.duelcont2 = null;
            player.duelcont3 = null;

            
            player.iddef = [0, 0, 0, 0],

            player.idata = [0, 0, 0, 0];
            player.flagboleana1 = false;
            player.flagboleana2 = false;
            player.hp = [100, 100, 100, 100];
            player.ap = [4, 6, 4, 4];
            player.cp = [5, 5, 3, 5];           
            player.imagesata(4);
            player.imagesdef(4);
           

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
                    //console.log("hehee");
                    //console.log(player.contador);
                    //console.log(player.flagboleana2);
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
                    //console.log("hehehehhe");
                    player.duelcont2 = i;
                    player.duel(i, player.duelcont3);
                    player.imagesdef(i);
                }
                else if (player.idata[i] == 1 && player.roundscont == 0) {
                    console.log("sup");
                    player.duelcont3 = i;
                    player.roundscont++;
                    player.duel(player.duelcont2 ,i);
                    player.imagesata(i);
                }
            }
        },

        barrita: function (x,y) { //x para attack... y def
            let current_progress = x;
            $("#dynamicAta").css("width", current_progress + "%");
            $("#dynamicAta").attr("aria-valuenow", current_progress);            
            $("#dynamicAta").text(current_progress);

            let current_progress2 = y;
            $("#dynamicDef").css("width", current_progress2 + "%");
            $("#dynamicDef").attr("aria-valuenow", current_progress2);
            $("#dynamicDef").text(current_progress2);


        },

        duel: function (x,y) { //x es defensa.. y es ataque
            var vidaAtacante = player.hp[y];
            var vidaDEF = player.hp[x];
            

            $('.btn').on("click", function() {
                if (vidaAtacante > 0 && vidaDEF > 0) {
                    player.duelcont++;
                    let attackerAP = player.ap[y] * player.duelcont;
                    //console.log(player.duelcont);
                    //console.log(attackerAP);
                    vidaDEF = vidaDEF - attackerAP;
                    console.log(vidaDEF);
                    vidaAtacante = vidaAtacante - player.cp[x];
                    player.hp[y] = vidaAtacante;
                    player.hp[x] = vidaDEF;
                    //console.log(vidaAtacante);
                    console.log(player.hp[y]);
                    player.barrita(vidaAtacante, vidaDEF);
                }

                else if (player.hp[x] < 0){
                    player.iddef[x] = 2; 
                    player.contador = 1;
                    player.flagboleana2 = false;
                    player.roundscont = 0;
                    player.ganadores(); 
                }                
                    
                
            });


        },

        ganadores: function () {
                      
            console.log(this.iddef[0]);
            console.log(this.iddef[1]);
            console.log(this.iddef[2]);
            console.log(this.iddef[3]);



           
           if (player.arraysIdentical(this.neterowon, this.iddef)) {
               console.log("neterooo");
               this.reset();
           }
           if (player.arraysIdentical(this.gingwon, this.iddef)) {
            console.log("giiiiinngg");
            this.reset();
            }
            if (player.arraysIdentical(this.gonwon, this.iddef)) {
                console.log("goooooonnnn");
                this.reset();
            }
            if (player.arraysIdentical(this.killuawon, this.iddef)) {
             console.log("killuuuuaaa");
             this.reset();
             }

            


        },

        
        arraysIdentical: function (a, b) {
            var i = a.length;
            if (i != b.length) return false;
            while (i--) {
                if (a[i] !== b[i]) return false;
            }
            return true;
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
                //console.log("holaaa");
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
