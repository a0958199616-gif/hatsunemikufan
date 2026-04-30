const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<60;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    size:Math.random()*4+1,
    speed:Math.random()*0.5+0.2
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle="#39c5bb";
  particles.forEach(p=>{
    p.y-=p.speed;
    if(p.y<0) p.y=canvas.height;

    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fill();
  });

  requestAnimationFrame(animate);
}
animate();
