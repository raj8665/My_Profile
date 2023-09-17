var ClickedPattern = [];
const buttons = document.getElementsByClassName("small");
function again(pattern) {
   let value=0;
   const countInterval=setInterval(changeBlue,500,value);
   function changeBlue() {
      document.getElementById(pattern[value]).style.backgroundColor = "#00407A";
      value++;
      if(value>pattern.length-1){
         clearInterval(countInterval);
         ClickedPattern=[];
      }
   }
}
function changeColor(id) {
   document.getElementById(id).style.backgroundColor = "red";
}
const buttonPressed = a => {
   changeColor(a.target.id);
   ClickedPattern.push(a.target.id);
   if (a.target.id == "9") {
      again(ClickedPattern);
   }
}
for (let small of buttons) {
   small.addEventListener("click", buttonPressed);
}