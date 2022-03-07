let grid=document.querySelectorAll('.color');
let h2=document.querySelector('h2');
let colors=[];
let i=0,j=0;
let span=document.querySelector('span');
let guess=3;
span.innerText=guess;
while(i<6){
  let x=Math.floor(Math.random()*256),y=Math.floor(Math.random()*256);
  let z=Math.floor(Math.random()*256);
  let color=`rgb(${x},${y},${z})`;
  if(colors.includes(color)===false){
    colors.push((color));
    i++;
  }
}
let ci=Math.floor(Math.random()*6),di=Math.floor(Math.random()*6);
h2.innerText=colors[ci].slice(0,3).toUpperCase()+colors[ci].slice(3);
i=0;j=0;
while(i<6){
  if(j===ci)
  j++;
  else if(i===di){
    grid[i].style.backgroundColor=colors[ci];
    grid[i].classList.add('c-color');
    i++;
  }
  else{
    grid[i].style.backgroundColor=colors[j];
    grid[i].classList.add('w-color');
    i++;
    j++;
  }
}
grid.forEach(ans=>{
  ans.addEventListener("click",()=>{
    if(ans.classList[1]==="c-color"){
      alert("hurray!!,right guess");
      location.reload();
    }
    else{
      if(guess>1){
        guess--;
        alert('Opps!! Try again');
        span.innerText=guess;
      }
      else{
        alert("Game Over,you used all your guesses!!");
        location.reload();
      }
    }
  })
})
