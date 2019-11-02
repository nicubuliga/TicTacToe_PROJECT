   //variabile globale
   var t = [];
   var bool, gameOver, winner;
   
   defaultTable();

   // resetare
   $("button").click(defaultTable);

   //la fiecare click pune x sau 0
$("td").click(function(){
    var id = $(this).attr("id");
    var x;
    var y;
        if(id === "11") x = 0, y = 0;else
        if(id === "12") x = 0, y = 1;else
        if(id === "13") x = 0, y = 2;else

        if(id === "21") x = 1, y = 0;else
        if(id === "22") x = 1, y = 1;else
        if(id === "23") x = 1, y = 2;else

        if(id === "31") x = 2, y = 0;else
        if(id === "32") x = 2, y = 1;else
        if(id === "33") x = 2, y = 2;
    if(bool && !t[x][y] && !gameOver) {
        $(this).find("div").css("color", "red");
        $(this).find("div").text("X");
        $("span").css("color", "blue");
        $("span").text("O");
        t[x][y] = 1;
    } else
    if(!t[x][y] && !gameOver)
    {
        $(this).find("div").css("color", "blue");
        $(this).find("div").text("O");
        $("span").css("color", "red");
        $("span").text("X");
        t[x][y] = 2;
    };
    bool = !bool;
    if(verificaWinnerul()) {
        var color;
        if(winner == 1) winner = "X", color = "red"; else winner = "O", color = "blue";
        $("h1").html("PLAYER <span>" + winner +  "</span> WON!");
        $("span").css("color", color);
        gameOver = true;
    } else
    if( !gameOver)
    {
        var egalitate = true;
        for(var i = 0; i < 3; i++)
        for(var j = 0; j < 3; j++)
            if( !t[i][j]) egalitate = false;
            if(egalitate) {
                gameOver = true;
                $("h1").text("DRAW!");
            }
    }
});

    //functia de verificare
    function verificaWinnerul(){
        var won = false;
        // linia 0
        if(t[0][0] && t[0][0] == t[0][1] && t[0][1] == t[0][2]) won = true, winner = t[0][0];else
        // linia 1
        if(t[1][0] && t[1][0] == t[1][1] && t[1][1] == t[1][2]) won = true, winner = t[1][0];else
        // linia 2
        if(t[2][0] && t[2][0] == t[2][1] && t[2][1] == t[2][2]) won = true, winner = t[2][0];else
        // coloana 0
        if(t[0][0] && t[0][0] == t[1][0] && t[1][0] == t[2][0]) won = true, winner = t[0][0];else
        // coloana 1
        if(t[0][1] && t[0][1] == t[1][1] && t[1][1] == t[2][1]) won = true, winner = t[0][1];else
        // coloana 2
        if(t[0][2] && t[0][2] == t[1][2] && t[1][2] == t[2][2]) won = true, winner = t[0][2];else
        // diagonala 1
        if( t[0][0] && t[0][0] == t[1][1] && t[1][1] == t[2][2]) won = true, winner = t[0][0];else
        //diagonala 2
        if(t[0][2] && t[0][2] == t[1][1] && t[1][1] == t[2][0]) won = true, winner = t[0][2];
        return won;
    }
    function defaultTable() {
        $("h1").html("PLAYER <span>X</span> TURN");
        $("td div").text("");
        //tabelul cu informatia
    t = [
       [0, 0, 0],
       [0, 0, 0],
       [0, 0, 0]
   ];
    bool = true;
    gameOver = false;
    };