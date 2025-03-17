setInterval(myFunction, 1000);
function myFunction() {
  let d = new Date();
  const y = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  console.log(y);
}
