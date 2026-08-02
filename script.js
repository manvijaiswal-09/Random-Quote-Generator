const button=document.querySelector("#button");
const heading=document.querySelector("#heading")
const choice=()=>{
    const quotes = [
  "Honesty is the best policy.",
  "Hard work beats talent when talent doesn't work hard.",
  "Success comes to those who never give up.",
  "Dream big and work hard.",
  "Believe in yourself and all that you are.",
  "Practice makes a person perfect.",
  "Knowledge is power.",
  "Time is the most valuable asset.",
  "Every day is a new opportunity.",
  "Stay positive and keep moving forward.",
  "Failure is the stepping stone to success.",
  "Patience is the key to success.",
  "Actions speak louder than words.",
  "Learn from yesterday, live for today.",
  "Consistency is the key to excellence."
];
 const randIdx= Math.floor(Math.random()*15);
    return quotes[randIdx];

}
button.addEventListener('click',()=>{
      
      heading.innerText=choice();

})