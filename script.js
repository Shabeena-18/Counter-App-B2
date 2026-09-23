console.log("script");
let count = document.getElementById("counter");
console.log(count.textContent, typeof(count.textContent));

function Increment(){
    console.log("Clicked");
    let previousCount = parseInt(count.textContent);
    console.log(previousCount);
    let updateCount = previousCount + 1;
    console.log(updateCount);
    count.textContent = updateCount;
   if(updateCount>0){
    count.style.color = "green";
    console.log(count);
   }
   else if(updateCount<0){
    count.style.color = "red";
   }
   else if(updateCount==0){
    count.style.color = "black";
   }
}

function Decrement(){
    console.log("Clicked");
    let previousCount = parseInt(count.textContent);
    console.log(previousCount);
    let updateCount = previousCount - 1;
    console.log(updateCount);
    count.textContent = updateCount;
    if(updateCount>0){
    count.style.color = "green";
    console.log(count);
   }
   else if(updateCount<0){
    count.style.color = "red";
   }
   else if(updateCount==0){
    count.style.color = "black";
   }
}

function Reset(){
    count.textContent = parseInt(0);
    if(updateCount>0){
    count.style.color = "green";
    console.log(count);
   }
   else if(updateCount<0){
    count.style.color = "red";
   }
   else if(updateCount==0){
    count.style.color = "black";
   }
}