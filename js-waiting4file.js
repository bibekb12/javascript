async function getFile() {
  let myPromise = new Promise(function (resolve) {
    let req = new XMLHttpRequest();
    req.open("GET", "test.html");
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });
  await myPromise;
}

getFile();
