function removeElem() {
  var elem = document.getElementById("jsbox");
  elem.parentNode.removeChild(elem);
  var table = document.getElementById("transtable");
  table.style.marginTop = "201px";

}



function highlightDash() {
  console.log("clicked dash!");
  var dash = document.getElementById("dash");
  console.log(dash);
  var wal = document.getElementById("wallet");
    console.log(wal);
  dash.classList.add("highlight");
  wal.classList.remove("highlight");
}

function highlightWallet() {
  var dashboard = document.getElementById("dash");
  console.log("hey!");
  var wallet = document.getElementById("wallet");
  dashboard.classList.remove("highlight");
  wallet.classList.add("highlight");
}


function changeContentToDash() {
  console.log("change content");
  var dashboard = document.getElementById("container1");
  var wallet = document.getElementById("container2");
  dashboard.style.display = "block";
  wallet.style.display = "none";}


function changeContentToWallet() {
  console.log("change content2");
  //change container 1 display to none
  var dashboard = document.getElementById("container1");
  var wallet = document.getElementById("container2");
  dashboard.style.display = "none";
  wallet.style.display = "block";
  //change container 2 display to block
}
