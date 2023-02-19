let birthDay = "2023-02-20";
let today = parseFloat(Date.now());
let diffInDays = (parseFloat(Date.parse(birthDay)) - today) / (1000 * 60 * 60 * 24);
function reminder() {
  if (diffInDays < 0 && diffInDays > -1) {
    console.log("Today is your birthday! Happy Birthday!");
  } else if (diffInDays < -1) {
    console.log(`It's not your birthday yet. There are still ${365 - Math.ceil(diffInDays) * (-1)} days to go.`);
  } 
  else {
    console.log("Not there yet still have " + Math.ceil(diffInDays) + " days left for your birthday!"
    );
  }
}
reminder()
setInterval(() => {
  reminder()
}, 1000 * 60 * 60 * 24);