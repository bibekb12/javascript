async function myDisplay() {
  let myPromise = new Promise(function (resolve, reject) {
    resolve("I love You !!");
  });
  document.writeln = await myPromise;
}
myDisplay();
