//  Indica que a janela já foi carregada. Função base de funcionamento da tela do jogo.
window.onload = function() {

    // Recupera o tamanho da tela
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    // Contexto 2d para o jogo.

    snake = [];
    positionX = 10;
    positionY = 10;
    foodX = 15;
    foodY = 15;
    velX = 0;
    velY = 0;
    grid = 20;
    tam = 3;

    //  Executa a função game a cada 100 milisegundos.
    setInterval(game, 100);

    document.addEventListener("keydown", function(e) {
        let code = e.key;
        if ( code == "ArrowRight" ) {
            velX = 1;
            velY = 0;
        } 
        else if ( code == "ArrowLeft" ) {
            velX = -1;
            velY = 0
        } 
        else if ( code == "ArrowUp" ) {
            velY = -1;
            velX = 0
        }
        else if ( code == "ArrowDown" ) {
            velY = 1;
            velX = 0;
        };
    });
};

function game() {
    // SCREEN SETTINGS
    ctx.fillStyle = "#161515";    
    ctx.fillRect(0, 0, canvas.width, canvas.height); // LEFT, TOP, WIDTH, HEIGHT
    // END    

    // SNAKE DIRECTION
    positionX += velX;
    positionY += velY;
    // END

    // MIRRORING
    if ( positionX > grid ) {
        positionX = 0;
    };

    if ( positionX < 0 ) {
        positionX = grid;
    };

    if ( positionY > grid ) {
        positionY = 0;
    };

    if ( positionY < 0 ) {
        positionY = grid;
    };
    // END    

    // SNAKE SETTINGS
    ctx.fillStyle = "#000";
    ctx.shadowBlur = 7;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = "#6B2DDE";
    for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x*grid, snake[i].y*grid, grid-1, grid-1);

        if ( snake[i].x == positionX && snake[i].y == positionY ) {
            tam = 3;
        };
    };

    snake.push({x: positionX, y: positionY});
    // END    

    // CONTROL THE SNAKE TAIL
    while( snake.length > tam ) {
        // DELETE THE FIRST INCLUDED ARRAY VALUE
        snake.shift();
    }

    ctx.fillStyle = "#F1C40F";
    ctx.fillRect(foodX*grid, foodY*grid, grid, grid);

    if ( foodX == positionX && foodY == positionY ) {
        tam++;
        foodX = Math.floor(Math.random()*grid);
        foodY = Math.floor(Math.random()*grid);
    };

};
