var rules = document.getElementById("rules");
var closeRules = document.getElementById("close-btn");
var showRules = document.getElementById("show-rules");
let score = 0;

var canvas = document.getElementById("display"); /* creating canvas context */
var ctx = canvas.getContext("2d");

const brickRowCount = 9;
const brickColumnCount = 5; /* no of brick counts on rows and columns */

showRules.addEventListener("click", () =>
  /* remove -380 px transformation*/
  rules.classList.add("show")
);

closeRules.addEventListener("click", () =>
  /* add -380 px transformation */
  rules.classList.remove("show")
);

/* Create ball props */
var ball = {
  x: canvas.width / 2,
  y: canvas.height / 2 /* positioning and size */,
  size: 10 /* radius */,
  speed: 4, //
  dx: 4 /* movements*/,
  dy: -4, //
};

/* Create paddle props */
var paddle = {
  x: canvas.width / 2 - 40,
  y: canvas.height - 20,
  w: 80,
  h: 10,
  speed: 8,
  dx: 0 /* no y cause our paddles moves only in the x direction */,
};

/* Draw ball on canvas */
function drawBall() {
  ctx.beginPath();
  ctx.arc(
    ball.x,
    ball.y,
    ball.size,
    0,
    Math.PI * 2
  ); /* for creation of a sphere */ /* unclear i have used it directly from the mdn documentations */
  ctx.fillStyle = "#0095dd";
  ctx.fill();
  ctx.closePath();
}

/* Create brick props */
const brickInfo = {
  w: 70,
  h: 20,
  padding: 10,
  offsetX: 45,
  offsetY: 60,
  visible: true,
};

const bricks = [];
for (let i = 0; i < brickRowCount; i++) {
  bricks[i] = [];
  for (let j = 0; j < brickColumnCount; j++) {
    const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
    const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;
    bricks[i][j] = { x, y, ...brickInfo };
  }
}

/* function for the drawn objects */

function drawPaddle() {
  ctx.beginPath(); /* starting drawing */
  ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h); /* imaginary skecting */
  ctx.fillStyle = "#0095dd"; /* imaginary coloring */
  ctx.fill(); /* actual skecting and coloring */
  ctx.closePath(); /* ending drawing */
}

function drawScore() {
  ctx.font = "20px Arial"; /* similar formatting for text drawing */
  ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
}

function drawBricks() {
  bricks.forEach(column => {
    column.forEach(brick => {
      /* you can name anything in palce of column and brick */
      ctx.beginPath();
      ctx.rect(brick.x, brick.y, brick.w, brick.h);
      ctx.fillStyle = brick.visible ? "#0095dd" : "transparent";
      ctx.fill();
      ctx.closePath();
    });
  });
}

/* Functionality Functions */

function resetBlocksAndScore(){
  score = 0;

  bricks.forEach(column => {
    column.forEach(brick => brick.visible = true)
  })
}

function increaseScore(){
  score++;
}

function losing(){
  if(ball.y + ball.size > canvas.height){
    resetBlocksAndScore();
  }
}

/* Move Paddle */
function movePaddle() {
  paddle.x =
    paddle.x +
    paddle.dx; /* hal fil hal to zero hai but key event functions me dx ka value update hota hai */

  // Wall detection
  if (paddle.x + paddle.w > canvas.width) {
    /* + paddle isheliye kyu ki center se nahi edge se start hota hai drawing -> canvas css hai centre of gravity nahi */
    paddle.x = canvas.width - paddle.w;
  }

  if (paddle.x < 0) {
    paddle.x = 0; /* starting of the canvas */
  }
}

function moveBall() {
  ball.x = ball.x + ball.dx;
  ball.y = ball.y + ball.dy;

  /* Wall collision */
  if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
    ball.dx *= -1; /*  */
  }

  if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
    ball.dy *= -1;
  }

  /* Paddle Collision */
  if (
    ball.x - ball.size > paddle.x &&
    ball.x + ball.size < paddle.x + paddle.w &&
    ball.y + ball.size > paddle.y
  ) {
    ball.dy = -ball.speed;
  }

  /* Brick Collision */
  bricks.forEach(column => {
    column.forEach(brick => {
      if (brick.visible) {
        if (
          ball.x - ball.size > brick.x && // left brick side check
          ball.x + ball.size < brick.x + brick.w && // right brick side check
          ball.y + ball.size > brick.y && // top brick side check
          ball.y - ball.size < brick.y + brick.h // bottom brick side check
        ) {
          ball.dy *= -1;
          brick.visible = false;   /* upar transparent property define kar ke aaye huee hai */
          increaseScore();
        }
      }
    });
  });

  /* Losing */
  losing();
}

/* Calling everything */
function drawCall() {
  drawBall();
  drawPaddle(); /* set of functions for all the draw call */
  drawScore();
  drawBricks();
}

function update() {
  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  ); /* canvas clear karke naaya paint hoga  */
  movePaddle();
  moveBall(); /* update karenge drawing ko */ /* varna uske upar he dar ho jayge // overlapped or something */
  drawCall(); /* draw karenge */
  requestAnimationFrame(
    update
  ); /* update request combo ;// -> will have to look into it for more details */
}

update(); /* main call for now */

function keyDown(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    paddle.dx = paddle.speed; /* left down dono ka khayal rakha gaya hai */
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    paddle.dx = -paddle.speed;
  }
}

function keyUp(e) {
  if (
    e.key === "Right" ||
    e.key === "ArrowRight" /* jab arrow buttons upar aayega to */ ||
    e.key === "Left" ||
    e.key === "ArrowLeft"
  ) {
    paddle.dx = 0;
  }
}

document.addEventListener("keydown", keyDown); /* e event pakadta hai  */
document.addEventListener(
  "keyup",
  keyUp
); /* basically apan cah rahe hai ki jab dabaye to bhage aur chode to rukh jaye */
/* to ye activities ke liye to dx to update karna padega */

/* 


*/
